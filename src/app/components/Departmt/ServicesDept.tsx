import { services } from "@/app/utils/constants";

// export function ServicesSection() {
//   return (
//     // <section className="py-20 px-4">
//     <section className="py-12 px-4 sm:px-6 lg:px-12">
//       <div className="max-w-7xl mx-auto w-full">
//         <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>

//         <div className="max-w-[75vw] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
//           {services.map((service, index) => (
//             <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
//               <h3 className="text-xl font-bold mb-4">{service.title}</h3>
//               <p>{service.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// components/Services.tsx

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
