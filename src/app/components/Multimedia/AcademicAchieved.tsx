"use client";

import { COMP_MOTTO } from "@/app/utils/constants";
import React from "react";
import WatermarkBackground from "../Menus/WatermarkBackground";

export function AcademicAchievement() {
  return (

         <section className="max-w-7xl mx-auto px-6 md:px-12 py-10 space-y-10 relative">
            {/* Image Watermark Background */}      
            <WatermarkBackground altText={COMP_MOTTO} />
      <div>
        <h2 className="text-3xl font-bold text-center mb-12">Meet Our Specialists</h2>
        <h2 className="text-2xl font-bold mb-4">1.Chief Executive Officer ! Academic Achievement</h2>
        <p className="text-gray-800">
          Mr. Louis Fosu Anane graduated as an Engineer in Project Management from <strong>Shandong University</strong>, one of China’s first-class and prestigious universities.
          Founded in 1901, Shandong University is recognized nationally and internationally for its excellence in research, engineering, and management education.
        </p>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-3">Historical Places in Shandong Province</h3>
        <ul className="space-y-4 text-gray-800 list-disc list-inside">
          <li>
            <strong>Mount Tai (泰山, Taishan):</strong> One of China’s Five Great Mountains, Mount Tai is a UNESCO World Heritage Site and a symbol of ancient Chinese civilization,
            spirituality, and imperial worship.
          </li>
          <li>
            <strong>Qufu (曲阜):</strong> The birthplace of Confucius, the great Chinese philosopher. The Confucius Temple, Cemetery, and Mansion here are major cultural landmarks
            attracting visitors worldwide.
          </li>
          <li>
            <strong>Dai Temple (岱庙):</strong> Located at the foot of Mount Tai, this is the largest ancient building complex dedicated to the worship of Mount Tai’s deities.
          </li>
          <li>
            <strong>Zhoucun Ancient City (周村古城):</strong> Known as the “City of Commerce,” Zhoucun is famous for its well-preserved Ming and Qing dynasty architecture and
            traditional market streets.
          </li>
          <li>
            <strong>Penglai Pavilion (蓬莱阁):</strong> A historic seaside fortress town, famous for its beautiful ancient pavilions and legends related to the Eight Immortals in
            Chinese mythology.
          </li>
          <li>
            <strong>Yantai and Weihai Coastal Cities:</strong> Famous for their scenic coastlines, historical sites related to Qing Dynasty maritime defenses, and foreign trade
            ports.
          </li>
        </ul>
      </div>
    </section>
  );
}
