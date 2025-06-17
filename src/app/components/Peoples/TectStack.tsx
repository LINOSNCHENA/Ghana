import { fotoNames } from "@/app/utils/constants";
import React from "react";

export function TechStackSection() {
  const images = Array.from({ length: 20 }, (_, i) => ({
    src: `/fotos/${i + 1}.jpg`,
    caption: String(fotoNames[i]), // + `Foto ${i + 1}`,
  }));

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4">
      {images.map((image, index) => (
        <figure key={index} className="text-center">
          <img src={image.src} alt={image.caption} className="w-full h-auto rounded-xl shadow-md object-cover" />
          <figcaption className="mt-2 text-sm text-gray-600">{image.caption}</figcaption>
        </figure>
      ))}
    </div>
  );
}
