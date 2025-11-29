import React from "react";
import { useState } from 'react';

interface CarouselImagesProps {
  images: string[];
  alt?: string;
}

export const CarouselImages = ({ images, alt = 'Imagen del carrusel' }: CarouselImagesProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) {
    return (
      <div className="w-full max-w-3xl mx-auto p-8 text-center text-neutral-400">
        No hay imágenes para mostrar
      </div>
    );
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="relative bg-neutral-900 rounded-xl p-6 shadow-2xl">
        {/* Contenedor de imágenes */}
        <div className="relative overflow-hidden rounded-lg">
          <div className="relative aspect-video w-full">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${alt} ${index + 1}`}
                className={`absolute inset-0 w-full h-full object-cover rounded-lg transition-all duration-500 ease-in-out ${
                  index === currentIndex
                    ? 'opacity-100 scale-100'
                    : 'opacity-0 scale-95 pointer-events-none'
                }`}
              />
            ))}
          </div>

          {/* Botones de navegación - Desktop */}
          {images.length > 1 && (
            <>
              <button
                onClick={goToPrevious}
                className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 items-center justify-center w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 text-white text-2xl transition-all duration-200 hover:scale-110 backdrop-blur-sm"
                aria-label="Imagen anterior"
              >
                ‹
              </button>
              <button
                onClick={goToNext}
                className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 items-center justify-center w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 text-white text-2xl transition-all duration-200 hover:scale-110 backdrop-blur-sm"
                aria-label="Siguiente imagen"
              >
                ›
              </button>
            </>
          )}
        </div>

        {images.length > 1 && (
          <>
            {/* Indicadores de posición */}
            <div className="flex justify-center gap-2 mt-6">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-blue-500 w-8'
                      : 'bg-neutral-600 hover:bg-neutral-500 w-2'
                  }`}
                  aria-label={`Ir a imagen ${index + 1}`}
                />
              ))}
            </div>

            {/* Controles móviles */}
            <div className="flex md:hidden justify-between gap-3 mt-4">
              <button
                onClick={goToPrevious}
                className="flex-1 px-4 py-2 rounded-full bg-neutral-800 hover:bg-neutral-700 text-sm text-neutral-200 transition-colors duration-200"
              >
                ← Anterior
              </button>
              <button
                onClick={goToNext}
                className="flex-1 px-4 py-2 rounded-full bg-neutral-800 hover:bg-neutral-700 text-sm text-neutral-200 transition-colors duration-200"
              >
                Siguiente →
              </button>
            </div>

            {/* Contador */}
            <div className="text-center text-neutral-400 text-sm mt-4">
              {currentIndex + 1} / {images.length}
            </div>
          </>
        )}
      </div>
    </div>
  );
};
