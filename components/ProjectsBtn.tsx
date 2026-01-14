import type { FC } from "react";
import { memo } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";

const ProjectsBtn: FC = () => {
  return (
    <div className="mx-auto xl:mx-0">
      <Link
        href="/services"
        className="relative w-[185px] h-[185px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group glow-on-hover"
      >
        <Image
          src="/rounded-text.png"
          width={141}
          height={148}
          alt="Services"
          className="animate-spin-slow w-full h-full max-w-[141px] max-h-[148px] transition-all group-hover:scale-110"
        />
        <HiArrowRight className="absolute text-4xl group-hover:translate-x-2 transition-all duration-300 drop-shadow-[0_0_10px_rgba(241,48,36,0.8)]" />
      </Link>
    </div>
  );
};

export default memo(ProjectsBtn);
