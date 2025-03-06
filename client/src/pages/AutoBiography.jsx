import { aboutBanner } from "@/assets/images";
import { PanoramicBanner } from "@/components";
import { Introduction } from "@/sections";

const AutoBiography = () => {
  return (
    <main>
      <PanoramicBanner bgImg={aboutBanner} title={"Autobiography"} />
      <Introduction />
    </main>
  );
};

export default AutoBiography;
