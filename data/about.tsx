import type { ReactNode } from "react";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";

export interface AboutInfoItem {
  title: string;
  stage?: string;
  icons?: ReactNode[];
}

export interface AboutSection {
  title: string;
  info: AboutInfoItem[];
}

export const aboutData: AboutSection[] = [
  {
    title: "Habilidades",
    info: [
      {
        title: "Desenvolvimento web",
        icons: [
          <FaHtml5 key="html" />,
          <FaCss3 key="css" />,
          <FaJs key="js" />,
          <FaReact key="react" />,
          <SiNextdotjs key="next" />,
          <SiFramer key="framer" />,
          <FaWordpress key="wordpress" />,
        ],
      },
      {
        title: "UI/UX Design",
        icons: [
          <FaFigma key="figma" />,
          <SiAdobexd key="xd" />,
          <SiAdobephotoshop key="photoshop" />,
        ],
      },
    ],
  },
  {
    title: "Experiência",
    info: [
      {
        title: "KonsTec",
        stage: "2021 - 2022",
      },
      {
        title: "Ergon Sistemas",
        stage: "2023",
      },
      {
        title: "Forest Carbon",
        stage: "2023 - 2024",
      },
    ],
  },
  {
    title: "Formações",
    info: [
      {
        title: "Análise de Sistemas - Uninassau - PE",
        stage: "2022",
      },
      {
        title: "Formação em desenvolvimento de web - Alura",
        stage: "2021",
      },
      {
        title: "Formação em Javascript - JavaScript Expert",
        stage: "2022",
      },
    ],
  },
];
