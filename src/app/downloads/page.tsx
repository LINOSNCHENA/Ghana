import React from "react";
import { Download, FileText, Globe2, GraduationCap, Home, Truck, Video } from "lucide-react";
import { categories, documents } from "../utils/appData";
import { ICON_SIZE } from "../utils/stylesData";
import Link from "next/link"; 

export type ClientDocument = {
  id: number;
  name: string;
  url: string;
  type: string;
  size: string;
  category: "Logistics" | "Tourism" | "Mining" | "Education";
};

export default function DownloadsPage() {
  return (
    <section className="min-w-7xl mx-auto px-4 md:px-10 py-12 space-y-12 bg-gray-400 w-4/5 p-3 m-3 rounded-md">
      <div className="max-w-7xl mx-auto bg-gray-200 p-3">
        <div className="container mx-auto flex justify-evenly items-center ">
          <div>
            <a href="" className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-6 py-1 rounded-md transition">
              Home Page
            </a>
          </div>

          <div>
            <a href="/videos" className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-6 py-1 rounded-md transition">
              Videos
            </a>
          </div>
          <div>
            <a href="/education" className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-6 py-1 rounded-md transition">
              Education
            </a>
          </div>

          <div>
            <a href="/logistics" className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-6 py-1 rounded-md transition">
              Logistics
            </a>
          </div>
          <div>
            <a href="/mining" className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-6 py-1 rounded-md transition">
              Mining
            </a>
          </div>
          <div>
            <a href="/tourism" className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-6 py-1 rounded-md transition">
              Toursim
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto flex justify-evenly items-center flex-wrap gap-2">
        <div>
          <Link href="/" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-6 py-1 rounded-md transition">
            <Home size={ICON_SIZE} /> Home Page
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
          <a href="/education" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-6 py-1 rounded-md transition">
            <GraduationCap size={ICON_SIZE} /> Education
          </a>
        </div>
        <div>
          <a href="/tourism" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-6 py-1 rounded-md transition">
            <Globe2 size={ICON_SIZE} /> Tourism
          </a>
        </div>
      </div>

      <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-10 text-center">Client Document Downloads</h1>

          {categories.map((category) => (
            <div key={category} className="mb-10">
              <h2 className="text-xl font-semibold text-gray-700 mb-4 border-b pb-1">{category} Documents</h2>
              <ul className="space-y-4">
                {documents
                  .filter((doc) => doc.category === category)
                  .map((doc) => (
                    <li key={doc.id} className="flex items-center justify-between bg-white shadow-sm border p-4 rounded-md">
                      <div className="flex items-center space-x-3">
                        <FileText className="text-blue-600 w-6 h-6" />
                        <div>
                          <p className="text-sm font-medium text-gray-800">{doc.name}</p>
                          <p className="text-xs text-gray-500">
                            {doc.type} • {doc.size}
                          </p>
                        </div>
                      </div>
                      <a href={doc.url} download className="inline-flex items-center px-3 py-1.5 text-sm text-white bg-blue-600 hover:bg-blue-700 rounded-md transition">
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </a>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
