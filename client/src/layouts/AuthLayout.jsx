import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const AuthLayout = () => {
  const { user, error, status } = useSelector((state) => state.auth);
  console.log({ user, error, status });
  return !user ? <Outlet /> : <Navigate to="/" replace />;
};

export default AuthLayout;
