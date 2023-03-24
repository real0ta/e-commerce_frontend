import React from "react";
import { Navigate } from "react-router-dom";
import { useIsAdminQuery } from "../services/ecom";
import Loading from "../components/Loading/Loading";

interface Props {
  children?: React.ReactNode;
}

const AdminRoute = ({ children }: Props) => {
  const { isSuccess, isError, isLoading } = useIsAdminQuery();

  if (isLoading) {
    return (
      <>
        <Loading />
      </>
    );
  }

  if (isSuccess) {
    return <React.Fragment>{children}</React.Fragment>;
  }

  return <Navigate to="/" />;
};

export default AdminRoute;
