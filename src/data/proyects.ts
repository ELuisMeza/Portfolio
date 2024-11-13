export type Type_Proyect = {
  title: string;
  description: string;
  technologies: string[];
  demoURL: string;
  repoURL: string;
  image: string
};

export const all_proyects: Type_Proyect[] = [
  {
    title: "Positivus",
    description:
      "Maquetado de una página web para una agencia de marketing digital dedicada a potenciar el crecimiento y éxito de empresas en el entorno digital. En este proyecto lo realize con Astro, al ser un sitio web sin mucha interactividad, ademas practique el uso de la libreria Framer-Motion, la cual me ayudo a realizar las animaciones y componentes de una manera mas facil y legible.",
    technologies: ["Astro", "Tailwind CSS", "Typescript", "Framer-Motion"],
    demoURL: "https://www.dutch.com",
    repoURL: "dfs",
    image: 'Positivus'
  },
  {
    title: "PULSE",
    description:
      "Red social basica donde puedes conectar con mas personas y conversar sobre diversos temas, podrás crear posts y comentar los posts de los demás. Este proyecto lo realize con Next.js, al tener mucha interactivad. Ademas para la base de datos use SQLite al ser un proyecto pequeño, y para el Backend use FastAPI, con una estructura API RESTfull",
    technologies: ["Next.js", "Tailwind CSS", "Typescript", "Python", "FastAPI"],
    demoURL: "https://www.absoluteweb.com",
    repoURL: "dfs",
    image: 'Pulse'
  },
  {
    title: "SHOP.CO",
    description:
      "Maquetado de un e-commerce dedicado a la venta de prendas de ropa, Creado con Next.js, por la interactividad que tiene con el usuario, junto con Typescrip para no tener tantos problemas con los tipos de los datos, Ademas con el uso del localStorage para tener el carrito de compras permanente",
    technologies: ["Next.js", "Tailwind CSS", "Typescript", "Framer-Motion"],
    demoURL: "https://www.miinto.com",
    repoURL: "dfs",
    image: 'SHOP-CO'
  },
  {
    title: "Sitio web del clima",
    description:
      "Este sitio web esta desarrollado para que puedas saber la temperatura actual del lugar en el que te encuentras, ademas cuenta con 4 espacios vacios adicionales donde puedes tener el clima de la ciudad que quieras",
    technologies: ["Next.js", "Tailwind CSS", "Typescript"],
    demoURL: "https://www.efigence.com",
    repoURL: "dfs",
    image: 'clima'
  },
  {
    title: "Tienda virtual de zapatillas",
    description:
      "Desafio dificil recopilado del sitio web Frontend Mentor, que simula la seccion de un e-commerce de una tienda de zapatillas en linea",
    technologies: ["Next.js", "Tailwind CSS", "Typescript"],
    demoURL: "https://www.efigence.com",
    repoURL: "dfs",
    image: 'sneakerShop'
  },
];
