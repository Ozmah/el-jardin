import React, { useState } from "react";
// import jardin1 from "./images/jardin1.png";
// import jardin2 from "./images/jardin2.png";
import jardin3 from "./images/jardin3.jpg";
import jardin4 from "./images/jardin4.jpg";
import jardin5 from "./images/jardin5.jpg";
import jardin6 from "./images/jardin6.jpg";
// import jardin7 from "./images/jardin7.png";
// import jardin8 from "./images/jardin8.png";

const PolaroidGallery = () => {
  // Imágenes de ejemplo (reemplaza con tus propias imágenes)
  const images = [
    // {
    //   url: jardin1,
    //   caption: "6 de Octubre de 2018",
    // },
    // {
    //   url: jardin2,
    //   caption: "6 de Octubre de 2018",
    // },
    {
      url: jardin3,
      caption: "25 de Enero de 2025",
    },
    {
      url: jardin4,
      caption: "25 de Enero de 2025",
    },
    {
      url: jardin5,
      caption: "25 de Enero de 2025",
    },
    {
      url: jardin6,
      caption: "5 de Marzo de 2025",
    },
    // {
    //   url: jardin7,
    //   caption: "9 de Marzo de 2025",
    // },
    // {
    //   url: jardin8,
    //   caption: "9 de Marzo de 2025",
    // },
  ];

  // Estado para seguir la imagen actual
  const [currentIndex, setCurrentIndex] = useState(0);

  // Función para avanzar a la siguiente imagen
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Colores de Stardew Valley
  const colors = {
    farmGreen: "#5BA45C",
    goldenHarvest: "#F2C94C",
    valleySky: "#88C9F2",
    rusticWood: "#8E5C3B",
    springBlossom: "#E67A93",
    stardropPurple: "#7D60A6",
    sunlightCream: "#F8F3E3",
    nightLake: "#2D3740",
    leafSprout: "#B5D8A6",
  };

  // Ángulos aleatorios para la rotación de cada polaroid
  const randomRotation = () => {
    return Math.random() * 6 - 3; // Entre -3 y 3 grados
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div
        className="relative w-full max-w-2xl"
        onClick={nextImage}
        style={{ cursor: "pointer" }}
      >
        {/* Polaroids apiladas en el fondo (efecto decorativo) */}
        <div
          className="absolute inset-0 transform translate-x-4 translate-y-4"
          style={{
            backgroundColor: colors.sunlightCream,
            transform: `rotate(${randomRotation()}deg)`,
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        ></div>
        <div
          className="absolute inset-0 transform translate-x-2 translate-y-2"
          style={{
            backgroundColor: colors.sunlightCream,
            transform: `rotate(${randomRotation()}deg)`,
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        ></div>

        {/* Polaroid principal */}
        <div
          className="relative p-4 pb-16 rounded"
          style={{
            backgroundColor: colors.sunlightCream,
            boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)",
            transform: `rotate(${randomRotation()}deg)`,
          }}
        >
          {/* La imagen */}
          <div className="mb-4 p-1 bg-white h-[50vh] overflow-hidden">
            <img
              src={images[currentIndex].url}
              alt={images[currentIndex].caption}
              className="w-full h-full object-cover"
            />
          </div>

          {/* El pie de foto */}
          <div className="absolute bottom-4 left-0 right-0 text-center">
            <p
              className="font-bold"
              style={{
                color: colors.nightLake,
                fontFamily: "'Courier New', monospace",
              }}
            >
              {images[currentIndex].caption}
            </p>
            <p className="text-sm mt-1" style={{ color: colors.rusticWood }}>
              {currentIndex + 1} / {images.length}
            </p>
          </div>

          {/* Cinta adhesiva decorativa en la parte superior */}
          <div
            className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-6 rounded"
            style={{ backgroundColor: `${colors.goldenHarvest}99` }} // Añadido 99 para transparencia
          ></div>
        </div>

        {/* Botones de navegación (opcionales) */}
        <div className="flex justify-center mt-8 space-x-4">
          <button
            className="px-4 py-2 rounded-full"
            style={{
              backgroundColor: colors.farmGreen,
              color: "white",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
            onClick={(e) => {
              e.stopPropagation(); // Prevenir que se active el clic del contenedor
              setCurrentIndex(
                (prevIndex) => (prevIndex - 1 + images.length) % images.length
              );
            }}
          >
            Anterior
          </button>
          <button
            className="px-4 py-2 rounded-full"
            style={{
              backgroundColor: colors.stardropPurple,
              color: "white",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
            onClick={(e) => {
              e.stopPropagation(); // Prevenir que se active el clic del contenedor
              nextImage();
            }}
          >
            Siguiente
          </button>
        </div>
      </div>
    </div>
  );
};

export default PolaroidGallery;
