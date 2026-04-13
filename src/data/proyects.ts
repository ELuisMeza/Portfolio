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
    demoURL: "https://learning-front-cyan.vercel.app/",
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
  vansi: {
    technologies: ["FastAPI", "Ollama", "MongoDB", "chromaDB", "React", "Anime.js"],
    demoURL: "https://github.com/ELuisMeza/vansi_full.git",
    repoURL: "https://github.com/ELuisMeza/vansi_full.git",
    image: "vansi",
  }
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
      title: "Vansi",
      description:
        "Plataforma web para aprender y practicar inglés mediante un agente conversacional con soporte de texto y voz. Los usuarios pueden mantener sesiones de chat guardadas en base de datos, con un tutor que adapta el lenguaje al nivel CEFR del alumno. Incorpora RAG: embeddings de la consulta, búsqueda vectorial en Chroma sobre material de referencia CEFR y inyección de contexto en las instrucciones del modelo para fundamentar reglas y ejemplos sin mezclar niveles. La voz cubre transcripción (Whisper / faster-whisper) y síntesis (Edge TTS). Arquitectura API REST con FastAPI, persistencia en MongoDB y autenticación JWT, orientada a separar cliente (React + Vite) y servicios de IA ejecutados vía Ollama (LLM y modelo de embeddings).",
         ...shared.vansi,
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
      title: "Vansi",
      description:
        "A web platform for learning and practicing English using a conversational agent with text and voice support. Users can maintain chat sessions saved in a database, with a tutor who adapts the language to the student's CEFR level. It incorporates RAG: query embeddings, vector search in Chroma on CEFR reference material, and context injection into model instructions to substantiate rules and examples without mixing levels. Voice support includes transcription (Whisper/Faster-Whisper) and synthesis (Edge TTS). The REST API architecture uses FastAPI, MongoDB persistence, and JWT authentication, and is designed to separate the client (React + Vite) from AI services executed via Ollama (LLM and embedding model).",
        ...shared.vansi,
    },
  ],
};

export function getProjects(locale: Locale): Type_Proyect[] {
  return byLocale[locale];
}
