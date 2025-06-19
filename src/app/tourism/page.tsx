"use client";

import React from "react";
import VideoPlayer from "../components/Multimedia/VideoPalyer";

const sectors = [
  {
    title: "Mining",
    src: "/videos/1.mp4",
    poster: "/images/mining-thumb.jpg",
    commentary: `“Through our responsible mineral extraction and trade operations across Africa, we’ve seen communities grow stronger and economies thrive. Our copper and gold exports set new benchmarks in both quality and sustainability.”`,
  },
  {
    title: "Tourism",
    src: "/videos/2.mp4",
    poster: "/images/tourism-thumb.jpg",
    commentary: `“Tourism is not just travel—it's transformation. From the savannas of East Africa to the coastal wonders of West Africa, we craft experiences that connect people, culture, and nature in unforgettable ways.”`,
  },
  {
    title: "Education",
    src: "/videos/3.mp4",
    poster: "/images/education-thumb.jpg",
    commentary: `“Education is our bridge to the future. With partnerships in China, Ghana, and the U.S., we’re training the next generation of leaders in technology, policy, and innovation.”`,
  },
  {
    title: "Logistics",
    src: "/videos/4.mp4",
    poster: "/images/logistics-thumb.jpg",
    commentary: `“Moving minerals, people, and ideas—our logistics network is the backbone of trade across Africa. With bonded warehouses in Zambia and optimized routes to Dar es Salaam and Durban, we ensure secure and timely delivery.”`,
  },
];

export default function SectorsShowcase() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-10 py-12 space-y-12">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800">Our Impact Across Key Sectors</h1>
      <p className="text-center text-gray-600 max-w-3xl mx-auto">
        Discover how we’re creating value through mining, tourism, education, and logistics—with stories that reflect our mission of growth, connection, and transformation.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {sectors.map((sector, idx) => (
          <div key={idx} className="p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-indigo-700 mb-4">{sector.title}</h2>
            <VideoPlayer src={sector.src} autoPlay={false} loop={false} muted={false} controls poster={sector.poster} width="640" height="360" className="rounded-xl shadow" />
            <p className="mt-4 text-gray-700 text-sm italic">“{sector.commentary}”</p>
          </div>
        ))}
      </div>
    </section>
  );
}
