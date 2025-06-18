import React from "react";
import { FaGlobeAmericas, FaUmbrellaBeach, FaRoute, FaChartLine, FaHandsHelping } from "react-icons/fa";

const TourismServices = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Creating Destinations. Connecting Cultures. Delivering Experiences.</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            At Sir Louis & Gao Company Limited, our Tourism Services Division is dedicated to unlocking the rich cultural, ecological, and economic potential of Africa&apos;s and Asia&apos;s
            tourism sectors.
          </p>
        </div>

        <div className="mb-16 bg-blue-50 rounded-xl p-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
            <FaGlobeAmericas className="text-green-600 mr-3" size={28} />
            What We Do
          </h3>
          <p className="text-gray-700 mb-6">
            We provide a full spectrum of tourism-related services, catering to governments, private investors, tour operators, and international development partners.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <FaUmbrellaBeach className="text-green-600 mr-3" />
                Our Core Tourism Services Include:
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-2">•</span>
                  <div>
                    <span className="font-medium">Tourism Investment Facilitation</span>
                    <p className="text-gray-600 text-sm mt-1">Connecting international tourism investors with local governments and private sector partners across Africa.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-2">•</span>
                  <div>
                    <span className="font-medium">Hospitality Development Support</span>
                    <p className="text-gray-600 text-sm mt-1">Assisting in the planning, design, and operational setup of hotels, eco-lodges, resorts, and cultural centers.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-2">•</span>
                  <div>
                    <span className="font-medium">Inbound & Outbound Tour Coordination</span>
                    <p className="text-gray-600 text-sm mt-1">
                      Organizing safe, enriching, and curated travel experiences including eco-tourism, cultural heritage tours, business travel, and luxury experiences.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-2">•</span>
                  <div>
                    <span className="font-medium">Logistics & Travel Management</span>
                    <p className="text-gray-600 text-sm mt-1">Providing seamless logistics solutions including transport, accommodation, guides, and itineraries.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-2">•</span>
                  <div>
                    <span className="font-medium">Destination Marketing & Promotion</span>
                    <p className="text-gray-600 text-sm mt-1">Helping underrepresented destinations build visibility on the global tourism stage.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <FaRoute className="text-green-600 mr-3" />
                  Our Advantage
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-2">•</span>
                    Deep understanding of local cultures, infrastructure, and policies
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-2">•</span>
                    Strong international business networks across China, Ghana, and emerging markets
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-2">•</span>
                    Proven experience in cross-border investment and logistics
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <FaHandsHelping className="text-green-600 mr-3" />
                  Client Commitment
                </h4>
                <p className="text-gray-700 mb-3">We work closely with both public and private stakeholders to ensure:</p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-2">•</span>
                    Tourism development is sustainable
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-2">•</span>
                    Local communities benefit economically
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-2">•</span>
                    Travelers enjoy safe, authentic, and premium experiences
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-8 bg-green-50 rounded-xl p-8">
          <FaChartLine className="text-green-600 mx-auto mb-4" size={32} />
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Whether you&apos;re a government agency aiming to boost national tourism, or a global investor looking to enter a growing market, Sir Louis & Gao Company Limited is your
            trusted partner in tourism innovation, infrastructure, and investment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TourismServices;
