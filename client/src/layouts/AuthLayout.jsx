import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const AuthLayout = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  console.log({ isAuthenticated });

  return !isAuthenticated ? <Outlet /> : <Navigate to="/" replace />;
};

export default AuthLayout;
