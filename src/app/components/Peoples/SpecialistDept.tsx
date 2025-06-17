// import { specialists } from "@/app/utils/constants";

import { pricingPlans } from "@/app/utils/constants";

export function SpecialistsSection() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-3xl font-bold text-center mb-12">Meet Our Specialists</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pricingPlans.map((specialist, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-bold mb-2">{specialist.features}</h3>
              <p className="text-gray-600">{specialist.popular}</p>
              <p className="text-sm text-gray-500 mt-2">{specialist.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
