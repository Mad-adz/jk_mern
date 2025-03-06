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
    <div className="h-[calc(100vh-6rem)] bg-slate-500 mt-[6rem] relative">
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
    </div>
  );
};

export default HeroSection;