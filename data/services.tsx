import type { ReactNode } from "react";
import { RxCrop, RxDesktop, RxPencil2, RxReader } from "react-icons/rx";

export interface Service {
  icon: ReactNode;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    icon: <RxCrop />,
    title: "Sites institucionais",
    description:
      "Posicionam a sua marca com clareza, destacando valores e diferenciais e guiando o visitante até o contato.",
  },
  {
    icon: <RxPencil2 />,
    title: "Sites responsivos",
    description:
      "Garantem uma experiência perfeita em qualquer dispositivo, aumentando o tempo de navegação e a chance de conversão.",
  },
  {
    icon: <RxDesktop />,
    title: "Sites e-commerce",
    description:
      "Loja online pronta para vender, com jornada de compra intuitiva, segura e pensada para maximizar suas vendas.",
  },
  {
    icon: <RxReader />,
    title: "Personalizados",
    description:
      "Projetos sob medida para campanhas, landing pages e necessidades específicas da sua marca.",
  },
];
