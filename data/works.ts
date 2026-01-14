export interface WorkImage {
  title: string;
  path: string;
}

export interface WorkSlide {
  images: WorkImage[];
}

export interface WorkSliderData {
  slides: WorkSlide[];
}

export const workSlider: WorkSliderData = {
  slides: [
    {
      images: [
        {
          title: "Projeto 1",
          path: "/thumb1.jpg",
        },
        {
          title: "Projeto 2",
          path: "/thumb2.jpg",
        },
        {
          title: "Projeto 3",
          path: "/thumb3.jpg",
        },
        {
          title: "Projeto 4",
          path: "/thumb4.jpg",
        },
      ],
    },
    {
      images: [
        {
          title: "Projeto 5",
          path: "/thumb4.jpg",
        },
        {
          title: "Projeto 6",
          path: "/thumb1.jpg",
        },
        {
          title: "Projeto 7",
          path: "/thumb2.jpg",
        },
        {
          title: "Projeto 8",
          path: "/thumb3.jpg",
        },
      ],
    },
  ],
};
