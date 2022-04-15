import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface userState {
  accessToken: string;
  authenticated: boolean;
}
const initialState: userState = {
  accessToken: "",
  authenticated: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addAccessToken: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
    },
    Authenticate: (state, action: PayloadAction<boolean>) => {
      state.authenticated = action.payload;
    },
  },
});
export const { addAccessToken, Authenticate } = userSlice.actions;
export default userSlice.reducer;
