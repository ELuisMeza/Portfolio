export type Type_Experience = {
  title: string;
  companyName: string;
  time: string;
  description: string;
  activities: string[];
  image: string;
};

export const all_experiences: Type_Experience[] = [
  {
    title: "Desarrollador Web",
    companyName: "Centro Odontológico Especializado Maxillaris",
    time: "25/01/2025 - 20/12/2025",
    description:
      "Desarrollé nuevos procesos y brindé soporte a una ERP de la empresa.",
    activities: [
    "Implementación de **WebSockets con Socket.IO** para comunicación en tiempo real.",
    "Creación de nuevos proyectos con **Next.js y React** bajo arquitectura de microfrontends.",
    "Soporte y mantenimiento del sistema en **Angular**.",
    "Desarrollo de servicios backend con **NestJS y PostgreSQL**."
    ],
    image: "Maxillaris.jpeg"
  },
  {
    title: "Desarrollador de Software Junior/Semi Senior",
    companyName: "Alticsa",
    time: "29/12/2025 - Presente",
    description:
      "Brinde soporte técnico e implemente nuevos requerimientos a los sistemas desarrollados por la empresa.",
    activities: [
    "Dar soporte a una web desarrollada en **Wordpress**.",
    "Implementacion de nuevas funcionalidades a nivel frontend y backend en una ERP desarrollada con **React** y **NestJS**.",
    "Implementacion de nuevas funcionalidades a nivel frontend y backend en una ERP desarrollada con **Next.js** y **FastAPI**.",
    ],
    image: "alticsa.png "
  },
];

