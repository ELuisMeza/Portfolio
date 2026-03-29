import type { Locale } from "../i18n/types";

export type Type_Proyect = {
  title: string;
  description: string;
  technologies: string[];
  demoURL: string;
  repoURL: string;
  image: string;
  imagesDetail?: string[];
};

const shared = {
  shopCo: {
    technologies: [
      "React",
      "Tailwind CSS",
      "Typescript",
      "Nest.js",
      "PostgreSQL",
      "PayPal API",
      "Cloudinary",
      "Vercel",
    ],
    demoURL: "https://shop-co-frontend-three.vercel.app/",
    repoURL: "https://github.com/ELuisMeza/shop-co-full.git",
    image: "shop-co/1",
    imagesDetail: [
      "shop-co/1",
      "shop-co/2",
      "shop-co/3",
      "shop-co/4",
      "shop-co/5",
      "shop-co/6",
      "shop-co/7",
      "shop-co/8",
      "shop-co/9",
    ],
  },
  pulse: {
    technologies: [
      "Angular",
      "Tailwind CSS",
      "Nest.js",
      "PostgreSQL",
      "Socket.io",
    ],
    demoURL: "https://pulse-front-seven.vercel.app/",
    repoURL: "https://github.com/ELuisMeza/Pulse_Full.git",
    image: "pulse/1",
    imagesDetail: [
      "pulse/1",
      "pulse/2",
      "pulse/3",
      "pulse/4",
      "pulse/5",
    ],
  },
  learning: {
    technologies: [
      "React",
      "Tailwind CSS",
      "Typescript",
      "Nest.js",
      "PostgreSQL",
      "Material UI",
    ],
    demoURL: "",
    repoURL: "https://github.com/ELuisMeza/Learning_Full.git",
    image: "learning/1",
    imagesDetail: [
      "learning/1",
      "learning/2",
      "learning/3",
      "learning/4",
      "learning/5",
      "learning/6",
      "learning/7",
      "learning/8",
      "learning/9",
      "learning/10",
      "learning/11",
      "learning/12",
      "learning/13",
      "learning/14",
    ],
  },
  positivus: {
    technologies: ["Astro", "Tailwind CSS", "Typescript", "Framer-Motion"],
    demoURL: "https://positivus-web1.netlify.app/",
    repoURL: "https://github.com/luismeza1101/Positivus.git",
    image: "Positivus",
  },
};

const byLocale: Record<Locale, Type_Proyect[]> = {
  es: [
    {
      title: "SHOP.CO",
      description:
        "Plataforma web de e-commerce que permite a los usuarios registrarse, comprar y vender productos en un entorno colaborativo. Incluye gestión de productos, carritos de compra visibles entre usuarios y procesamiento de pagos integrado mediante la API de PayPal. Arquitectura orientada a transacciones seguras y escalabilidad. n/ n/ **(DESPLEGADO EN VERCEL, USANDO CLOUDINARY PARA EL ALMACENAMIENTO DE IMAGENES Y CONFIGURADO INICIALMENTE LA API DE PAYPAL)**",
      ...shared.shopCo,
    },
    {
      title: "Pulse",
      description:
        "Plataforma de mensajería en tiempo real inspirada en Discord, que permite a los usuarios unirse a canales, crear canales públicos y privados, y comunicarse de forma simultánea mediante chat en tiempo real. Construida con WebSockets para baja latencia y eventos en vivo, utilizando Angular en el frontend y una arquitectura backend escalable orientada a colaboración.",
      ...shared.pulse,
    },
    {
      title: "System Learning",
      description:
        "Sistema de gestión estudiantil que centraliza la administración de estudiantes, cursos, profesores y calificaciones. Implementa un modelo de roles (administrador, profesor y estudiante) con permisos diferenciados, autenticación con Google y un sistema de notificaciones por correo electrónico. Diseñado para optimizar procesos académicos y control institucional.",
      ...shared.learning,
    },
    {
      title: "Positivus",
      description:
        "Maquetado de un sitio web corporativo para una agencia de marketing digital, enfocado en performance, diseño limpio y experiencia visual. Desarrollado con Astro para maximizar velocidad de carga en un sitio de baja interactividad, incorporando animaciones y transiciones mediante Framer Motion para mejorar la narrativa visual.",
      ...shared.positivus,
    },
  ],
  en: [
    {
      title: "SHOP.CO",
      description:
        "E-commerce web platform where users can register, buy, and sell products in a collaborative environment. Includes product management, shared shopping carts across users, and integrated payment processing via the PayPal API. Architecture focused on secure transactions and scalability. n/ n/ **(DEPLOYED ON VERCEL, USING CLOUDINARY FOR IMAGE STORAGE AND INITIAL PAYPAL API SETUP)**",
      ...shared.shopCo,
    },
    {
      title: "Pulse",
      description:
        "Real-time messaging platform inspired by Discord: users can join channels, create public and private channels, and chat simultaneously. Built with WebSockets for low latency and live events, Angular on the frontend, and a scalable backend architecture focused on collaboration.",
      ...shared.pulse,
    },
    {
      title: "System Learning",
      description:
        "Student management system that centralizes students, courses, teachers, and grades. Role-based access (admin, teacher, student) with differentiated permissions, Google authentication, and email notifications—designed to streamline academic workflows and institutional oversight.",
      ...shared.learning,
    },
    {
      title: "Positivus",
      description:
        "Corporate marketing agency website layout focused on performance, clean design, and visual polish. Built with Astro for fast loads on a low-interactivity site, with Framer Motion for animations and transitions that support the visual story.",
      ...shared.positivus,
    },
  ],
};

export function getProjects(locale: Locale): Type_Proyect[] {
  return byLocale[locale];
}
