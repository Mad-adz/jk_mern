import { dharshanBanner } from "@/assets/images";
import { PanoramicBanner } from "@/components";
import { BookMyDharshanSection } from "@/sections";

const BookMyDharshan = () => {
  return (
    <main>
      <PanoramicBanner bgImg={dharshanBanner} title={"Book My Dharshan"} />
      <BookMyDharshanSection />
    </main>
  );
};

export default BookMyDharshan;
