import React, { useState } from "react";
import Image from "next/legacy/image";
import { fotoData } from "@/app/utils/constants";

export function GalaryFotos() {
  const [expandedCaptions, setExpandedCaptions] = useState<number[]>([]);

  const handleCaptionClick = (id: number) => {
    setExpandedCaptions((prev) => (prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]));
  };

  const truncate = (text: string) => (text.length > 22 ? text.slice(0, 22) + "..." : text);
  const fotoData2 = fotoData.slice(0, 8);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4">
      <h2 className="text-3xl font-bold text-center mb-12 col-span-full">Company Memories</h2>
      {fotoData2.map((item) => {
        const isExpanded = expandedCaptions.includes(item.id);
        const displayText = isExpanded ? item.title : truncate(item.title);
        const imgSrc = `/fotos/${item.id}.jpg`;

        return (
          <figure key={item.id} className="text-center group relative">
            <Image
              src={imgSrc}
              alt={item.title}
              width={400}
              height={300}
              className="w-full h-auto rounded-xl shadow-md object-cover"
              layout="responsive"
              priority={item.id <= 4} // Only load first 4 images eagerly
              onError={(e) => {
                console.error(`Failed to load image: /fotos/${item.id}.jpg`);
                e.currentTarget.src = "/logos/1.jpg"; // Add a fallback
              }}
            />
            <figcaption className="mt-2 text-sm text-gray-600 cursor-pointer" onClick={() => handleCaptionClick(item.id)}>
              {displayText}
            </figcaption>

            {/* Tooltip */}
            <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
              {item.title}
            </div>
          </figure>
        );
      })}
    </div>
  );
}
