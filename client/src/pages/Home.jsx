import {
  EventsSection,
  HeroSection,
  NewsLetterSection,
  QuotesSection,
  ResourcesSection,
  TestimonialsSection,
} from "@/sections";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <QuotesSection />
      <ResourcesSection />
      <EventsSection />
      <TestimonialsSection />
      <NewsLetterSection />
    </div>
  );
};

export default Home;
