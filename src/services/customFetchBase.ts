import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";
import { Authenticate, AddAccessToken } from "../features/user/userSlice";
import { Mutex } from "async-mutex";

const mutex = new Mutex();
const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:3001/",
  prepareHeaders: (headers, { getState }: any) => {
    const token: string = getState().user.accessToken;
    if (token) {
      headers.set("Authentication", `Bearer ${token}`);
    }
    return headers;
  },
});
const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  await mutex.waitForUnlock();
  let result = await baseQuery(args, api, extraOptions);
  if (result.error) {
    if (!mutex.isLocked()) {
      const release = await mutex.acquire();
      try {
        // set type to any temporary
        const refreshResult: any = await baseQuery(
          { method: "POST", url: "user/refresh", credentials: "include" },
          api,
          extraOptions
        );
        if (refreshResult.data) {
          api.dispatch(AddAccessToken(refreshResult.data.accessToken));
          result = await baseQuery(args, api, extraOptions);
        }
      } finally {
        release();
      }
    } else {
      await mutex.waitForUnlock();
      result = await baseQuery(args, api, extraOptions);
    }
  }
  return result;
};

export default baseQueryWithReauth;
