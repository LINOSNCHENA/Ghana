// app/components/SendEmailForm.tsx
"use client";

import { API_POST } from "@/app/utils/ApiRoutes";
import { COMP_MOTTO } from "@/app/utils/constants";
import React, { useState } from "react";
import WatermarkBackground from "../Menus/WaterMarks";
// import { Img } from "@react-email/components";
// import { logo } from "./TextData/EmailTemplate";

const SendEmailForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<{
    text: string;
    type: "success" | "error";
  } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus(null);

    // Basic validation
    if (!formData.email.includes("@")) {
      setStatus({
        text: "Please enter a valid email address",
        type: "error",
      });
      setIsLoading(false);
      return;
    }

    if (formData.message.length < 10) {
      setStatus({
        text: "Message should be at least 10 characters",
        type: "error",
      });
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch(API_POST, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setStatus({
        text: "Message sent successfully! We'll get back to you soon.",
        type: "success",
      });
      // Reset form on success
      setFormData({
        email: "",
        username: "",
        message: "",
      });
    } catch (error) {
      setStatus({
        text: error instanceof Error ? error.message : "Failed to send message",
        type: "error",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 py-10 space-y-10 relative">
      <WatermarkBackground altText={COMP_MOTTO} />

      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Contact Us</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Your Email *
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
              placeholder="your.email@example.com"
            />
          </div>

          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
              Your Name
            </label>
            <input
              type="text"
              id="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Optional"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Your Message *
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
              placeholder="How can we help you?"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-3 px-6 rounded-lg text-white font-semibold transition-colors ${isLoading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"}`}
          >
            {isLoading ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Sending...
              </span>
            ) : (
              "Send Message"
            )}
          </button>
        </form>

        {status && (
          <div
            className={`mt-6 p-4 rounded-lg ${status.type === "success" ? "bg-green-50 text-green-800 border border-green-200" : "bg-red-50 text-red-800 border border-red-200"}`}
          >
            {status.text}
          </div>
        )}

        {/*         <div>
          <Img
            src={COMP_URL} // Replace with your logo URL
            width="120"
            height="auto"
            alt={COMP_MOTTO}
            style={logo}
          />
        </div> */}
      </div>
    </section>
  );
};

export default SendEmailForm;
