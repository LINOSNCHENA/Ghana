import { services } from "@/app/utils/constants";
import React from "react";

const ServicesSection: React.FC = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold text-center mb-10">Our Services</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {Object.entries(services).map(([category, items]) => (
          <div key={category} className="bg-white border border-gray-200 rounded-2xl shadow p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-blue-700 mb-4">{category}</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-800">
              {items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
