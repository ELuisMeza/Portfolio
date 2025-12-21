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
];

