import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addAccessToken } from "../features/user/userSlice";
import instance from "./axios";
import jwt_decode from "jwt-decode";

interface Props {
  children?: React.ReactNode;
}

type TokenTypes = {
  exp: number;
  role: string;
};

const AdminRoute = ({ children }: Props) => {
  const [token, setToken] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const getAccessToken = async () => {
      const refreshToken = localStorage.getItem("token");
      try {
        const res = await instance.post("/user/refresh/", {
          token: refreshToken,
        });
        setToken(res.data.accessToken);
        dispatch(addAccessToken(res.data.accessToken));
      } catch (er) {}
    };

    getAccessToken();
  });

  if (token) {
    const decoded: TokenTypes = jwt_decode(token);
    if (decoded.role === "Admin") {
      return <React.Fragment>{children}</React.Fragment>;
    }
  }

  return (
    <div>
      <p>Admin page</p>
    </div>
  );
};

export default AdminRoute;
