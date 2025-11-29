import React, { useState } from "react";
import { CarouselImages } from "./CarrouselIamges";

interface ProjectImagesButtonProps {
  images?: string[];
  title: string;
}

const ProjectImagesButton: React.FC<ProjectImagesButtonProps> = ({
  images,
  title,
}) => {
  const [open, setOpen] = useState(false);

  if (!images || images.length === 0) return null;

  const imagePaths = images.map(
    (name) => `/imgs/proyects/${name}.png`,
  );

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="w-full mt-2 rounded-2xl bg-neutral-800 px-4 py-2 text-sm font-medium text-neutral-100 hover:bg-neutral-700 transition-colors duration-200"
      >
        Ver más imágenes
      </button>

      {open && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <div className="relative w-full max-w-4xl px-4">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute -top-10 right-2 rounded-full bg-neutral-900 px-3 py-1 text-sm text-neutral-200 hover:bg-neutral-800"
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

export default ProjectImagesButton;


