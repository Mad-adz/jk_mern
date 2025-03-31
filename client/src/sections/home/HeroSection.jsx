import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import {
  bannerImg1,
  bannerImg2,
  bannerImg3,
  bannerImg4,
} from "../../assets/images";

const HeroSection = () => {
  const slides = [bannerImg1, bannerImg2, bannerImg3, bannerImg4];
  return (
    <section className="h-[calc(100vh-6rem)] bg-slate-500 mt-[6rem] relative">
      <div className="absolute left-0 right-0 top-0 bottom-0 z-20 bg-zinc-900/50"></div>
      <p className="absolute bottom-48 md:bottom-36 lg:bottom-48 left-1/2 transform -translate-x-1/2 z-30 w-full text-center font-black text-xl lg:text-2xl bg-gradient-to-br from-red-400 to-pink-600 text-transparent bg-clip-text">
        HARI OM
      </p>
      <h1 className="absolute bottom-24 md:bottom-28 lg:bottom-36 left-1/2 transform -translate-x-1/2 z-30 w-full text-center font-black text-2xl lg:text-4xl bg-gradient-to-br from-amber-400 to-orange-600 text-transparent bg-clip-text">
        SREE LA SREE MAHA LAKSHMI NARASIMHA SWAMIGAL
      </h1>{" "}
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          el: ".custom-pagination",
          // dynamicBullets: true,
        }}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper h-full"
      >
        {slides.map((image, index) => (
          <SwiperSlide key={index} className="h-full">
            <div
              className="h-full bg-cover bg-center"
              style={{
                backgroundImage: `url(${image})`,
              }}
            >
              {/* <div className="h-full bg-black/30 flex items-center justify-center text-white text-3xl font-bold">
                Slide {index + 1}
              </div> */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="custom-pagination absolute z-30 bottom-4 left-0 right-0 flex justify-center"></div>
      <div className="custom-prev absolute top-1/2 left-4 transform -translate-y-1/2 z-10 cursor-pointer">
        ❮
      </div>
      <div className="custom-next absolute top-1/2 right-4 transform -translate-y-1/2 z-10 cursor-pointer">
        ❯
      </div>
    </section>
  );
};

export default HeroSection;
