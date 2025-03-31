import { yendhrakovilBanner } from "@/assets/images";
import { PanoramicBanner } from "@/components";
import { Helmet } from "react-helmet-async";

const YendhiraKovil = () => {
  return (
    <main>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Yendhra Thirukkovil | Jai Kosha Foundation</title>
        <meta
          name="description"
          content="Discover the spiritual significance of Yendhra Thirukkovil, a divine place of worship and meditation under the guidance of Sree La Sree Mahalakshmi Narasimha Swamigal."
        />
        <meta
          name="keywords"
          content="Yendhra Kovil, Spiritual Temple, Jai Kosha Foundation, Meditation, Divine Worship, Spiritual Growth"
        />
        <meta name="author" content="Jai Kosha Foundation" />

        {/* Open Graph (Facebook) Meta Tags */}
        <meta
          property="og:title"
          content="Yendhra Thirukkovil - Jai Kosha Foundation"
        />
        <meta
          property="og:description"
          content="Experience the spiritual energy of Yendhra Thirukkovil, a sacred space for meditation and divine connection."
        />
        <meta
          property="og:image"
          content="https://jaikosha.com/yendhra-kovil.jpg"
        />
        <meta property="og:url" content="https://jaikosha.com/yendhra-kovil" />
        <meta property="og:type" content="website" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Yendhra Thirukkovil | Jai Kosha Foundation"
        />
        <meta
          name="twitter:description"
          content="Experience the spiritual energy of Yendhra Thirukkovil, a sacred space for meditation and divine connection."
        />
        <meta
          name="twitter:image"
          content="https://jaikosha.com/yendhra-kovil.jpg"
        />

        {/* Canonical URL */}
        <link rel="canonical" href="https://jaikosha.com/yendhra-kovil" />
      </Helmet>
      <PanoramicBanner
        bgImg={yendhrakovilBanner}
        title={"Yendhra Thirukkovil"}
      />
    </main>
  );
};

export default YendhiraKovil;
