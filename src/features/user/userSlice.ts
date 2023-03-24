import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface userState {
  accessToken: string;
}
const initialState: userState = {
  accessToken: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    AddAccessToken: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
    },
  },
});
export const { AddAccessToken } = userSlice.actions;

export default userSlice.reducer;
