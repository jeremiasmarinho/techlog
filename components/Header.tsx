import type { FC } from "react";
import { memo } from "react";
import Image from "next/image";
import Link from "next/link";

import Socials from "./Socials";

const Header: FC = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-4 py-6">
          <Link
            href="/"
            className="transition-transform hover:scale-105 duration-300"
          >
            <Image
              src="/logo.svg"
              width={220}
              height={48}
              alt="TechLog Sistemas Logo"
              priority
              className="drop-shadow-[0_0_15px_rgba(241,48,36,0.3)]"
            />
          </Link>
          <div className="glass-card rounded-full px-6 py-3 shadow-premium">
            <Socials />
          </div>
        </div>
      </div>
    </header>
  );
};

export default memo(Header);
