"use client";

import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";

const ContactPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setLoading(true);

  //   try {
  //     await new Promise((resolve) => setTimeout(resolve, 1000));
  //     console.log("Form submitted:", form);

  //     setSubmitted(true);
  //     setForm({ name: "", email: "", subject: "", message: "" });
  //   } catch (error) {
  //     console.error("Submission error:", error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    console.log(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      console.log(form);

      if (response.ok) {
        setSubmitted(true);
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        const data = await response.json();
        console.error("Email send error:", data.error);
      }
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Contact Us – Sir Louis & Gao Co. Ltd.</title>
      </Head>
      <main className="max-w-4xl mx-auto mt-[4%] flex flex-col justify-center items-center max-w-[42vw] max-h-[92vh] px-6 py-12 bg-blue-400">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Get in Touch</h1>
        <p className="text-gray-700 mb-8">
          We&apos;d love to hear from you. Whether you&apos;re interested in logistics services, visa support, or mining procurement, fill out the form below and our team will
          respond promptly.
        </p>

        {submitted && <div className="bg-green-100 text-green-700 px-4 py-3 rounded mb-6">Thank you! Your message has been sent. We will get back to you shortly.</div>}

        <form onSubmit={handleSubmit} className="space-y-6 bg-white shadow-md rounded-lg p-6 w-[100%]">
          <div>
            <label className="block text-gray-700 mb-2" htmlFor="name">
              Full Name
            </label>
            <input
              required
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-2"
              placeholder="Jellita Mulenga"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              required
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-2"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2" htmlFor="subject">
              Subject
            </label>
            <select required id="subject" name="subject" value={form.subject} onChange={handleChange} className="w-full border border-gray-300 rounded px-4 py-2">
              <option value="">Select a subject</option>
              <option value="Visa Inquiry">Visa Inquiry</option>
              <option value="Logistics Quote">Logistics Quote</option>
              <option value="Mining Procurement">Mining Procurement</option>
              <option value="General Inquiry">General Inquiry</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              required
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              className="w-full border border-gray-300 rounded px-4 py-2"
              placeholder="How can we help you?"
            ></textarea>
          </div>

          <div className="flex justify-between items-center mt-6">
            <button
              type="submit"
              disabled={loading}
              className={`bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            <Link href="/" className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-6 py-2 rounded-md transition inline-block">
              Home
            </Link>
          </div>
        </form>
      </main>
    </>
  );
};

export default ContactPage;
