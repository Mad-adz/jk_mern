import { Suspense } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import { AdminLayout, AuthLayout, RootLayout, UserLayout } from "./layouts";
import {
  Contact,
  Dashboard,
  Home,
  Login,
  NotFound,
  Profile,
  Register,
} from "./pages";
import { useSelector } from "react-redux";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="contact" element={<Contact />} />
      </Route>
      <Route element={<AuthLayout />}>
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
      </Route>
      <Route element={<UserLayout />}>
        <Route path="profile" element={<Profile />} />
      </Route>
      <Route element={<AdminLayout />}>
        <Route path="dashboard" element={<Dashboard />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </>
  )
);

const App = () => {
  const userData = useSelector((state) => state?.user);
  if (userData) {
    const { status, error, data } = userData;
    console.log({ status, error, data });
  }

  return (
    <Suspense fallback={"loading"}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default App;
