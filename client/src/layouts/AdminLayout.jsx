import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const AdminLayout = () => {
  const { user, token, isAuthenticated } = useSelector((state) => state.auth);

  console.log({ user, token, isAuthenticated });
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default AdminLayout;
