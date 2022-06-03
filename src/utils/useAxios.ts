import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../app/store";
import { addAccessToken } from "../features/user/userSlice";
import jwt_decode from "jwt-decode";
const BASE_URL = process.env.REACT_APP_BASE_URL;

type TokenTypes = {
  exp: number;
  role: string;
};

const useAxios = () => {
  const accessToken = useSelector((state: RootState) => state.user.accessToken);
  const dispatch = useDispatch();

  const instance = axios.create({
    baseURL: BASE_URL,
    headers: {
      Authentication: `Bearer ${accessToken}`,
    },
  });

  instance.interceptors.request.use(async (req) => {
    let decoded: TokenTypes;
    let expired;
    if (accessToken) {
      decoded = jwt_decode(accessToken);
      const date = new Date();
      expired = date.getTime() / 1000 > decoded.exp;
    }

    if (expired) {
      const refreshToken = localStorage.getItem("token");
      const res = await instance.post("/refresh", {
        token: refreshToken,
      });

      dispatch(addAccessToken(res.data.accessToken));
      if (!req.headers) req.headers = {};
      req.headers.Authentication = `Bearer ${res.data.accessToken}`;
    }
    return req;
  });

  return instance;
};

export default useAxios;
