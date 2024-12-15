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
    title: "GoodFood",
    description:
      "Web funcional donde podrás encontrar todo tipo de recetas de cocina, con ayuda de los filtros incluidos, como tipo de dieta, inclusión y exclusión de ingredientes, ademas de poder almacenar tus recetas favoritas para acceder a ellas cuando quieras. En este proyecto practique el manejo de contextos con ayuda de Zustand, ademas de usar un BaaS, SupaBase, para poder manejar a todos los usuarios y sus recetas favoritas",
    technologies: ["Next.js", "Tailwind CSS", "Typescript", "Supabase", 'Zustand', 'Framer-Motion'],
    demoURL: "https://good-food-1.vercel.app/",
    repoURL: "https://github.com/luismeza1101/GoodFood.git",
    image: 'GoodFood'
  },
  {
    title: "Positivus",
    description:
      "Maquetado de una página web para una agencia de marketing digital dedicada a potenciar el crecimiento y éxito de empresas en el entorno digital. En este proyecto lo realize con Astro, al ser un sitio web sin mucha interactividad, ademas practique el uso de la libreria Framer-Motion, la cual me ayudo a realizar las animaciones y componentes de una manera mas facil y legible.",
    technologies: ["Astro", "Tailwind CSS", "Typescript", "Framer-Motion"],
    demoURL: "https://positivus-web1.netlify.app/",
    repoURL: "https://github.com/luismeza1101/Positivus.git",
    image: 'Positivus'
  },
  {
    title: "SHOP.CO",
    description:
      "Maquetado de un e-commerce dedicado a la venta de prendas de ropa, Creado con Next.js, por la interactividad que tiene con el usuario, junto con Typescrip para no tener tantos problemas con los tipos de los datos, Ademas con el uso del localStorage para tener el carrito de compras permanente",
    technologies: ["Next.js", "Tailwind CSS", "Typescript", "Framer-Motion"],
    demoURL: "https://shopcoo1.netlify.app/",
    repoURL: "https://github.com/luismeza1101/SHOP.CO.git",
    image: 'SHOP-CO'
  },
  {
    title: "Tienda virtual de zapatillas",
    description:
      "Desafio dificil recopilado del sitio web Frontend Mentor, que simula la seccion de un e-commerce de una tienda de zapatillas en linea",
    technologies: ["Next.js", "Tailwind CSS", "Typescript"],
    demoURL: "https://sneaker-store-bice.vercel.app/",
    repoURL: "https://github.com/luismeza1101/SneakerStore.git",
    image: 'sneakerShop'
  },
];
