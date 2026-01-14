import type { FC } from "react";
import { memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";

import { workSlider } from "@/data/works";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const WorkSlider: FC = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlider.slides.map((slide, slideIndex) => (
        <SwiperSlide key={slideIndex}>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
            {slide.images.map((image, imageIndex) => (
              <div
                key={imageIndex}
                className="glass-card shadow-premium gradient-border relative rounded-xl overflow-hidden flex items-center justify-center group hover:-translate-y-2 transition-all duration-300"
              >
                <div className="flex items-center justify-center relative overflow-hidden group w-full h-full">
                  <Image
                    src={image.path}
                    width={500}
                    height={300}
                    alt={image.title}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700" />
                  <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-5 group-hover:xl:-translate-y-20 transition-all duration-300 z-10">
                    <div className="flex flex-col xl:flex-row items-center gap-x-2 text-xs xl:text-[13px] tracking-[0.2em] font-semibold drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                      <div className="delay-100">PROJETOS</div>
                      <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                        REALIZADOS
                      </div>
                      <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200 drop-shadow-[0_0_10px_rgba(241,48,36,0.8)]">
                        <BsArrowRight />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default memo(WorkSlider);
