import { lazy } from "react";

export const Register = lazy(() => import("./Register"));
export const Login = lazy(() => import("./Login"));

export const Home = lazy(() => import("./Home"));
export const Contact = lazy(() => import("./Contact"));
export const Loader = lazy(() => import("./Loader"));
export const NotFound = lazy(() => import("./NotFound"));

export const Profile = lazy(() => import("./Profile"));

export const Dashboard = lazy(() => import("./admin/Dashboard"));
