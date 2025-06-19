import React from "react";
import Image from "next/image";
import { SiTiktok, SiFacebook } from "react-icons/si";
import { CalendarDays, Mail, Phone, Home } from "lucide-react";
import { COMP_ADDRESS, COMP_EMAIL, COMP_FB, COMP_ICON, COMP_MOBILE, COMP_SHORT, COMP_TIKTOK, today } from "@/app/utils/constants";

const TopBar: React.FC = () => {
  return (
    // <div className="fixed top-0 w-full h-8 bg-gray-800 text-white text-xs z-50 flex items-center justify-between px-4">
    <div className="fixed top-0 left-0 w-full h-[3vh] bg-gray-800 text-white text-xs z-[60] flex items-center justify-between px-4">
      {/* </div> */}
      <div className="flex items-center gap-2">
        <Image src={COMP_ICON} alt="Company Logo" width={16} height={16} className="w-4 h-4 object-contain" priority />
        <span className="font-bold hidden sm:inline">{COMP_SHORT}</span>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1">
          <CalendarDays size={14} />
          <span>{today}</span>
        </div>

        <div className="hidden sm:flex items-center gap-4">
          <div className="flex items-center gap-1">
            <Phone size={14} />
            <span>{COMP_MOBILE}</span>
          </div>

          <div className="flex items-center gap-1">
            <Mail size={14} />
            <span>{COMP_EMAIL}</span>
          </div>

          <div className="flex items-center gap-1">
            <SiFacebook size={14} />
            <span>{COMP_FB}</span>
          </div>

          <div className="flex items-center gap-1">
            <SiTiktok size={14} />
            <span>{COMP_TIKTOK}</span>
          </div>

          <div className="hidden md:flex items-center gap-1">
            <Home size={14} />
            <span className="hidden lg:inline">{COMP_ADDRESS}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
