"use client";

import React, { useState } from "react";
import { sectors } from "../utils/constants";
import VideoPlayer from "../components/Gallary/VideoPalyer";
import {Home, Video, Download, Truck, GraduationCap, Globe2 } from "lucide-react";
import { ICON_SIZE } from "../utils/stylesData";
import Link from "next/link"; 

const tabs = ["All", "Mining", "Tourism", "Logistics", "Education"];

export default function SectorsShowcase() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredSectors = activeTab === "All" ? sectors : sectors.filter((sector) => sector.category === activeTab);

  return (
    <section className="min-w-7xl mx-auto px-4 md:px-10 py-12 space-y-12 bg-gray-400 w-4/5 p-2 m-2 rounded-md">
      <div className="max-w-7xl mx-auto bg-gray-200 p-3">
        <div className="container mx-auto flex justify-evenly items-center ">
          <div>
            <a href="" className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-6 py-1 rounded-md transition">
              Home Page
            </a>
          </div>

          <div>
            <a href="/education" className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-6 py-1 rounded-md transition">
              Education
            </a>
          </div>

          <div>
            <a href="/logistics" className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-6 py-1 rounded-md transition">
              Logistics
            </a>
          </div>
          <div>
            <a href="/mining" className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-6 py-1 rounded-md transition">
              Mining
            </a>
          </div>
          <div>
            <a href="/tourism" className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-6 py-1 rounded-md transition">
              Toursim
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto flex justify-evenly items-center flex-wrap gap-2">
        <div>
          <Link href="/" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-6 py-1 rounded-md transition">
            <Home size={ICON_SIZE} /> Home Page
          </Link>
        </div>
        <div>
          <a href="/videos" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-6 py-1 rounded-md transition">
            <Video size={ICON_SIZE} /> Videos
          </a>
        </div>
        <div>
          <a href="/downloads" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-6 py-1 rounded-md transition">
            <Download size={ICON_SIZE} /> Downloads
          </a>
        </div>
        <div>
          <a href="/logistics" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-6 py-1 rounded-md transition">
            <Truck size={ICON_SIZE} /> Logistics
          </a>
        </div>
        <div>
          <a href="/education" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-6 py-1 rounded-md transition">
            <GraduationCap size={ICON_SIZE} /> Education
          </a>
        </div>
        <div>
          <a href="/tourism" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-6 py-1 rounded-md transition">
            <Globe2 size={ICON_SIZE} /> Tourism
          </a>
        </div>
      </div>

      <h1 className="text-sm md:text-2xl font-semibold text-center text-gray-800 mb-2">Our Impact Across Key Sectors</h1>
      <p className="text-xs text-center text-gray-600 max-w-7xl mx-auto leading-snug">
        Discover how we’re creating value through mining, tourism, education, and logistics—with stories that reflect our mission of growth, connection, and transformation.
      </p>

      {/* Tabs */}
      <div className="flex justify-center space-x-4 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-7 py-1 rounded-full text-sm font-medium transition ${activeTab === tab ? "bg-blue-600 text-white" : "bg-white text-gray-700"}`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Sector Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {filteredSectors.map((sector, idx) => (
          <div key={idx} className="p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition">
            <h2 className="text-lg font-semibold text-indigo-700 mb-4">{sector.title}</h2>
            <VideoPlayer src={sector.src} autoPlay={false} loop={false} muted={false} controls poster={sector.poster} width="640" height="360" className="rounded-xl shadow" />
            <p className="mt-4 text-gray-700 text-sm italic">“{sector.commentary}”</p>
          </div>
        ))}
      </div>

      {/* Bottom Navigation */}
      <div className="w-full bg-gray-200 py-2 mt-10">
        <div className="container mx-auto flex justify-evenly items-center">
          <a href="" className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-6 py-1 rounded-md transition">
            Home
          </a>
          <a href="/contacts" className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-6 py-1 rounded-md transition">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
