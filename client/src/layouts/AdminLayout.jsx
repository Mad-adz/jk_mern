import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const AdminLayout = () => {
  // const { user, error, status } = useSelector((state) => state.auth);
  const { user, token, isAuthenticated } = useSelector((state) => state.auth);

  console.log({ user, token, isAuthenticated });
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default AdminLayout;
