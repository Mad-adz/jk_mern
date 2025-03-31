import { contactBanner } from "@/assets/images";
import { PanoramicBanner } from "@/components";
import { ContactFormSection } from "@/sections";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  return (
    <main>
      {/* SEO Optimization */}
      <Helmet>
        <title>Contact Us | Get in Touch | Jai Kosha Foundation</title>
        <meta
          name="description"
          content="Have questions or need assistance? Contact us today. Fill out our contact form or reach us via phone or email."
        />
        <meta
          name="keywords"
          content="Contact Us, customer support, help center, get in touch, business inquiry, contact form"
        />
        <meta name="author" content="Jai Kosha Foundation" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Contact Us | Get in Touch" />
        <meta
          property="og:description"
          content="Have questions or need assistance? Contact us today. Fill out our contact form or reach us via phone or email."
        />
        <meta property="og:image" content={contactBanner} />
        <meta property="og:url" content="https://jaikosha.com/contact" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Us | Get in Touch" />
        <meta
          name="twitter:description"
          content="Need assistance? Contact our team today."
        />
      </Helmet>
      <PanoramicBanner bgImg={contactBanner} title={"Contact Us"} />
      <ContactFormSection />
    </main>
  );
};

export default Contact;
