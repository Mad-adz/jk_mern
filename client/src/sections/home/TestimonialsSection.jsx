import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { testimonials } from "@/constants";

const TestimonialsSection = () => {
  return (
    <section className="py-12 bg-yellow-50/50">
      <div className="container">
        <h3 className="text-3xl font-bold mb-10">
          Connect with Like-Minded Souls
        </h3>
        <div className="relative shadow-md rounded-md">
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
            }}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper h-full"
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.id} className="h-full">
                <div className="bg-white rounded-md">
                  <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
                    <figure className="max-w-screen-md mx-auto">
                      <svg
                        className="h-12 mx-auto mb-3 text-gray-400"
                        viewBox="0 0 24 27"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                          fill="currentColor"
                        />
                      </svg>
                      <blockquote>
                        <p className="text-2xl font-medium text-gray-900">
                          {item.description}
                        </p>
                      </blockquote>
                      <figcaption className="flex items-center justify-center mt-6 space-x-3">
                        <img
                          className="w-10 h-10 rounded-full"
                          src={item.image}
                          alt={item.name}
                          loading="lazy"
                        />
                        <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                          <div className="pr-3 font-medium text-gray-900 dark:text-white">
                            {item.name}
                          </div>
                          <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
                            {item.place}
                          </div>
                        </div>
                      </figcaption>
                    </figure>
                  </div>
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
      </div>
    </section>
  );
};

export default TestimonialsSection;
