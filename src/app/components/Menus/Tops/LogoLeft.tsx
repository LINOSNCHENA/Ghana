import React from "react";
import Image from "next/image";
import { COMP_ICON } from "@/app/utils/constants";

const LeftIcon: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-1/6 h-[3vh] min-h-[30px] bg-gray-800 text-white text-xs z-[60] flex items-center px-4">
      <div className="flex items-center space-x-2 font-bold text-sm sm:text-base">
        <Image src={COMP_ICON} alt="Company Logo" width={20} height={20} className="w-4 h-4 sm:w-5 sm:h-5 object-contain" priority />
        <span className="hidden sm:inline">Your Company</span>
      </div>
    </div>
  );
};

export default LeftIcon;
