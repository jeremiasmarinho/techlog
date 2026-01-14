import type { FC } from "react";
import { memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";
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
      className="h-[240px] sm:h-[340px]"
    >
      {services.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="glass-card gradient-border h-max rounded-2xl px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:shadow-premium transition-all duration-500 hover:-translate-y-2 glow-on-hover">
            <div className="text-4xl text-accent mb-4 transition-transform group-hover:scale-110 group-hover:rotate-12 duration-300">
              {item.icon}
            </div>

            <div className="mb-8">
              <div className="mb-2 text-base xl:text-lg font-semibold">
                {item.title}
              </div>
              <p className="max-w-[350px] leading-normal text-white/70">
                {item.description}
              </p>
            </div>
            <div className="text-3xl ml-auto">
              <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-500" />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default memo(ServiceSlider);
