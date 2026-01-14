export interface Testimonial {
  image: string;
  name: string;
  position: string;
  message: string;
}

export const testimonials: Testimonial[] = [
  {
    image: "/t-avt-1.png",
    name: "Ana Silva",
    position: "Empresária no setor de serviços",
    message:
      "Depois do novo site desenvolvido pela TechLog, nossas solicitações de orçamento aumentaram de forma consistente. Hoje os clientes elogiam a clareza das informações e a facilidade para entrar em contato.",
  },
  {
    image: "/t-avt-2.png",
    name: "Marcos Oliveira",
    position: "E-commerce de moda",
    message:
      "A TechLog nos ajudou a reposicionar a marca e a estruturar um e-commerce muito mais rápido e intuitivo. Conseguimos aumentar a taxa de conversão e reduzir dúvidas no atendimento.",
  },
  {
    image: "/t-avt-3.png",
    name: "João Pereira",
    position: "Consultor financeiro",
    message:
      "Precisava de um site profissional para passar mais credibilidade nas reuniões. O resultado ficou moderno, objetivo e hoje uso o site como cartão de visita em todas as apresentações.",
  },
];
