import { Suspense, useEffect } from "react";
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
  EmailVerification,
  Workshops,
  YendhiraKovil,
} from "./pages";
import { useUser } from "./hooks/useUser";
import { useDispatch, useSelector } from "react-redux";
import { useQueryClient } from "@tanstack/react-query";
import { setCurrentUser } from "./app/features/userSlice";

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
        <Route path="verify-email" element={<EmailVerification />} />
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
  // const { getUserQuery } = useUser();
  // const { isLoading, isSuccess, data, isError, error } = getUserQuery;
  // const dispatch = useDispatch();
  // const queryClient = useQueryClient();

  // useEffect(() => {
  //   if (isSuccess) {
  //     dispatch(setCurrentUser(data)); // Set user in Redux
  //   }
  //   // queryClient.invalidateQueries(["user"]); // Ensure refetch on mount
  // }, [isSuccess, data, dispatch, queryClient]);

  // if (isLoading) {
  //   return <div>Loading user...</div>;
  // }

  // if (isError) {
  //   console.log(error);
  //   return <div>Error loading user data. Please try again.</div>;
  // }
  return (
    <Suspense fallback={<Loader />}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default App;
