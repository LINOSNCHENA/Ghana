// app/tourism/page.tsx

import React from "react";
import WatermarkBackground from "../components/Menus/WaterMarks";
import { COMP_MOTTO } from "../utils/constants";

export default function TourismPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 px-6 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="w-full bg-gray-200 py-4 mt-10 rounded-md">
          <div className="container mx-auto flex justify-evenly items-center ">
            <div>
              <a href="/mining" className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-6 py-2 rounded-md transition">
                Learn More Mining
              </a>
            </div>
            <div>
              <a href="/logistics" className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-6 py-2 rounded-md transition">
                Learn More Logistics
              </a>
            </div>
          </div>
        </div>
        <WatermarkBackground altText={COMP_MOTTO} />
        <h1 className="text-4xl font-bold mb-4 text-center">Tourism Services at Sir Louis & Gao Company Limited</h1>
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
      </div>
    </main>
  );
}
