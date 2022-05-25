import instance from "./axios";
import { useSelector, useDispatch } from "react-redux";
import { addAccessToken } from "../features/user/userSlice";
import { RootState } from "../app/store";

const useRefreshToken = () => {
  let token = ''
  const dispatch = useDispatch()
  const getAccessToken = async () => {
    const refreshToken = localStorage.getItem("token");
    const res = await instance.post("/user/refresh/", {
      token: refreshToken,
    })
    dispatch(addAccessToken(res.data.accessToken))
    token = res.data.accessToken
  }
  getAccessToken()
  console.log(token)
  return token
};

export default useRefreshToken
