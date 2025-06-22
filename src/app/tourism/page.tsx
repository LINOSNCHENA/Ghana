// app/tourism/page.tsx

import React from "react";
import WatermarkBackground from "../components/Menus/WaterMarks";
import { COMP_MOTTO } from "../utils/constants";
import { Home, Video, Download, Truck, GraduationCap, Globe2 } from "lucide-react";
import Link from "next/link";
import { ICON_SIZE } from "../utils/stylesData";

export default function TourismPage() {
  return (
    <main className="min-h-screen bg-gray-400 text-black px-6 py-12">
      <div className="max-w-7xl mx-auto bg-gray-200 p-9">
        <WatermarkBackground altText={COMP_MOTTO} />

        <div className="container mx-auto flex justify-evenly items-center flex-wrap gap-2 p-5 bg-gray-300">
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

        <h1 className="text-2xl font-bold mb-4 mt-4 text-center">Tourism Services at Sir Louis & Gao Company Limited</h1>
        <p className="text-center text-lg text-gray-600 mb-10">Creating Destinations. Connecting Cultures. Delivering Experiences.</p>

        <p className="mb-6">
          At <strong>Sir Louis & Gao Company Limited</strong>, our Tourism Services Division is dedicated to unlocking the rich cultural, ecological, and economic potential of
          Africa’s and Asia’s tourism sectors. We offer end-to-end tourism development and management services, designed to elevate local destinations to international standards
          while creating meaningful and memorable experiences for travelers.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">🌍 What We Do</h2>
        <p className="mb-6">
          We provide a full spectrum of tourism-related services, catering to governments, private investors, tour operators, and international development partners.
        </p>

        <h2 className="text-2xl font-semibold mb-4">🏞 Our Core Tourism Services Include:</h2>
        <ul className="list-disc list-inside mb-8 space-y-3">
          <li>
            <strong>Tourism Investment Facilitation:</strong> Connecting international tourism investors with local governments and private sector partners across Africa.
          </li>
          <li>
            <strong>Hospitality Development Support:</strong> Assisting in the planning, design, and operational setup of hotels, eco-lodges, resorts, and cultural centers.
          </li>
          <li>
            <strong>Inbound & Outbound Tour Coordination:</strong>
            <ul className="ml-6 list-disc mt-1">
              <li>Eco-tourism</li>
              <li>Cultural heritage tours</li>
              <li>Business and diplomatic travel</li>
              <li>Luxury and group travel</li>
            </ul>
          </li>
          <li>
            <strong>Logistics & Travel Management:</strong> Providing seamless logistics solutions including transport, accommodation, guides, and itineraries for individual and
            group travelers.
          </li>
          <li>
            <strong>Destination Marketing & Promotion:</strong> Helping underrepresented destinations build visibility on the global tourism stage through strategic branding and
            partnerships.
          </li>
        </ul>

        <hr className="my-10 border-gray-300" />

        <h2 className="text-2xl font-semibold mb-4">🧭 Our Advantage</h2>
        <ul className="list-disc list-inside mb-8 space-y-1">
          <li>Deep understanding of local cultures, infrastructure, and policies</li>
          <li>Strong international business networks across China, Ghana, and other emerging markets</li>
          <li>Proven experience in cross-border investment and logistics</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">💼 Client Commitment</h2>
        <ul className="list-disc list-inside mb-12 space-y-1">
          <li>Tourism development is sustainable</li>
          <li>Local communities benefit economically</li>
          <li>Travelers enjoy safe, authentic, and premium experiences</li>
        </ul>

        <div className="border-t pt-6 text-center">
          <p className="text-lg font-medium">
            Whether you’re a government agency aiming to boost national tourism, or a global investor looking to enter a growing market,{" "}
            <strong>Sir Louis & Gao Company Limited</strong> is your trusted partner in tourism innovation, infrastructure, and investment.
          </p>
        </div>

        <div className="mt-10 text-center">
          <a href="/contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md text-base font-medium transition">
            Contact Us for our Tourism Services
          </a>
        </div>
      </div>
    </main>
  );
}
