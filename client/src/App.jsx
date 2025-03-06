import { Suspense } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import { AdminLayout, AuthLayout, RootLayout, UserLayout } from "./layouts";
import {
  Activities,
  AutoBiography,
  BookMyDharshan,
  Contact,
  Dashboard,
  Donate,
  EventDetails,
  Events,
  Home,
  Loader,
  Login,
  NotFound,
  Profile,
  Register,
  Workshops,
  YendhiraKovil,
} from "./pages";
import { useSelector } from "react-redux";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="autobiography" element={<AutoBiography />} />
        <Route path="activities" element={<Activities />} />
        <Route path="workshops" element={<Workshops />} />
        <Route path="yendhirakovil" element={<YendhiraKovil />} />
        <Route path="donate" element={<Donate />} />
        <Route path="book-my-dharshan" element={<BookMyDharshan />} />
        <Route path="events">
          <Route index element={<Events />} />
          <Route path=":id" element={<EventDetails />} />
        </Route>
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
    <Suspense fallback={<Loader />}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default App;
