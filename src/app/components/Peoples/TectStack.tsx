import { techStacks } from "@/app/utils/constants";
export function TechStackSection() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto w-full">
        <div className="max-w-[75vw] mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Tech Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techStacks.map((stack, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4">{stack.title}</h3>
                <p>{stack.technologies}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
