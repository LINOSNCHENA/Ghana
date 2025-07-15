import React, { useEffect, useState } from "react";
import Image from "next/image";
import { SiTiktok, SiFacebook } from "react-icons/si";
import { CalendarDays, Mail, Phone, Home, Sun, Moon, Menu, X } from "lucide-react";
import { COMP_ADDRESS, COMP_EMAIL, COMP_FB, COMP_ICON, COMP_MOBILE, COMP_SHORT, COMP_TIKTOK, today } from "@/app/utils/constants";
import { ICON_SIZE } from "@/app/utils/stylesData";

const TopBar: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const savedTheme = localStorage.getItem("theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    setDarkMode(savedTheme === "dark");
    document.body.classList.toggle("dark-mode", savedTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.body.classList.toggle("dark-mode", newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
  };

  if (!isClient) return null;

  return (
    <>
      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" onClick={() => setMobileMenuOpen(false)} />}

      <header className="fixed top-0 left-0 w-full h-8 bg-gray-800 dark:bg-gray-900 text-white z-50 flex items-center justify-between px-4 border-b border-gray-700">
        {/* Left Section - Always Visible */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <Image src={COMP_ICON} alt={`${COMP_SHORT} Logo`} width={20} height={20} className="w-5 h-5 object-contain" priority />
            <span className="text-sm font-semibold hidden sm:inline text-gray-100">{COMP_SHORT}</span>
          </div>

          {/* Date - Hidden on smallest mobile */}
          <div className="hidden xs:flex items-center gap-1 text-gray-300">
            <CalendarDays size={ICON_SIZE} className="text-gray-400" />
            <span>{today}</span>
          </div>
        </div>

        {/* Desktop Right Section - Hidden on mobile */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-4">
            {/* Contact Info */}
            <div className="flex items-center gap-1 text-gray-300 hover:text-white transition-colors">
              <Phone size={ICON_SIZE} className="text-gray-400" />
              <a href={`tel:${COMP_MOBILE.replace(/\D/g, "")}`} className="hover:underline text-sm">
                {COMP_MOBILE}
              </a>
            </div>

            <div className="flex items-center gap-1 text-gray-300 hover:text-white transition-colors">
              <Mail size={ICON_SIZE} className="text-gray-400" />
              <a href={`mailto:${COMP_EMAIL}`} className="hover:underline text-sm">
                {COMP_EMAIL}
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a href={COMP_FB} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors" aria-label="Facebook">
                <SiFacebook size={ICON_SIZE} />
              </a>

              <a href={COMP_TIKTOK} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-pink-500 transition-colors" aria-label="TikTok">
                <SiTiktok size={ICON_SIZE} />
              </a>
            </div>

            {/* Address */}
            <div className="flex items-center gap-1 text-gray-300">
              <Home size={ICON_SIZE} className="text-gray-400" />
              <span className="max-w-[160px] truncate hover:underline cursor-help" title={COMP_ADDRESS}>
                {COMP_ADDRESS}
              </span>
            </div>
          </div>

          {/* Theme Toggle - Desktop */}
          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${darkMode ? "light" : "dark"} mode`}
            className="flex items-center gap-1 px-2 py-1 rounded hover:bg-gray-700 transition-colors"
          >
            {darkMode ? <Sun size={ICON_SIZE} className="text-amber-300" /> : <Moon size={ICON_SIZE} className="text-blue-400" />}
          </button>
        </div>

        {/* Mobile Controls - Visible only on mobile */}
        <div className="flex items-center gap-2 md:hidden">
          {/* Theme Toggle - Mobile */}
          <button onClick={toggleTheme} aria-label={`Switch to ${darkMode ? "light" : "dark"} mode`} className="p-1 rounded-full hover:bg-gray-700 transition-colors">
            {darkMode ? <Sun size={ICON_SIZE} className="text-amber-300" /> : <Moon size={ICON_SIZE} className="text-blue-400" />}
          </button>

          {/* Mobile Menu Button */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu" className="p-1 rounded-full hover:bg-gray-700 transition-colors">
            {mobileMenuOpen ? <X size={ICON_SIZE} /> : <Menu size={ICON_SIZE} />}
          </button>
        </div>

        {/* Mobile Menu - Slides in from right */}
        <div
          className={`fixed top-12 right-0 w-64 h-[calc(100vh-48px)] bg-gray-800 dark:bg-gray-900 z-50 transform transition-transform duration-300 ease-in-out shadow-2xl
          ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"} md:hidden`}
        >
          <div className="p-4 flex flex-col gap-6">
            {/* Contact Info */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2 text-gray-300">
                <Phone size={ICON_SIZE} className="text-gray-400" />
                <a href={`tel:${COMP_MOBILE.replace(/\D/g, "")}`} className="hover:underline">
                  {COMP_MOBILE}
                </a>
              </div>

              <div className="flex items-center gap-2 text-gray-300">
                <Mail size={ICON_SIZE} className="text-gray-400" />
                <a href={`mailto:${COMP_EMAIL}`} className="hover:underline">
                  {COMP_EMAIL}
                </a>
              </div>

              <div className="flex items-center gap-2 text-gray-300">
                <Home size={ICON_SIZE} className="text-gray-400" />
                <span className="hover:underline cursor-help" title={COMP_ADDRESS}>
                  {COMP_ADDRESS.substring(0, 30)}...
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-2 border-t border-gray-700">
              <a href={COMP_FB} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors p-2" aria-label="Facebook">
                <SiFacebook size={ICON_SIZE + 4} />
              </a>

              <a href={COMP_TIKTOK} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-pink-500 transition-colors p-2" aria-label="TikTok">
                <SiTiktok size={ICON_SIZE + 4} />
              </a>
            </div>

            {/* Date - Visible in mobile menu */}
            <div className="flex items-center gap-2 text-gray-400 pt-2 border-t border-gray-700">
              <CalendarDays size={ICON_SIZE} />
              <span>{today}</span>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default TopBar;
