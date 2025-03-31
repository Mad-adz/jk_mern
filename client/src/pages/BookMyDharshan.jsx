import { dharshanBanner } from "@/assets/images";
import { PanoramicBanner } from "@/components";
import { BookMyDharshanSection } from "@/sections";
import { Helmet } from "react-helmet-async";
const BookMyDharshan = () => {
  return (
    <main>
      {/* SEO Optimization */}
      <Helmet>
        <title>
          Book My Dharshan | Spiritual Temple Visit & Divine Blessings | Jai
          Kosha Foundation
        </title>
        <meta
          name="description"
          content="Book your Dharshan today for a peaceful and divine experience. Reserve your spot for a spiritual temple visit, receive blessings, and connect with divine energy."
        />
        <meta
          name="keywords"
          content="Book Dharshan, temple visit, spiritual experience, online dharshan booking, divine blessings, sacred pilgrimage"
        />
        <meta name="author" content="Madads" />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Book My Dharshan | Spiritual Temple Visit & Divine Blessings"
        />
        <meta
          property="og:description"
          content="Reserve your Dharshan spot for a peaceful and divine temple experience. Book now to receive spiritual blessings."
        />
        <meta property="og:image" content={dharshanBanner} />
        <meta
          property="og:url"
          content="https://yourwebsite.com/book-dharshan"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Book My Dharshan | Spiritual Temple Visit"
        />
        <meta
          name="twitter:description"
          content="Book your Dharshan online for a divine temple experience and spiritual awakening."
        />
      </Helmet>
      <PanoramicBanner bgImg={dharshanBanner} title={"Book My Dharshan"} />
      <BookMyDharshanSection />
    </main>
  );
};

export default BookMyDharshan;
