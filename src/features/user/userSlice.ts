import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface userState {
  accessToken: string;
  refreshToken: string;
  authenticated: boolean;
}
const initialState: userState = {
  accessToken: "",
  refreshToken: "", // save refreshtoken temporary in redux
  authenticated: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addAccessToken: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
    },
    addRefreshToken: (state, action: PayloadAction<string>) => {
      state.refreshToken = action.payload;
    },
    Authenticate: (state, action: PayloadAction<boolean>) => {
      state.authenticated = action.payload;
    },
  },
});
export const {
  addAccessToken,
  addRefreshToken,
  Authenticate,
} = userSlice.actions;
export default userSlice.reducer;
