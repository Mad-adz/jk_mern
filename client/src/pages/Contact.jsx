import { contactBanner } from "@/assets/images";
import { PanoramicBanner } from "@/components";
import { ContactFormSection } from "@/sections";

const Contact = () => {
  return (
    <main>
      <PanoramicBanner bgImg={contactBanner} title={"Contact Us"} />
      <ContactFormSection />
    </main>
  );
};

export default Contact;
