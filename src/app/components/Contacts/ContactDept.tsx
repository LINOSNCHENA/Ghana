import { useState } from "react";
import { COMP_MOBILE, COMP_NAME, COMP_EMAIL, COMP_PAGE1 } from "@/app/utils/constants";
import { BUTTONS } from "@/app/utils/stylesData";

export function ContactSection() {
  const [messageSent, setMessageSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMessageSent(true);
    setTimeout(() => setMessageSent(false), 3000); // Hide message after 3s
  };

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Heading */}
        <div className="w-full text-center mb-8">
          <h2 className="text-2xl font-extrabold mb-4">Get in Touch Today!</h2>
          <p className="text-lg opacity-90 max-w-6xl mx-auto">We&apos;re here to help! Reach out to us for any inquiries or support. {COMP_NAME}</p>
        </div>

        {/* Contact Info Card */}
        <div className="bg-white text-gray-900 rounded-xl shadow-lg p-6 md:p-8 mb-10 mx-auto w-full max-w-6xl">
          <div className="space-y-4">
            {/* WhatsApp & Call: Responsive layout */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 text-base font-semibold">
              {/* WhatsApp on left (or top on mobile) */}
              <div>
                💬 WhatsApp:{" "}
                <a href={`https://wa.me/${COMP_MOBILE.replace(/\D/g, "")}`} className="text-green-600 underline" target="_blank" rel="noopener noreferrer">
                  Chat
                </a>
              </div>

              {/* Phone on right (or below on mobile) */}
              <div>
                📞 Call:{" "}
                <a href={`tel:${COMP_MOBILE}`} className="text-blue-600 underline">
                  {COMP_MOBILE}
                </a>
              </div>
            </div>

            {/* Email */}
            <p className="text-base font-semibold  text-black">
              ✉️ Email:
              <a href={`mailto:${COMP_EMAIL}`} className="text-blue-600 hover:underline ml-1">
                {COMP_EMAIL}
              </a>
            </p>

            {/* Location */}
            <p className="text-base font-semibold">
              📍 Visit Us:{" "}
              <a href={COMP_PAGE1} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                China | Ghana | Zambia
              </a>
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="bg-white p-6 md:p-8 rounded-xl shadow-lg space-y-6 mx-auto w-full max-w-6xl">
          {messageSent && <div className="p-4 bg-green-100 text-green-700 rounded-lg text-center font-semibold">✅ Your message has been sent successfully!</div>}
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-900"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-900"
            required
          />
          <textarea
            placeholder="Your Message"
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-900"
            required
          ></textarea>

          <button type="submit" className={BUTTONS.smallButton}>
            {" "}
            Send Message 📩{" "}
          </button>
        </form>
      </div>
    </section>
  );
}
