import React from "react";
import Image from "next/image";
import { COMP_LOGO3 } from "@/app/utils/constants";

const LeftIcon: React.FC = () => {
  return (
    <div className="relative left-1/5 flex items-center space-x-2 font-bold text-sm sm:text-base">
      <Image src={COMP_LOGO3} alt="Company Logo" width={200} height={200} className="w-[150px] h-[150px] object-contain" priority />
    </div>
  );
};

export default LeftIcon;
