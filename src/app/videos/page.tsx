"use client";

import React from "react";
//import { useRouter } from "next/navigation";
import { sectors } from "../utils/constants";
import VideoPlayer from "../components/Gallary/VideoPalyer";

export default function SectorsShowcase() {
  // const router = useRouter();

  // const goHome = () => {
  //   router.push("/");
  // };

  return (
    <section className="min-w-7xl mx-auto px-4 md:px-10 py-12 space-y-12 bg-gray-400 w-4/5 p-9 m-9 rounded-md">
      {/* <button onClick={goHome} className="mb-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
        Go Back to Home Page
      </button> */}

      {/* Button Section Outside Grid */}
      <div className="w-full bg-gray-200 py-4 mt-10 rounded-md">
        <div className="container mx-auto flex justify-evenly items-center ">
          <div>
            <a href="/torism" className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-6 py-2 rounded-md transition">
              Learn More Mining
            </a>
          </div>
          <div>
            <a href="/tourism" className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-6 py-2 rounded-md transition">
              Learn More Toursim
            </a>
          </div>
        </div>
      </div>

      <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800">Our Impact Across Key Sectors</h1>
      <p className="text-center text-gray-600 max-w-3xl mx-auto">
        Discover how we’re creating value through mining, tourism, education, and logistics—with stories that reflect our mission of growth, connection, and transformation.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {sectors.map((sector, idx) => (
          <div key={idx} className="p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-indigo-700 mb-4">{sector.title}</h2>
            <VideoPlayer src={sector.src} autoPlay={false} loop={false} muted={false} controls poster={sector.poster} width="640" height="360" className="rounded-xl shadow" />
            <p className="mt-4 text-gray-700 text-sm italic">“{sector.commentary}”</p>
          </div>
        ))}
      </div>

      {/* Button Section Outside Grid */}
      <div className="w-full bg-gray-200 py-4 mt-10">
        <div className="container mx-auto flex justify-evenly items-center">
          <div>
            <a href="/education" className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-6 py-2 rounded-md transition">
              Learn More Education
            </a>
          </div>
          <div>
            <a href="/contacts" className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-6 py-2 rounded-md transition">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
