import type { FC } from "react";
import { memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import { RxArrowTopRight } from "react-icons/rx";

import { services } from "@/data/services";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const ServiceSlider: FC = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="h-[210px] sm:h-[270px]"
    >
      {services.map((item, index) => (
        <SwiperSlide key={index} className="h-full">
          <div className="glass-card gradient-border h-full min-h-[180px] sm:min-h-[220px] rounded-3xl px-5 py-4 flex flex-col justify-between">
            <div className="text-3xl sm:text-4xl text-accent mb-2 sm:mb-3 transition-transform group-hover:scale-110 group-hover:rotate-12 duration-300">
              {item.icon}
            </div>

            <div className="mb-3">
              <div className="mb-1 sm:mb-2 text-sm sm:text-base xl:text-lg font-semibold">
                {item.title}
              </div>
              <p className="max-w-[350px] leading-normal text-white/70 text-xs sm:text-sm">
                {item.description}
              </p>
            </div>
            <div className="text-3xl ml-auto mt-auto">
              <RxArrowTopRight />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default memo(ServiceSlider);
