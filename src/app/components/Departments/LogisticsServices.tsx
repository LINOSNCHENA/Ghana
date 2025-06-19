import React from "react";
import { FaGlobe, FaShippingFast, FaUsers, FaHandshake } from "react-icons/fa";
import WatermarkBackground from "../Menus/WaterMarks";
import { COMP_MOTTO } from "@/app/utils/constants";

const LogisticsSection = () => {
  return (
    // <section className="py-16 bg-gray-50">
    <section className="max-w-7xl mx-auto px-6 md:px-12 py-10 space-y-10 relative">
      {/* Image Watermark Background */}
      <WatermarkBackground altText={COMP_MOTTO} />
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Global Reach. Client-Focused. Efficiency-Driven.</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            At Sir Louis & Gao Company Limited, logistics is more than transportation — it is the strategic engine that powers global commerce.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
              <FaGlobe className="text-blue-600 mr-3" size={28} />
              Global Logistics Solutions
            </h3>
            <p className="text-gray-600 mb-6">
              Operating across Africa, Asia, and beyond, we provide end-to-end logistics services that support international trade, mining operations, tourism infrastructure, and
              government projects. From procurement to final delivery, our team ensures each movement is streamlined, traceable, and secure.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
              <FaShippingFast className="text-blue-600 mr-3" size={28} />
              Core Services Include:
            </h3>
            <ul className="text-gray-600 space-y-2">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                Freight forwarding (air, sea, and land)
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                Customs clearance and documentation
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                Warehousing and inventory management
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                Mining equipment and commodity transport
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                Tourism logistics (hospitality supply chain coordination)
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                Specialized project cargo & heavy-lift solutions
              </li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
              <FaUsers className="text-blue-600 mr-3" size={28} />
              Client-First Philosophy
            </h3>
            <p className="text-gray-600 mb-4">
              What sets us apart is our client-centric approach. Every logistics solution is designed around the unique needs and priorities of our partners. Whether supporting a
              multinational mining investor or a government tourism initiative, we provide:
            </p>
            <ul className="text-gray-600 space-y-2">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                Transparent communication
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                Proactive problem-solving
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                On-time delivery, every time
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
              <FaHandshake className="text-blue-600 mr-3" size={28} />
              Trusted Network, Strategic Hubs
            </h3>
            <p className="text-gray-600">
              Through strong alliances with customs authorities, ports, and carriers, and with logistics hubs in West Africa, China, and the Middle East, we ensure goods move
              quickly, safely, and cost-effectively — even in challenging environments.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-700 max-w-4xl mx-auto">
            Sir Louis & Gao Company Limited continues to evolve as a leading logistics partner for companies looking to expand into Africa&apos;s high-growth markets and beyond.
            With every shipment and every mile, we reaffirm our commitment to professionalism, precision, and putting our clients first.
          </p>
        </div>

        <div className="mt-6">
          <a href="/logistics" className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-6 py-2 rounded-md transition">
            Learn More
          </a>
        </div>

        
      </div>
    </section>
  );
};

export default LogisticsSection;
