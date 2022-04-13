import React from "react";
import { RootState } from "../app/store";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

interface Props {
    children?: React.ReactNode;
}

const ProtectedRoute = ({ children }: Props) => {
    const authenticated = useSelector(
        (state: RootState) => state.user.authenticated
    );
    if (authenticated) {
        return <Navigate to="/" />;
    }
    return <React.Fragment>{children} </React.Fragment>;
};

export default ProtectedRoute;
