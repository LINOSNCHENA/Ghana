"use client";

import React from "react";
import Head from "next/head";
import { Home, Video, Download, Truck, GraduationCap, Globe2 } from "lucide-react";
import WatermarkBackground from "../components/Menus/WaterMarks";
import { COMP_MOTTO } from "../utils/constants";
import Link from "next/link";
import { ICON_SIZE } from "../utils/stylesData";

const MiningProfilePage = () => {
  return (
    <>
      <Head>
        <title>Mining Profile – Sir Louis & Gao Co. Ltd.</title>
      </Head>

      <main className="min-h-screen bg-white text-gray-900 px-6 py-12">
        <div className="max-w-7xl mx-auto bg-gray-200 p-9">
          <WatermarkBackground altText={COMP_MOTTO} />

          <div className="container mx-auto flex justify-evenly items-center flex-wrap gap-2">
            <div>
              <Link href="/" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-6 py-1 rounded-md transition">
                <Home size={ICON_SIZE} /> Home
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

          <section className="mb-12">
            <h1 className="text-4xl font-bold text-blue-800 mt-9 mb-6">Mining Operations Profile</h1>
            <p className="text-lg text-gray-700 mb-4">
              Sir Louis & Gao Co. Ltd. is a prominent player in Africa&apos;s mining sector, specializing in the sourcing, sale, and transportation of high-grade copper concentrate
              and gold. Our mining operations span several key regions, with a focus on delivering value through responsible resource extraction and efficient logistics.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              In the copper sector, we maintain a strong presence through our partnerships in the Democratic Republic of Congo (DRC), where we source premium copper concentrate.
              This material is securely transported to Zambia, where it is processed and stored in our bonded warehouses for quality control and export readiness.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              We collaborate closely with the DRC Ministry of Mines to uphold the highest industry standards. Our logistics network ensures smooth copper movement from Zambia to
              major export hubs such as Dar es Salaam in Tanzania and Durban in South Africa.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              In the gold sector, our company operates mining projects and maintains a strategic alliance with the Ghana Gold Board. This partnership enables us to extract and
              supply responsibly sourced, high-purity gold to international markets, ensuring full regulatory compliance and traceability.
            </p>
            <p className="text-lg text-gray-700">
              At the core of our mining operations is a commitment to quality, environmental responsibility, and client satisfaction. Through innovation, transparency, and strong
              partnerships, we continue to grow as a trusted name in Africa’s mineral industry.
            </p>
          </section>

          <div className="mt-10 text-center">
            <a href="/contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md text-base font-medium transition">
              Contact Us for our Mining Services
            </a>
          </div>
        </div>
      </main>
    </>
  );
};

export default MiningProfilePage;
