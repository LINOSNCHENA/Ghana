import { services } from "@/app/utils/constants";

export function ServicesSection() {
  return (
    // <section className="py-20 px-4">
    <section className="py-12 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>

        <div className="max-w-[75vw] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
