import React from "react";
import { FaMountain, FaSearchDollar, FaFileSignature, FaIndustry, FaGlobe } from "react-icons/fa";
import { GiMiner } from "react-icons/gi";
import WatermarkBackground from "../Menus/WaterMarks";
import { COMP_MOTTO } from "@/app/utils/constants";

const MiningServices = () => {
  return (
    // <section className="py-16 bg-gray-50">

    <section className="max-w-7xl mx-auto px-6 md:px-12 py-10 space-y-10 relative">
      {/* Image Watermark Background */}
      <WatermarkBackground altText={COMP_MOTTO} />
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">All Minerals. All Markets. All the Way.</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            At Sir Louis & Gao Company Limited, our Mining Services Division is committed to delivering comprehensive, high-impact solutions across the entire mineral value chain.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
              <FaMountain className="text-amber-600 mr-3" size={28} />
              Our Expertise Covers All Mineral Categories:
            </h3>
            <p className="text-gray-700 mb-6">We provide expert services in the exploration, processing, and trade of a wide range of mineral resources:</p>
            <div className="grid grid-cols-2 gap-4">
              <ul className="text-gray-700 space-y-2">
                <li className="flex items-center">
                  <span className="text-amber-600 font-bold mr-2">•</span>
                  Gold
                </li>
                <li className="flex items-center">
                  <span className="text-amber-600 font-bold mr-2">•</span>
                  Copper
                </li>
                <li className="flex items-center">
                  <span className="text-amber-600 font-bold mr-2">•</span>
                  Bauxite
                </li>
                <li className="flex items-center">
                  <span className="text-amber-600 font-bold mr-2">•</span>
                  Manganese
                </li>
              </ul>
              <ul className="text-gray-700 space-y-2">
                <li className="flex items-center">
                  <span className="text-amber-600 font-bold mr-2">•</span>
                  Iron ore
                </li>
                <li className="flex items-center">
                  <span className="text-amber-600 font-bold mr-2">•</span>
                  Lithium
                </li>
                <li className="flex items-center">
                  <span className="text-amber-600 font-bold mr-2">•</span>
                  Rare earth elements
                </li>
                <li className="flex items-center">
                  <span className="text-amber-600 font-bold mr-2">•</span>
                  Industrial minerals
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
              <GiMiner className="text-amber-600 mr-3" size={28} />
              Our Core Mining Services Include:
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-amber-100 p-2 rounded-full mr-4">
                  <FaSearchDollar className="text-amber-600" size={18} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Exploration & Geological Surveys</h4>
                  <p className="text-gray-600 text-sm mt-1">Advanced tools and expert teams for identifying and evaluating new mineral deposits.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-amber-100 p-2 rounded-full mr-4">
                  <FaFileSignature className="text-amber-600" size={18} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Licensing & Regulatory Compliance</h4>
                  <p className="text-gray-600 text-sm mt-1">Navigating mining permits, government approvals, and environmental standards.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-amber-100 p-2 rounded-full mr-4">
                  <FaIndustry className="text-amber-600" size={18} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Mine Development & Operational Support</h4>
                  <p className="text-gray-600 text-sm mt-1">Turnkey project support from feasibility studies to full-scale production.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-amber-100 p-2 rounded-full mr-4">
                  <GiMiner className="text-amber-600" size={18} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Mineral Processing & Refining Coordination</h4>
                  <p className="text-gray-600 text-sm mt-1">Partnerships with certified refineries and processors for quality assurance.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-amber-100 p-2 rounded-full mr-4">
                  <FaGlobe className="text-amber-600" size={18} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Export & Trading Logistics</h4>
                  <p className="text-gray-600 text-sm mt-1">Integrated mineral transportation and export documentation solutions.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div className="bg-amber-50 p-8 rounded-xl">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
              <FaGlobe className="text-amber-600 mr-3" size={28} />
              Strategic Partnerships for Global Trade
            </h3>
            <p className="text-gray-700">
              With strong networks in Africa, China, and international markets, Sir Louis & Gao connects local producers with global buyers, supporting sustainable economic growth
              and secure supply chains.
            </p>
          </div>

          <div className="bg-amber-50 p-8 rounded-xl">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
              <GiMiner className="text-amber-600 mr-3" size={28} />
              Client-Centered, Compliance-Driven
            </h3>
            <p className="text-gray-700 mb-4">Every project is tailored to meet the specific goals of investors, governments, and communities.</p>
            <p className="text-gray-700">We uphold international best practices in transparency, environmental responsibility, and community engagement.</p>
          </div>
        </div>

        <div className="text-center mt-12 bg-gray-100 p-8 rounded-xl">
          <GiMiner className="text-amber-600 mx-auto mb-4" size={32} />
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Sir Louis & Gao Company Limited stands as a trusted partner for clients seeking reliable, scalable, and ethical solutions in the global mining sector — delivering
            results, building value, and securing tomorrow&apos;s resources, today.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MiningServices;
