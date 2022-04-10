import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface userState {
  accessToken: string;
  refreshToken: string;
}
const initialState: userState = {
  accessToken: "",
  refreshToken: "", // save refreshtoken temporary in redux
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
  },
});
export const { addAccessToken, addRefreshToken } = userSlice.actions;
export default userSlice.reducer;
