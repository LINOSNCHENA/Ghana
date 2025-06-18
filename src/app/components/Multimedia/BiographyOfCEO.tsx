"use client";

import React from "react";
import Image from "next/image";

export default function CeoProfileWithPhoto() {
  return (
    <section className="max-w-5xl mx-auto px-6 md:px-12 py-10 space-y-10">
      <div className="flex flex-col md:flex-row items-start gap-6">
        <Image
          src="/fotos/staff/7.jpg" // Replace with actual path or external URL
          alt="Mr. Louis Fosu Anane"
          width={160}
          height={160}
          className="rounded-full border shadow-md"
        />
        <div>
          <h2 className="text-2xl font-bold">👤 Executive Profile: Mr. Louis Fosu Anane</h2>
          <p className="text-gray-600 mt-1 font-medium">Chief Executive Officer, Sir Louis & Gao Company Limited</p>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold border-b pb-1">Overview</h3>
        <p className="text-gray-800">
          Mr. Louis Fosu Anane is an accomplished technology and infrastructure executive with an international background in software engineering, engineering project management,
          and international relations. He currently serves as the CEO of Sir Louis & Gao Company Limited, a multinational company engaged in strategic investments across sectors
          including gold mining, technology infrastructure, defense equipment, and transport innovation.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold border-b pb-1">🎓 Educational Background</h3>
        <ul className="list-disc list-inside text-gray-800 space-y-1">
          <li>
            <strong>B.Sc. in Software Engineering</strong>
            <br />
            Bohai University, Jinzhou, Liaoning Province, China
          </li>
          <li>
            <strong>M.Sc. in Engineering Project Management</strong>
            <br />
            Shandong University, China
          </li>
          <li>
            <strong>Ph.D. in International Relations (Ongoing)</strong>
            <br />
            University of Pécs, Hungary
          </li>
        </ul>
        <p className="text-gray-800">
          Mr. Anane’s academic path reflects a rare combination of technical depth, project execution expertise, and geopolitical awareness, equipping him to lead both business and
          diplomatic engagements globally.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold border-b pb-1">💼 Professional Experience</h3>
        <ul className="list-disc list-inside text-gray-800 space-y-2">
          <li>
            <strong>Former Role at Inspur Group, China:</strong>
            <br />
            Mr. Anane previously worked with Inspur, one of China’s largest and most advanced data center and cloud computing companies. His role involved exposure to
            next-generation digital infrastructure, enterprise IT systems, and international technology deployment.
          </li>
          <li>
            <strong>CEO, Sir Louis & Gao Company Limited:</strong>
            <ul className="list-disc list-inside ml-6 space-y-1">
              <li>Expanded operations in gold mining and exports across West Africa.</li>
              <li>Engaged in strategic defense and infrastructure partnerships with African governments.</li>
              <li>Facilitated Chinese investments in energy, manufacturing, and technology sectors.</li>
              <li>Promoted science and technology innovation through public-private partnerships.</li>
            </ul>
          </li>
        </ul>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold border-b pb-1">🌍 Leadership Approach</h3>
        <p className="text-gray-800">
          Mr. Louis Fosu Anane believes in strategic international collaboration, technology transfer, and youth empowerment through innovation. His leadership is defined by
          resilience, foresight, and the ability to bridge cross-border business and government alliances.
        </p>
        <blockquote className="italic border-l-4 pl-4 text-gray-600">
          “There are so many people out there who will tell you that you can’t. What you’ve got to do is turn around and say ‘Watch me.’”
        </blockquote>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold border-b pb-1">🌐 Languages & International Exposure</h3>
        <ul className="list-disc list-inside text-gray-800 space-y-1">
          <li>Fluent in English and experienced in cross-cultural leadership.</li>
          <li>Has lived, studied, and worked in China, Hungary, and several African nations.</li>
        </ul>
      </div>
    </section>
  );
}
