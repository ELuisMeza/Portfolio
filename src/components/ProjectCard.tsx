import React, { useState } from "react";
import { CarouselImages } from "./CarrouselIamges";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  demoURL: string;
  repoURL: string;
  image: string;
  imagesDetail?: string[];
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  technologies,
  demoURL,
  repoURL,
  image,
  imagesDetail,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (e: React.MouseEvent) => {
    // No abrir el modal si se hace click en los enlaces
    const target = e.target as HTMLElement;
    if (
      target.closest("a") ||
      target.tagName === "A" ||
      !imagesDetail ||
      imagesDetail.length === 0
    ) {
      return;
    }
    setIsModalOpen(true);
  };

  const imagePaths =
    imagesDetail?.map((name) => `/imgs/proyects/${name}.png`) || [];

  return (
    <>
      <li
        onClick={handleCardClick}
        className={`flex flex-col gap-4 bg-color-hover p-4 rounded-lg max-w-[600px] mx-auto lg:bg-transparent lg:border-2 lg:border-color-hover lg:hover:bg-color-hover duration-200 z-20 ${
          imagesDetail && imagesDetail.length > 0
            ? "cursor-pointer"
            : ""
        }`}
      >
        <div className="w-full flex flex-col gap-3">
          <h3 className="font-bold text-neutral-200 text-lg">{title}</h3>
          <p className="text-xs">{description}</p>
          {technologies.length > 0 && (
            <ul className="flex flex-wrap gap-2" aria-label="Technologies used">
              {technologies.map((technology, index) => (
                <li
                  key={index}
                  className="flex items-center justify-center rounded-full border border-neutral-700 border-opacity-50 bg-neutral-400/10 px-3 py-1 text-xs font-medium text-neutral-300"
                >
                  {technology}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="flex flex-col justify-center">
          <img
            src={`/imgs/proyects/${image}.png`}
            alt={title}
            className="w-full max-w-[500px]"
          />
        </div>
        <div className="flex items-center justify-center gap-3 mt-2">
          <a
            className="bg-[#1D3557] w-1/2 py-2 rounded-2xl text-sm flex items-center gap-2 justify-center"
            href={demoURL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
          >
            <img src="/icons/link.svg" alt="Demo" className="w-5" />
            Demo
          </a>
          <a
            className="bg-[#1D3557] w-1/2 py-2 rounded-2xl text-sm flex items-center gap-2 justify-center"
            href={repoURL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
          >
            <img src="/icons/github.svg" alt="Repositorio" className="w-5" />
            Repositorio
          </a>
        </div>
      </li>

      {isModalOpen && imagesDetail && imagesDetail.length > 0 && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl px-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="absolute -top-10 right-2 rounded-full bg-neutral-900 px-3 py-1 text-sm text-neutral-200 hover:bg-neutral-800 transition-colors duration-200"
              aria-label="Cerrar modal"
            >
              Cerrar
            </button>
            <CarouselImages images={imagePaths} alt={title} />
          </div>
        </div>
      )}
    </>
  );
};

