// "use client";
"use client";
import React from "react";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { topWebsites } from "@/app/utils/constants";

const ProjectSection: React.FC = () => {
  const pageTile = "Top Websites from Our Work-in-Progress Portfolios";
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-gray-800">{pageTile}</h2>

        <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          {topWebsites.slice(0, 10).map((site, index) => (
            <motion.div
              key={index}
              className="p-5 bg-white shadow-lg rounded-xl flex items-center justify-between transition-transform duration-300 hover:scale-105"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-sm sm:text-lg font-medium text-gray-700">
                ({index + 1}) {site.name}
              </span>
              <a href={site.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 ml-2" aria-label={`Visit ${site.name}`}>
                <ExternalLink size={20} />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectSection;
