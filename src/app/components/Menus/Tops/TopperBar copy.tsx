import React, { useEffect, useState } from "react";
import Image from "next/image";
import { SiTiktok, SiFacebook } from "react-icons/si";
import { CalendarDays, Mail, Phone, Home, Sun, Moon } from "lucide-react";
import { COMP_ADDRESS, COMP_EMAIL, COMP_FB, COMP_ICON, COMP_MOBILE, COMP_SHORT, COMP_TIKTOK, today } from "@/app/utils/constants";
import { ICON_SIZE } from "@/app/utils/stylesData";

const TopBar: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

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

  return (
    <div className="fixed top-0 left-0 w-full h-[3vh] bg-gray-800 text-white text-xs z-[60] flex items-center justify-between px-4">
      {/* </div> */}
      <div className="flex items-center gap-2">
        <Image src={COMP_ICON} alt="Company Logo" width={16} height={16} className="w-4 h-4 object-contain" priority />
        <span className="text-sm font-bold hidden sm:inline">{COMP_SHORT}</span>

        <div className="flex items-center gap-1">
          <CalendarDays size={ICON_SIZE} />
          <span>{today}</span>
        </div>

        <button
          onClick={toggleTheme}
          className="theme-toggle"
          style={{
            height: "20px",
            fontSize: "12px",
            padding: "0 6px",
            display: "flex",
            alignItems: "center",
            gap: "4px",
          }}
        >
          {darkMode ? <Sun size={ICON_SIZE} /> : <Moon size={ICON_SIZE} />} {darkMode ? "Light" : "Dark"} Mode
        </button>
      </div>

      <div className="flex items-center gap-4">
        <div className="hidden sm:flex items-center gap-4">
          <div className="flex items-center gap-1">
            <Phone size={ICON_SIZE} />
            <span>{COMP_MOBILE}</span>
          </div>

          <div className="flex items-center gap-1">
            <Mail size={ICON_SIZE} />
            <span>{COMP_EMAIL}</span>
          </div>

          <div className="flex items-center gap-1">
            <SiFacebook size={ICON_SIZE} />
            <span>{COMP_FB.toLowerCase()}</span>
          </div>

          <div className="flex items-center gap-1">
            <SiTiktok size={ICON_SIZE} />
            <span>{COMP_TIKTOK.toLowerCase()}</span>
          </div>

          <div className="hidden md:flex items-center gap-1">
            <Home size={ICON_SIZE} />
            <span className="hidden lg:inline">{COMP_ADDRESS}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
