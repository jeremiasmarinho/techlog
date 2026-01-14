import type { FC } from "react";
import { memo } from "react";
import Image from "next/image";

const Circles: FC = () => {
  return (
    <div className="w-[200px] xl:w-[300px] absolute -right-16 -bottom-2 mix-blend-color-dodge animate-pulse duration-75 z-10 opacity-60 drop-shadow-[0_0_50px_rgba(241,48,36,0.3)]">
      <Image
        src="/circles.png"
        width={260}
        height={200}
        className="w-full h-full"
        alt="Circles decoration"
      />
    </div>
  );
};

export default memo(Circles);
