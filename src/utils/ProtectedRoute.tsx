import { Navigate } from "react-router-dom";
import Loading from '../components/Loading/Loading'
import React from "react";
import { useIsAdminQuery } from '../services/ecom'
interface Props {
  children?: React.ReactNode;
}

const ProtectedRoute = ({ children }: Props) => {
  const { isSuccess, isLoading } = useIsAdminQuery()

  if (isLoading) return <Loading />

  if (isSuccess) return <Navigate to="/" />

  return <>{children}</>;
};

export default ProtectedRoute;
