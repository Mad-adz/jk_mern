import { lazy } from "react";

// # home page sections
export const HeroSection = lazy(() => import("./home/HeroSection"));
export const QuotesSection = lazy(() => import("./home/QuotesSection"));
export const ResourcesSection = lazy(() => import("./home/ResourcesSection"));
export const EventsSection = lazy(() => import("./home/EventsSection"));
export const TestimonialsSection = lazy(() =>
  import("./home/TestimonialsSection")
);
export const NewsLetterSection = lazy(() => import("./home/NewsLetterSection"));

export const Introduction = lazy(() => import("./about/Introduction"));
export const UpcomingEventsSection = lazy(() =>
  import("./events/UpcomingEventsSection")
);

export const ContactFormSection = lazy(() =>
  import("./contact/ContactFormSection")
);
export const BookMyDharshanSection = lazy(() =>
  import("./dharshan/BookMyDharshanSection")
);
