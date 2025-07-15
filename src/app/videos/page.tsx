"use client";

import { ICON_SIZE } from "../utils/stylesData";
import React, { useState } from "react";
import { sectors } from "../utils/constants";
import VideoPlayer from "../components/Gallary/VideoPalyer";
import { Home, Download, Truck, GraduationCap, Globe2 } from "lucide-react";
import Link from "next/link";
const removeTab = ["Downloads"];
const tabs = ["All", "Mining", "Tourism", "Logistics", "Education"];
const sectorsUpdated = sectors.filter((sector) => !removeTab.includes(sector.category));

export default function SectorsShowcase() {
  const [activeTab, setActiveTab] = useState("All");
  const filteredSectors = activeTab === "All" ? sectorsUpdated : sectorsUpdated.filter((sector) => sector.category === activeTab);

  return (
    <section className="w-full min-w-5xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-2 bg-gray-400 dark:bg-gray-700 rounded-md">
      <div className="mt-2 space-y-4 bg-green-500/20 dark:bg-green-600/20">
        <div className="flex flex-wrap justify-center md:justify-evenly gap-2 sm:gap-3 bg-red-500/20 dark:bg-red-600/20 p-2 rounded-md">
          <Link href="/" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-1 rounded-md transition">
            <Home size={ICON_SIZE} /> Home
          </Link>
          <a href="/downloads" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-1 rounded-md transition">
            <Download size={ICON_SIZE} /> Downloads
          </a>
          <a href="/logistics" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-1 rounded-md transition">
            <Truck size={ICON_SIZE} /> Logistics
          </a>
          <a href="/education" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-1 rounded-md transition">
            <GraduationCap size={ICON_SIZE} /> Education
          </a>
          <a href="/tourism" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-1 rounded-md transition">
            <Globe2 size={ICON_SIZE} /> Tourism
          </a>
        </div>
      </div>

      {/* Heading and Description */}
      <div className="text-center px-2">
        <h1 className="text-lg md:text-2xl font-semibold text-gray-800 mb-2">Our Impact Across Key Sectors</h1>
        <p className="text-sm md:text-base text-gray-600 leading-snug max-w-3xl mx-auto">
          Discover how we’re creating value through mining, tourism, education, and logistics—with stories that reflect our mission of growth, connection, and transformation.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-1 rounded-full text-sm font-medium transition ${activeTab === tab ? "bg-blue-600 text-white" : "bg-white text-gray-700"}`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Sector Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSectors.map((sector, idx) => (
          <div key={idx} className="p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition">
            <h2 className="text-md md:text-lg font-semibold text-indigo-700 mb-3">{sector.title}</h2>
            <VideoPlayer
              src={sector.src}
              autoPlay={false}
              loop={false}
              muted={false}
              controls
              poster={sector.poster}
              width="100%"
              height="auto"
              className="rounded-xl shadow w-full"
            />
            <p className="mt-4 text-gray-700 text-sm italic">“{sector.commentary}”</p>
          </div>
        ))}
      </div>

      {/* Bottom Navigation */}
      <div className="w-full bg-gray-200 py-4 rounded-md">
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/" className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-6 py-1 rounded-md transition">
            Home
          </Link>
          <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-6 py-1 rounded-md transition">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
