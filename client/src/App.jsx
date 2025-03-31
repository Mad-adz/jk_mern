import { Suspense } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

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
// import { useUser } from "./hooks/useUser";
// import { useDispatch } from "react-redux";
// import { useQueryClient } from "@tanstack/react-query";
// import { setCurrentUser } from "./app/features/userSlice";

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
    <HelmetProvider>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>
          Jai kosha Foundation | Sree La Sree Mahalakshmi Narashima Swamigal |
          Spiritual Growth & Meditation Practices
        </title>
        <meta
          name="description"
          content="Explore the journey of spiritual growth, meditation practices, and yoga workshops to enhance your well-being."
        />
        <meta
          name="keywords"
          content="Spiritual, Yoga, Meditation, Workshops, Dharshan, Events"
        />
        <meta
          name="author"
          content="Sri La Sri Mahalakshmi Narasimha Swamigal , Sree La Sree Mahalakshmi Narashima Swamigal , Sri La Sri Mahalaxmi Narasimha Swamigal , Shree La Shree Mahalakshmi Narasimha Swamigal , Sree La Sree Mahalaxmi Narashimha Swamigal , Sri La Sri Mahalakshmi Narashimha Swamigal , Shree La Shree Mahalakshmi Narashima Swamigal , Sree La Sree Mahalaxmi Narasimhar Swamigal"
        />

        {/* Open Graph / Facebook */}
        <meta
          property="og:title"
          content="Spiritual Growth & Meditation Practices | Jai kosha Foundation"
        />
        <meta
          property="og:description"
          content="Explore the journey of spiritual growth, meditation practices, and yoga workshops to enhance your well-being."
        />
        <meta property="og:image" content="https://jaikosha.com/og-image.jpg" />
        <meta property="og:url" content="https://jaikosha.com/" />
        <meta
          property="og:type"
          content="Jai kosha Foundation  | Sree La Sree Mahalakshmi Narashima Swamigal"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Spiritual Growth & Meditation Practices | Jai kosha Foundation"
        />
        <meta
          name="twitter:description"
          content="Explore the journey of spiritual growth, meditation practices, and yoga workshops to enhance your well-being."
        />
        <meta
          name="twitter:image"
          content="https://jaikosha.com/twitter-image.jpg"
        />

        {/* Schema Markup for Search Engines */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Jai Kosha Foundation | Sree La Sree Mahalakshmi Narashima Swamigal",
            url: "https://jaikosha.com/",
            logo: "https://jaikosha.com/logo.png",
            sameAs: [
              "https://www.facebook.com/profile.php?id=61571363445440/Jai kosha Foundation",
              "https://www.instagram.com/jaikosha_foundation/?hl=en/Jai kosha Foundation",
              "https://x.com/JaiKoshaFdn/Jai kosha Foundation",
            ],
          })}
        </script>
      </Helmet>
      <Suspense fallback={<Loader />}>
        <RouterProvider router={router} />
      </Suspense>
    </HelmetProvider>
  );
};

export default App;
