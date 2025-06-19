"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { fotoData } from "@/app/utils/constants";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export function CompanySlides() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [modalImageId, setModalImageId] = useState<number | null>(null);

  const scrollToIndex = (index: number) => {
    const container = scrollRef.current;
    if (container) {
      const childWidth = container.offsetWidth;
      container.scrollTo({
        left: index * childWidth,
        behavior: "smooth",
      });
    }
  };

  const handleScroll = (direction: "left" | "right") => {
    let newIndex = currentIndex + (direction === "left" ? -1 : 1);
    if (newIndex < 0) newIndex = fotoData.length - 1;
    if (newIndex >= fotoData.length) newIndex = 0;
    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % fotoData.length;
        scrollToIndex(newIndex);
        return newIndex;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const truncate = (text: string, limit = 40) => (text.length > limit ? text.slice(0, limit) + "..." : text);

  return (
    <section className="relative w-full py-10 overflow-hidden bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Company Photo Gallery</h2>

      {/* Arrows */}
      <button
        onClick={() => handleScroll("left")}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white shadow-md p-3 rounded-full hover:bg-gray-200"
        aria-label="Scroll Left"
      >
        <ChevronLeft className="w-6 h-6 text-gray-700" />
      </button>
      <button
        onClick={() => handleScroll("right")}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white shadow-md p-3 rounded-full hover:bg-gray-200"
        aria-label="Scroll Right"
      >
        <ChevronRight className="w-6 h-6 text-gray-700" />
      </button>

      {/* Slider */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide"
        style={{
          scrollBehavior: "smooth",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <style jsx>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        {fotoData.map((item) => (
          <div key={item.id} className="w-screen flex-shrink-0 snap-center flex flex-col items-center justify-center">
            <div
              className="relative w-full h-[70vh] min-h-[300px] max-h-[80vh] cursor-pointer flex items-center justify-center bg-blue-200"
              onClick={() => setModalImageId(item.id)}
            >
              <Image src={`/fotos/${item.id}.jpg`} alt={item.title} fill className="object-contain" sizes="100vw" priority={item.id === 1} />
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

      {/* Modal */}
      {modalImageId && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <button onClick={() => setModalImageId(null)} className="absolute top-6 right-6 text-white bg-gray-800 p-2 rounded-full hover:bg-red-500" aria-label="Close Modal">
            <X className="w-6 h-6" />
          </button>

          <div className="relative w-[90vw] h-[80vh] max-w-5xl flex items-center justify-center">
            <Image src={`/fotos/${modalImageId}.jpg`} alt="Modal Preview" fill className="object-contain rounded-xl" sizes="90vw" />
          </div>
        </div>
      )}
    </section>
  );
}
