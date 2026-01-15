import type { FC } from "react";
import { memo } from "react";
import {
  RiLinkedinFill,
  RiGithubFill,
  RiInstagramFill,
  RiFacebookFill,
} from "react-icons/ri";

interface SocialLink {
  icon: React.ReactNode;
  label: string;
  href: string;
}

const socialData: SocialLink[] = [
  {
    icon: <RiLinkedinFill />,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/jeremias-marinho/",
  },
  {
    icon: <RiGithubFill />,
    label: "GitHub",
    href: "https://github.com/jeremiasmarinho",
  },
  {
    icon: <RiInstagramFill />,
    label: "Instagram",
    href: "https://www.instagram.com/techlogsistemas/",
  },
  {
    icon: <RiFacebookFill />,
    label: "Facebook",
    href: "https://www.facebook.com/techlogsistemas/",
  },
];

const Socials: FC = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      {socialData.map((social, index) => (
        <a
          key={index}
          className="hover:text-accent transition-all duration-300 cursor-pointer"
          aria-label={social.label}
          href={social.href}
          target="_blank"
          rel="noreferrer"
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
};

export default memo(Socials);
