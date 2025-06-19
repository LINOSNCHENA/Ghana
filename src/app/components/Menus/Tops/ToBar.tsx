import React from "react";
import Image from "next/image";
import { CalendarDays, Mail, Phone, Home } from "lucide-react";
import { SiTiktok, SiFacebook } from "react-icons/si";

import { COMP_ADDRESS, COMP_EMAIL, COMP_FB, COMP_ICON, COMP_MOBILE, COMP_SHORT, COMP_TIKTOK, today } from "@/app/utils/constants";

const TopBar: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-[3vh] bg-gray-800 text-white text-xs z-[60] flex items-center justify-between px-4">
      {/* <div className="flex items-center space-x-2">
        <LogIn size={14} />
        <span className="hidden sm:inline">Login</span>
      </div> */}

      <div className="flex items-center space-x-2 font-bold text-sm sm:text-base">
        <Image
          src={COMP_ICON}
          alt="Company Logo"
          width={20}
          height={20}
          className="w-4 h-4 sm:w-5 sm:h-5 object-contain"
          priority // Ensures fast LCP
        />
        {/* <span>{COMP_SHORT}</span>
        <div className="flex items-center space-x-1">
          <CalendarDays size={14} />
          <span>{today}</span>
        </div> */}
      </div>

      <div className="flex items-center space-x-4">
        <span>{COMP_SHORT}</span>
        <div className="flex items-center space-x-1">
          <CalendarDays size={14} />
          <span>{today}</span>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <div className="hidden sm:flex items-center space-x-1">
          <Phone size={14} />
          <span>{COMP_MOBILE}</span>
        </div>

        <div className="hidden sm:flex items-center space-x-1">
          <SiFacebook size={14} />
          <span>{COMP_FB}</span>
        </div>

        <div className="hidden sm:flex items-center space-x-1">
          <Mail size={14} />
          <span>{COMP_EMAIL}</span>
        </div>

        <div className="hidden sm:flex items-center space-x-1">
          <SiTiktok size={14} />
          <span>{COMP_TIKTOK}</span>
        </div>

        <div className="hidden sm:flex items-center space-x-1">
          <Home size={14} />
          <span>{COMP_ADDRESS}</span>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
