"use client";

import React from "react";
// import Image from "next/legacy/image";
import Image from "next/image";
import WatermarkBackground from "../Menus/WaterMarks";
import { COMP_MOTTO } from "@/app/utils/constants";

export default function CeoProfileWithPhoto() {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 py-10 space-y-10 relative">
      {/* Image Watermark Background */}

      <WatermarkBackground altText={COMP_MOTTO} />

      {/* Main Content */}
      <div className="relative max-w-7xl max-auto z-10 bg1-red-200 bg1-opacity-90 rounded-lg p-6 md:p-8 shadow-sm">
        {/* Profile Header */}
        <div className="flex flex-col md:flex-row items-start gap-6">
          <Image src="/fotos/staff/1.jpg" alt="Mr. Louis Fosu Anane" width={160} height={160} className="rounded-full border-4 border-white shadow-lg" priority />
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">👤 Executive Profile: Mr. Louis Fosu Anane</h2>
            <p className="text-gray-600 mt-1 font-medium">Chief Executive Officer, Sir Louis & Gao Company Limited</p>
          </div>
        </div>

        {/* Overview Section */}
        <div className="mt-8 space-y-4">
          <h3 className="text-xl font-semibold border-b pb-2 text-gray-700">Overview</h3>
          <p className="text-gray-800 leading-relaxed">
            Mr. Louis Fosu Anane is an accomplished technology and infrastructure executive with an international background in software engineering, engineering project
            management, and international relations. He currently serves as the CEO of Sir Louis & Gao Company Limited, a multinational company engaged in strategic investments
            across sectors including gold mining, technology infrastructure, defense equipment, and transport innovation. A diversified enterprise specializing in gold production,
            tourism development, and logistics services across Africa and Asia
          </p>
        </div>

        {/* Education Section */}
        <div className="mt-8 space-y-4">
          <h3 className="text-xl font-semibold border-b pb-2 text-gray-700">🎓 Educational Background</h3>
          <ul className="list-disc list-inside text-gray-800 space-y-2 marker:text-gray-400">
            <li className="pl-2">
              <strong className="text-gray-900">Diploma in Information Technology & Business Skills</strong>
              <br />
              <span className="text-gray-600"> – NIIT, Kumasi, Ghana</span>
            </li>

            <li className="pl-2">
              <strong className="text-gray-900">National Certificate in Computing & Electronics (NCCE) </strong>
              <br />
              <span className="text-gray-600"> IPMC, Labone, Accra, Ghana</span>
            </li>

            <li className="pl-2">
              <strong className="text-gray-900">B.Sc. in Software Engineering</strong>
              <br />
              <span className="text-gray-600">Bohai University, Jinzhou, Liaoning Province, China</span>
            </li>

            <li className="pl-2">
              <strong className="text-gray-900">M.Sc. in Engineering Project Management</strong>
              <br />
              <span className="text-gray-600">Shandong University, China</span>
            </li>

            {/* <li className="pl-2">
              <strong className="text-gray-900">M.Sc. in Engineering Project Management</strong>
              <br />
              <span className="text-gray-600">Shandong University, China</span>
            </li> */}

            <li className="pl-2">
              <strong className="text-gray-900">Ph.D. in International Relations (Ongoing)</strong>
              <br />
              <span className="text-gray-600">University of Pécs, Hungary</span>
            </li>
          </ul>

          <p className="text-gray-800 mt-3 leading-relaxed">
            Mr. Anane&apos;s academic path reflects a rare combination of technical depth, project execution expertise, and geopolitical awareness, equipping him to lead both
            business and diplomatic engagements globally.
          </p>
        </div>

        {/* Experience Section */}
        <div className="mt-8 space-y-4">
          <h3 className="text-xl font-semibold border-b pb-2 text-gray-700">💼 Professional Experience</h3>
          <ul className="list-disc list-inside text-gray-800 space-y-3 marker:text-gray-400">
            <li className="pl-2">
              <strong className="text-gray-900">Former Role at Inspur Group, China:</strong>
              <br />
              <span className="text-gray-600">
                Mr. Anane brings over a decade of international project management, IT, and investment facilitation experience: • Database Administrator – Inspur Group HQ, Jinan,
                Shandong, China Managed enterprise-level database systems at one of China’s leading technology companies. • Project Manager – Dongyuan Louis Trading Company Limited
                Oversaw cross-border trade operations and logistical coordination between China and West Africa. • Country Manager – SMART-HKG Hong Kong Co. Limited Served as a key
                liaison, introducing Chinese and foreign investors to African government leaders to promote investment opportunities in copper mining, infrastructure, and energy
                sectors.
              </span>
            </li>
            <li className="pl-2">
              <strong className="text-gray-900">CEO, Sir Louis & Gao Company Limited:</strong>
              <ul className="list-disc list-inside ml-6 mt-1 space-y-1 marker:text-gray-400">
                <li className="text-gray-600">Expanded operations in gold mining and exports across West Africa</li>
                <li className="text-gray-600">Engaged in strategic defense and infrastructure partnerships with African governments</li>
                <li className="text-gray-600">Facilitated Chinese investments in energy, manufacturing, and technology sectors</li>
                <li className="text-gray-600">Promoted science and technology innovation through public-private partnerships</li>
              </ul>
            </li>
          </ul>
        </div>

        {/* Leadership Section */}
        <div className="mt-8 space-y-4">
          <h3 className="text-xl font-semibold border-b pb-2 text-gray-700">🌍 Leadership Approach</h3>
          <p className="text-gray-800 leading-relaxed">
            Mr. Louis Fosu Anane believes in strategic international collaboration, technology transfer, and youth empowerment through innovation. His leadership is defined by
            resilience, foresight, and the ability to bridge cross-border business and government alliances.
          </p>
          <blockquote className="italic border-l-4 border-gray-300 pl-4 text-gray-600 my-4">
            &quot;There are so many people out there who will tell you that you can&apos;t. What you&apos;ve got to do is turn around and say &apos;Watch me.&apos;&quot;
          </blockquote>
        </div>

        {/* Languages Section */}
        <div className="mt-8 space-y-4">
          <h3 className="text-xl font-semibold border-b pb-2 text-gray-700">🌐 Languages & International Exposure</h3>
          <ul className="list-disc list-inside text-gray-800 space-y-1 marker:text-gray-400">
            <li className="pl-2 text-gray-600">Fluent in English and experienced in cross-cultural leadership</li>
            <li className="pl-2 text-gray-600">Has lived, studied, and worked in China, Hungary, and several African nations</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
