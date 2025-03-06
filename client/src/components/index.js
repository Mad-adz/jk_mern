import { lazy } from "react";

export const Header = lazy(() => import("./Header"));
export const Footer = lazy(() => import("./Footer"));
export const PanoramicBanner = lazy(() => import("./PanoramicBanner"));

export const ResourceCard = lazy(() => import("./home/ResourceCard"));
export const AddressCard = lazy(() => import("./contact/AddressCard"));
export const UpcomingEventCard = lazy(() => import("./events/UpcomingEventCard"));

export const ScrollToTop = lazy(() => import("./ScrollToTop"));

export const Modal = lazy(() => import("./Modal"));

export const BookMyDharshanForm = lazy(() =>
  import("./dharshan/BookMyDharshanForm")
);
