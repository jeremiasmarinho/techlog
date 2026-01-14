import type { FC } from "react";
import { memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { FaQuoteLeft } from "react-icons/fa";
import Image from "next/image";

import { testimonials } from "@/data/testimonials";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const TestimonialSlider: FC = () => {
  return (
    <Swiper
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className="h-[400px]"
    >
      {testimonials.map((person, index) => (
        <SwiperSlide key={index}>
          <div className="flex flex-col items-center md:flex-row gap-x-8 h-full px-16">
            <div className="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0">
              <div className="glass-card shadow-premium p-6 rounded-2xl flex flex-col justify-center text-center hover:scale-105 transition-all duration-300">
                <div className="mb-4 mx-auto relative">
                  <div className="absolute inset-0 bg-accent/30 rounded-full blur-xl" />
                  <Image
                    src={person.image}
                    width={100}
                    height={100}
                    alt={person.name}
                    className="rounded-full border-2 border-white/20 relative z-10"
                  />
                </div>
                <div className="text-lg font-semibold">{person.name}</div>
                <div className="text-[12px] uppercase font-extralight tracking-widest text-white/70">
                  {person.position}
                </div>
              </div>
            </div>
            <div className="glass-card shadow-premium p-6 xl:p-8 rounded-2xl flex-1 flex flex-col justify-center relative">
              <div className="mb-4">
                <FaQuoteLeft className="text-4xl xl:text-6xl text-accent/30 mx-auto md:mx-0 drop-shadow-[0_0_10px_rgba(241,48,36,0.3)]" />
              </div>
              <div className="xl:text-lg text-center md:text-left text-white/80 leading-relaxed">
                {person.message}
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default memo(TestimonialSlider);
