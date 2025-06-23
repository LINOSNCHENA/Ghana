"use client";

import React, { useEffect, useState } from "react";
import { Download, FileText, Globe2, GraduationCap, Home, Truck, Video, Sun, Moon } from "lucide-react";
import Link from "next/link";
import { categories, documents } from "../utils/appData";
import { ICON_SIZE } from "../utils/stylesData";
import { generatePdfFromTxt } from "../helpers/generatePDF";

export default function DownloadsPage() {
  const [darkMode, setDarkMode] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      setDarkMode(true);
      document.body.classList.add("dark-mode");
    }
  }, []);

  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("theme", newMode ? "dark" : "light");
  };

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <section className="downloads-container">
      <header className="nav-wrapper">
        <div className="nav-top">
          <button className="menu-toggle" onClick={toggleNav}>
            ☰ Menu
          </button>
          <button onClick={toggleTheme} className="theme-toggle">
            {darkMode ? <Sun size={18} /> : <Moon size={18} />} {darkMode ? "Light" : "Dark"} Mode
          </button>
        </div>

        <nav className={`nav-container ${navOpen ? "open" : ""}`}>
          <NavLink href="/" icon={<Home size={ICON_SIZE} />} label="Home" />
          <NavLink href="/videos" icon={<Video size={ICON_SIZE} />} label="Videos" />
          <NavLink href="/downloads" icon={<Download size={ICON_SIZE} />} label="Downloads" />
          <NavLink href="/logistics" icon={<Truck size={ICON_SIZE} />} label="Logistics" />
          <NavLink href="/education" icon={<GraduationCap size={ICON_SIZE} />} label="Education" />
          <NavLink href="/tourism" icon={<Globe2 size={ICON_SIZE} />} label="Tourism" />
        </nav>
      </header>

      <main className="documents-content">
        <div className="documents-wrapper">
          <h1 className="documents-title">Client Document Downloads</h1>

          {categories.map((category) => (
            <section key={category} className="category-section">
              <h2 className="category-title">{category} Documents</h2>
              <ul className="documents-list">
                {documents
                  .filter((doc) => doc.category === category)
                  .map((doc) => (
                    <li key={doc.id} className="document-item">
                      <div className="document-info">
                        <FileText className="document-icon" />
                        <div>
                          <p className="document-name">{doc.name}</p>
                          <p className="document-meta">
                            {doc.type} • {doc.size}
                          </p>
                        </div>
                      </div>
                      <button onClick={() => generatePdfFromTxt(doc.url, doc.name)} className="pdf-button">
                        <FileText className="button-icon" />
                        PDF
                      </button>
                    </li>
                  ))}
              </ul>
            </section>
          ))}
        </div>
      </main>
    </section>
  );
}

function NavLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <Link href={href} className="nav-link">
      {icon} {label}
    </Link>
  );
}
