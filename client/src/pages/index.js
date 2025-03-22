import { lazy } from "react";

export const Register = lazy(() => import("./Register"));
export const Login = lazy(() => import("./Login"));
export const EmailVerification = lazy(() => import("./EmailVerification"));

export const Home = lazy(() => import("./Home"));
export const Contact = lazy(() => import("./Contact"));
export const Loader = lazy(() => import("./Loader"));
export const NotFound = lazy(() => import("./NotFound"));

export const Profile = lazy(() => import("./Profile"));

export const Activities = lazy(() => import("./Activities"));
export const AutoBiography = lazy(() => import("./AutoBiography"));
export const BookMyDharshan = lazy(() => import("./BookMyDharshan"));
export const Donate = lazy(() => import("./Donate"));
export const Events = lazy(() => import("./Events"));
export const EventDetails = lazy(() => import("./EventDetails"));
export const Workshops = lazy(() => import("./Workshops"));
export const YendhiraKovil = lazy(() => import("./YendhiraKovil"));

export const Dashboard = lazy(() => import("./admin/Dashboard"));
