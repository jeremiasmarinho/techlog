import type { FC } from "react";
import { memo } from "react";
import {
  RiLinkedinFill,
  RiGithubFill,
  RiInstagramFill,
  RiFacebookFill,
  RiTwitterFill,
} from "react-icons/ri";

interface SocialLink {
  icon: React.ReactNode;
  label: string;
}

const socialData: SocialLink[] = [
  {
    icon: <RiLinkedinFill />,
    label: "LinkedIn",
  },
  {
    icon: <RiGithubFill />,
    label: "GitHub",
  },
  {
    icon: <RiInstagramFill />,
    label: "Instagram",
  },
  {
    icon: <RiFacebookFill />,
    label: "Facebook",
  },
  {
    icon: <RiTwitterFill />,
    label: "Twitter",
  },
];

const Socials: FC = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      {socialData.map((social, index) => (
        <div
          key={index}
          className="hover:text-accent transition-all duration-300 cursor-pointer"
          aria-label={social.label}
        >
          {social.icon}
        </div>
      ))}
    </div>
  );
};

export default memo(Socials);
