"use client";

import React from "react";
import Head from "next/head";
import WatermarkBackground from "../components/Menus/WaterMarks";
import { COMP_MOTTO } from "../utils/constants";
import { Home, Video, Download, Truck, GraduationCap, Globe2 } from "lucide-react";
import { ICON_SIZE } from "../utils/stylesData";
import Link from "next/link";

const LogisticsDetails = () => {
  return (
    <>
      <Head>
        <title>Logistics Services – Sir Louis & Gao Co. Ltd.</title>
      </Head>
      <main className="min-h-screen bg-white text-gray-900 px-6 py-12">
        <div className="max-w-7xl mx-auto bg-gray-200 p-9">
          <WatermarkBackground altText={COMP_MOTTO} />

          <div className="max-w-7xl mx-auto bg-gray-200 p-3">
            <div className="container mx-auto flex justify-evenly items-center ">
              <div>
                <a href="" className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-6 py-1 rounded-md transition">
                  Home Page
                </a>
              </div>

              <div>
                <a href="/videos" className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-6 py-1 rounded-md transition">
                  Videos
                </a>
              </div>
              <div>
                <a href="/downloads" className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-6 py-1 rounded-md transition">
                  Downloads
                </a>
              </div>

              <div>
                <a href="/eductaion" className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-6 py-1 rounded-md transition">
                  Education
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

          <h1 className="text-4xl font-bold text-gray-800 mb-6">Comprehensive Logistics Services Across Africa and Beyond</h1>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            At <strong>Sir Louis & Gao Company Limited</strong>, logistics is not just about moving cargo—it’s about delivering confidence, creating trade connections, and enabling
            economic transformation. From the industrial zones of <strong>Lagos</strong> and <strong>Chongqing</strong>, to the copperbelt in <strong>Zambia</strong> and expanding
            business corridors across <strong>Africa</strong>, we tailor solutions that go beyond transportation to build strategic partnerships.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">Our Core Capabilities</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 text-base leading-relaxed">
            <li>End-to-end freight forwarding via air, sea, and land routes</li>
            <li>Seamless customs clearance across Nigeria, China, and SADC regions</li>
            <li>Heavy equipment handling for mining and industrial operations</li>
            <li>Procurement and supply chain logistics for tourism and academic institutions</li>
            <li>Port-to-door cargo tracking with secure, real-time monitoring</li>
            <li>Cold chain logistics for perishable goods across regional trade hubs</li>
            <li>Specialized project cargo for infrastructure and government-led initiatives</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">Strategic Regional Presence</h2>
          <p className="text-gray-700 text-base mb-4 leading-relaxed">
            Our logistics command centers in <strong>Lusaka (Zambia)</strong>, <strong>Lagos (Nigeria)</strong>, and <strong>Guangzhou (China)</strong> allow us to operate at the
            pulse of manufacturing and distribution. These hubs support efficient cargo flow between Africa and Asia, and serve as the lifeblood for regional development,
            particularly in mining, educational supply chains, and tourism logistics.
          </p>

          <p className="text-gray-700 text-base mb-4 leading-relaxed">
            Whether it&apos;s transporting laboratory equipment to universities in <strong>Ghana</strong>, shipping mining excavators to rural Zambia, or coordinating visa document
            logistics between <strong>China</strong> and <strong>Nigeria</strong>, our team ensures traceability, compliance, and timely delivery.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">Industries We Serve</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 text-base leading-relaxed">
            <li>
              <strong>Mining & Minerals:</strong> End-to-end transport of drilling and processing equipment, both domestic and import/export.
            </li>
            <li>
              <strong>Academic & Research:</strong> Logistics for university programs, scholarships, lab supplies, and academic visa support.
            </li>
            <li>
              <strong>Tourism & Hospitality:</strong> Hotel supply chains, equipment for lodges, and international tour logistics.
            </li>
            <li>
              <strong>Government & NGOs:</strong> Humanitarian cargo, aid distribution, and regional project mobilization.
            </li>
            <li>
              <strong>Import/Export Businesses:</strong> Market-entry logistics for African and Asian traders.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">Why Choose Sir Louis & Gao?</h2>
          <p className="text-gray-700 text-base mb-6 leading-relaxed">
            With a network built on trust, transparency, and regional expertise, Sir Louis & Gao stands as a logistics partner you can count on. We offer:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 text-base">
            <li>Fast, compliant customs procedures across borders</li>
            <li>Live cargo tracking & clear communication at every stage</li>
            <li>Tailored solutions for high-value or sensitive shipments</li>
            <li>24/7 operational support and proactive issue resolution</li>
          </ul>

          <div className="mt-12 text-center">
            <p className="text-lg text-gray-800 mb-4">
              Whether you are importing machinery from China, exporting goods across ECOWAS, or transporting educational materials into Africa&apos;s rural regions — Sir Louis &
              Gao delivers.
            </p>
            <a href="/contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-base font-medium transition">
              Contact Us for a Custom Logistics Plan
            </a>
          </div>
        </div>
      </main>
    </>
  );
};

export default LogisticsDetails;
