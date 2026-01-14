import type { FC, ReactNode } from "react";
import { memo } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from "react-icons/hi2";

interface NavLink {
  name: string;
  path: string;
  icon: ReactNode;
}

const navData: NavLink[] = [
  { name: "home", path: "/", icon: <HiHome /> },
  { name: "sobre", path: "/about", icon: <HiUser /> },
  { name: "servicos", path: "/services", icon: <HiRectangleGroup /> },
  // { name: "trabalhos", path: "/work", icon: <HiViewColumns /> },
  // {
  //   name: "depoimentos",
  //   path: "/testimonials",
  //   icon: <HiChatBubbleBottomCenterText />,
  // },
  {
    name: "contatos",
    path: "/contact",
    icon: <HiEnvelope />,
  },
];

const Nav: FC = () => {
  const router = useRouter();
  const pathname = router.pathname;

  return (
    <nav className="flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen">
      <div className="flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] xl:h-max py-8 glass-card text-3xl xl:text-xl xl:rounded-full shadow-premium">
        {navData.map((link) => (
          <Link
            key={link.path}
            href={link.path}
            className={`${
              link.path === pathname ? "text-accent scale-110" : ""
            } relative flex items-center group hover:text-accent transition-all duration-300 hover:scale-110`}
            aria-label={link.name}
          >
            <div className="absolute pr-14 right-0 hidden xl:group-hover:flex">
              <div className="glass-card relative flex text-primary items-center p-[6px] rounded-[8px] shadow-premium">
                <div className="text-[12px] leading-none font-semibold capitalize text-white">
                  {link.name}
                </div>
              </div>
            </div>
            <div className="relative">
              {link.icon}
              {link.path === pathname && (
                <div className="absolute inset-0 blur-xl bg-accent/50 -z-10" />
              )}
            </div>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default memo(Nav);
