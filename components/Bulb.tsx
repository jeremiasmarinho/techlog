import type { FC } from "react";
import { memo } from "react";
import Image from "next/image";

const Bulb: FC = () => {
  return (
    <div className="absolute -left-36 -bottom-12 rotate-12 mix-blend-color-dodge animate-pulse duration-75 z-10 w-[200px] xl:w-[260px] opacity-60 drop-shadow-[0_0_50px_rgba(232,56,204,0.4)]">
      <Image
        src="/bulb.png"
        width={260}
        height={200}
        className="w-full h-full"
        alt="Bulb decoration"
      />
    </div>
  );
};

export default memo(Bulb);
