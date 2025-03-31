import { aboutBanner } from "@/assets/images";
import { PanoramicBanner } from "@/components";
import { Introduction } from "@/sections";
import { Helmet } from "react-helmet-async";

const AutoBiography = () => {
  return (
    <main>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>
          Autobiography | Jai Kosha Foundation | Sree La Sree Mahalakshmi
          Narashima Swamigal
        </title>
        <meta
          name="description"
          content="Read the inspiring autobiography of Sree La Sree Mahalakshmi Narashima Swamigal and explore his spiritual journey."
        />
        <meta
          name="keywords"
          content="Spiritual, Autobiography, Guru, Meditation, Swamigal"
        />
        <meta
          name="author"
          content="Sri La Sri Mahalakshmi Narasimha Swamigal, Sree La Sree Mahalakshmi Narashima Swamigal, Sri La Sri Mahalaxmi Narasimha Swamigal, Shree La Shree Mahalakshmi Narasimha Swamigal, Sree La Sree Mahalaxmi Narashimha Swamigal, Sri La Sri Mahalakshmi Narashimha Swamigal, Shree La Shree Mahalakshmi Narashima Swamigal, Sree La Sree Mahalaxmi Narasimhar Swamigal"
        />

        {/* Open Graph / Facebook */}
        <meta
          property="og:title"
          content="Autobiography | Jai Kosha Foundation"
        />
        <meta
          property="og:description"
          content="Read the inspiring autobiography of Sree La Sree Mahalakshmi Narashima Swamigal and explore his spiritual journey."
        />
        <meta
          property="og:image"
          content="https://jaikosha.com/autobiography-og.jpg"
        />
        <meta property="og:url" content="https://jaikosha.com/autobiography" />
        <meta property="og:type" content="article" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Autobiography | Jai Kosha Foundation"
        />
        <meta
          name="twitter:description"
          content="Read the inspiring autobiography of Sree La Sree Mahalakshmi Narashima Swamigal and explore his spiritual journey."
        />
        <meta
          name="twitter:image"
          content="https://jaikosha.com/autobiography-twitter.jpg"
        />

        {/* Schema Markup for SEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Autobiography | Jai Kosha Foundation",
            author: {
              "@type": "Person",
              name: "Sree La Sree Mahalakshmi Narashima Swamigal",
            },
            publisher: {
              "@type": "Organization",
              name: "Jai Kosha Foundation",
              logo: {
                "@type": "ImageObject",
                url: "https://jaikosha.com/logo.png",
              },
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://jaikosha.com/autobiography",
            },
            image: "https://jaikosha.com/autobiography-og.jpg",
            datePublished: "2024-03-25",
          })}
        </script>
      </Helmet>
      <PanoramicBanner bgImg={aboutBanner} title={"Autobiography"} />
      <Introduction />
    </main>
  );
};

export default AutoBiography;
