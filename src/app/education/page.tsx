"use client";

import { COMP_MOTTO } from "@/app/utils/constants";
import React from "react";
import WatermarkBackground from "../components/Menus/WaterMarks";
import { Home, Video, Download, Truck, Globe2 } from "lucide-react";
import { ICON_SIZE } from "../utils/stylesData";
import Link from "next/link";

export default function LifeInChina() {
  const sections = [
    {
      title: "1. Dynamic and Fast-Moving Environment",
      content: `Living in China as a foreigner—especially in cities like Beijing, Shanghai, Guangzhou, Shenzhen, or Nanjing—can be a life-changing experience. The country is marked by rapid economic growth, technological advancement, and a strong infrastructure base, making it an ideal environment for entrepreneurship, education, and professional networking.`,
    },
    {
      title: "2. Opportunities for Growth",
      content: `China is a land of strategic opportunity for foreigners involved in:
• Business and investment (especially in tech, mining, manufacturing, logistics)
• Higher education and research
• Language and cultural exchange
• Technology transfer and international cooperation

As a foreign professional, you’ll find access to:
• Global exhibitions and trade expos
• Regional investment forums
• Government-backed industrial zones
• Cutting-edge R&D facilities (such as Inspur and Huawei)`,
    },
    {
      title: "3. Cultural Adaptation & Respect",
      content: `China places a high value on respect, order, and protocol. As a foreigner, learning to navigate:
• Chinese customs and etiquette (礼仪, lǐyí)
• Basic Mandarin Chinese
• The importance of face (面子, miànzi) and hierarchy

…can greatly improve your relationships, both socially and in business.`,
    },
    {
      title: "4. Language and Communication",
      content: `• Mandarin Chinese is the national language, and while many in business speak English, day-to-day life often requires basic Chinese.
• Many foreigners enroll in language programs or use translation apps like Pleco or Baidu Translate.
• Having a bilingual assistant or translator is helpful, especially for official meetings and document handling.`,
    },
    {
      title: "5. Legal and Immigration Considerations",
      content: `Living legally and comfortably in China requires:
• Holding the right visa type (business visa [M], work visa [Z], student visa [X], etc.)
• Registering with local public security bureaus
• Understanding basic laws and visa renewal procedures

It is important to work with legal or immigration consultants if you’re doing business or managing a team.`,
    },
    {
      title: "6. Community and Lifestyle",
      content: `• Major cities have strong expat communities, with access to international schools, embassies, churches/mosques, restaurants, and African associations.
• Healthcare is modern in urban areas, with international hospitals available.
• Cost of living varies: cities like Beijing and Shanghai are high-end, while cities like Jinan, Tianjin, and Chengdu offer more affordable standards.`,
    },
    {
      title: "7. Challenges to Be Aware Of",
      content: `• Language barrier is the top challenge for many foreigners.
• Digital ecosystem (WeChat, Alipay, etc.) is advanced but requires local setup and Chinese ID/bank linking.
• Internet access is restricted (e.g., Google, WhatsApp, Facebook are blocked), so foreigners rely on VPNs to stay connected.
• Cultural isolation can occur without an active effort to integrate.`,
    },
    {
      title: "Personal Experience",
      content: `“As a Ghanaian professional living and working in China, I gained not only world-class technical knowledge at Inspur and Chinese universities but also valuable life skills. It takes patience, humility, and adaptability—but the growth and global exposure are unmatched.”\n– Louis Fosu Anane`,
    },
  ];

  return (
    <section className="w-full min-w-5xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-2 bg-gray-400 dark:bg-gray-700 rounded-md">
      <div className="mt-2 space-y-4 bg-green-500/20 dark:bg-green-600/20">
        <div className="min-w-7xl mx-auto bg-gray-200 p-9">
          <div className="container mx-auto flex justify-evenly items-center bg-gray-400 p-2">
            <div>
              <Link href="/" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-6 py-1 rounded-md transition">
                <Home size={ICON_SIZE} /> Home
              </Link>
            </div>
            <div>
              <a href="/videos" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-6 py-1 rounded-md transition">
                <Video size={ICON_SIZE} /> Videos
              </a>
            </div>
            <div>
              <a href="/downloads" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-6 py-1 rounded-md transition">
                <Download size={ICON_SIZE} /> Downloads
              </a>
            </div>
            <div>
              <a href="/logistics" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-6 py-1 rounded-md transition">
                <Truck size={ICON_SIZE} /> Logistics
              </a>
            </div>

            <div>
              <a href="/tourism" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-6 py-1 rounded-md transition">
                <Globe2 size={ICON_SIZE} /> Tourism
              </a>
            </div>
          </div>
        </div>

        <WatermarkBackground altText={COMP_MOTTO} />
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-3">Education : Life in China as a Foreigner: A Professional Perspective</h1>

        {sections.map((sec, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow p-6 transition hover:shadow-lg">
            <h2 className="text-xl font-semibold text-indigo-700 mb-2">{sec.title}</h2>
            <p className="whitespace-pre-line text-gray-700 leading-relaxed">{sec.content}</p>
          </div>
        ))}

        <div className="mt-10 text-center">
          {/* <a href="/mining" className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-6 py-2 rounded-md transition">
          Learn More mining
        </a> */}
          <a href="/contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 text-sm rounded-md text-base font-medium transition">
            Contact Us for our Education Services
          </a>
        </div>
      </div>
    </section>
  );
}
