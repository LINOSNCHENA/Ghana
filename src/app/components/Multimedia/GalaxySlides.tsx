"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { fotoData } from "@/app/utils/constants";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export function CompanySlides() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [modalImageId, setModalImageId] = useState<number | null>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const scrollAmount = container.offsetWidth * 0.9;
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const truncate = (text: string, limit = 40) => (text.length > limit ? text.slice(0, limit) + "..." : text);

  // Auto-scroll every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => scroll("right"), 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full py-10 overflow-hidden bg-gray-50">
      {/* Navigation Arrows */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white shadow-md p-3 rounded-full hover:bg-gray-200"
        aria-label="Scroll Left"
      >
        <ChevronLeft className="w-6 h-6 text-gray-700" />
      </button>
      <button
        onClick={() => scroll("right")}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white shadow-md p-3 rounded-full hover:bg-gray-200"
        aria-label="Scroll Right"
      >
        <ChevronRight className="w-6 h-6 text-gray-700" />
      </button>

      {/* Slider */}
      <div ref={scrollRef} className="flex overflow-x-auto scroll-smooth space-x-8 px-6 scrollbar-hide snap-x snap-mandatory">
        {fotoData.map((item) => (
          <div key={item.id} className="flex-shrink-0 w-[90vw] max-w-[90vw] snap-center rounded-2xl overflow-hidden shadow-xl bg-white">
            <div className="relative w-full h-[70vh] min-h-[300px] max-h-[80vh] cursor-pointer" onClick={() => setModalImageId(item.id)}>
              <Image src={`/fotos/${item.id}.jpg`} alt={item.title} fill className="object-contain" sizes="(max-width: 768px) 100vw, 90vw" priority={item.id === 1} />
            </div>
            <p
              className="p-4 text-center text-base font-medium text-gray-700 cursor-pointer hover:underline"
              onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
            >
              {expandedId === item.id ? item.title : truncate(item.title)}
            </p>
          </div>
        ))}
      </div>

      {/* Modal Preview */}
      {modalImageId && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <button onClick={() => setModalImageId(null)} className="absolute top-6 right-6 text-white bg-gray-800 p-2 rounded-full hover:bg-red-500" aria-label="Close Modal">
            <X className="w-6 h-6" />
          </button>
          
          <div className="relative w-[90vw] h-[80vh] max-w-5xl">
            <Image src={`/fotos/${modalImageId}.jpg`} alt="Modal Preview" fill className="object-contain rounded-xl" sizes="90vw" />
          </div>

        </div>
      )}
    </section>
  );
}
