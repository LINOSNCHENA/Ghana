import { pricingPlans, whatsappNumber } from "@/app/utils/constants";
import { useState } from "react";

export function PricingSection() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const handleWhatsAppSend = (plan: (typeof pricingPlans)[0]) => {
    const message = `Hello, I'm interested in the "${plan.title}" plan which costs ${plan.price}. It includes: ${plan.features.join(", ")}.`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10 text-gray-800">Pricing</h2>

        <div className="grid text-sm grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white p-8 rounded-2xl shadow-xl transition-transform duration-300 hover:scale-105 flex flex-col border ${
                plan.popular ? "border-green-700 ring-2 ring-blue-200" : "border-gray-200"
              }`}
            >
              {plan.popular && (
                <span className="self-start flex items-center gap-2 bg-blue-600 text-white text-xs px-3 py-1 rounded-full mb-4 font-semibold shadow">
                  <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <polygon points="10,1 12.59,7.36 19.51,7.64 13.97,11.97 15.82,18.76 10,14.77 4.18,18.76 6.03,11.97 0.49,7.64 7.41,7.36" />
                  </svg>
                  Most Popular
                </span>
              )}
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-900">{plan.title}</h3>
              <p className="text-xl text-blue-700 font-bold mb-5">{plan.price}</p>

              <ul className="mb-6 space-y-2 flex-1">
                {plan.features?.map((feature: string, i: number) => (
                  <li key={i} className="text-sm text-gray-700 flex items-center gap-2">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="space-y-2 mt-auto">
                <button
                  onClick={() => setSelectedPlan(plan.title)}
                  className={`w-full py-2 rounded-lg font-medium transition ${selectedPlan === plan.title ? "bg-blue-700 text-white" : "bg-blue-600 text-white hover:bg-blue-700"}`}
                >
                  {selectedPlan === plan.title ? "Selected" : "Choose Plan"}
                </button>

                {selectedPlan === plan.title && (
                  <button onClick={() => handleWhatsAppSend(plan)} className="w-full bg-green-500 text-white py-2 rounded-lg font-medium hover:bg-green-600 transition">
                    Contact via WhatsApp
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
