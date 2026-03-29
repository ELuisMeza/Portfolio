import type { Locale } from "../i18n/types";

export type Type_Experience = {
  title: string;
  companyName: string;
  time: string;
  description: string;
  activities: string[];
  image: string;
};

const byLocale: Record<Locale, Type_Experience[]> = {
  es: [
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
        "Desarrollo de servicios backend con **NestJS y PostgreSQL**.",
      ],
      image: "Maxillaris.jpeg",
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
      image: "alticsa.png ",
    },
  ],
  en: [
    {
      title: "Web Developer",
      companyName: "Centro Odontológico Especializado Maxillaris",
      time: "01/25/2025 - 12/20/2025",
      description:
        "I developed new processes and provided support for the company's ERP.",
      activities: [
        "Implemented **WebSockets with Socket.IO** for real-time communication.",
        "Built new projects with **Next.js and React** under a microfrontends architecture.",
        "Support and maintenance of the system in **Angular**.",
        "Backend service development with **NestJS and PostgreSQL**.",
      ],
      image: "Maxillaris.jpeg",
    },
    {
      title: "Junior / Semi-Senior Software Developer",
      companyName: "Alticsa",
      time: "12/29/2025 - Present",
      description:
        "I provided technical support and implemented new requirements for systems developed by the company.",
      activities: [
        "Support for a website built with **WordPress**.",
        "New frontend and backend features on an ERP built with **React** and **NestJS**.",
        "New frontend and backend features on an ERP built with **Next.js** and **FastAPI**.",
      ],
      image: "alticsa.png ",
    },
  ],
};

export function getExperiences(locale: Locale): Type_Experience[] {
  return byLocale[locale];
}
