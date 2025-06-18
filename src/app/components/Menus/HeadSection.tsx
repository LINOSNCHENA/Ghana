//
// HeadSections
//

// import { COMP_LOGO_BIG, COMP_NAME } from "@/app/utils/constants";
// import { BUTTONS } from "@/app/utils/stylesData";
// import { RefObject } from "react";
// import Image from "next/image";

// interface HeadSectionProps {
//   scrollToSection: (ref: RefObject<HTMLDivElement>) => void;
//   contactRef: RefObject<HTMLDivElement>;
// }

// export function HeadSection({ scrollToSection, contactRef }: HeadSectionProps) {
//   return (
//     <section className="relative text-center py-16 px-4 sm:py-20 sm:px-8 bg11-blue-200 text-black rounded-lg overflow-hidden">
//       {/* Watermark Logo */}
//       <div className="absolute inset-0 z-0 opacity-10">
//         <Image src={COMP_LOGO_BIG} alt="Company Logo Watermark" fill className="object-contain" priority />
//       </div>

//       {/* Foreground Content */}
//       <div className="relative z-10">
//         <h1 className="text-2xl sm:text-2xl md:text-5xl font-bold mb-4 leading-snug">{COMP_NAME}</h1>
//         <p className="text-lg sm:text-xl mb-4">Your trusted partner in Africa-China Tourism solutions.</p>
//         <button className={BUTTONS.topButton} onClick={() => scrollToSection(contactRef)}>
//           Contact Us!
//         </button>
//       </div>
//     </section>
//   );
// }

import { COMP_LOGO_BIG, COMP_NAME } from "@/app/utils/constants";
import { RefObject } from "react";
import Image from "next/image";

interface HeadSectionProps {
  scrollToSection: (ref: RefObject<HTMLDivElement>) => void;
  contactRef: RefObject<HTMLDivElement>;
}

export function HeadSection({ scrollToSection, contactRef }: HeadSectionProps) {
  return (
    <section className="relative text-center py-16 px-4 sm:py-24 sm:px-8 rounded-lg overflow-hidden bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      {/* Watermark Logo with subtle gradient overlay */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-blue-900/10"></div>
        <Image src={COMP_LOGO_BIG} alt="Company Logo Watermark" fill className="object-contain" style={{ filter: "brightness(0) invert(1) opacity(0.7)" }} priority />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Animated floating circles decoration */}
        <div className="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-blue-400/20 blur-xl animate-float"></div>
        <div className="absolute bottom-10 -right-10 w-60 h-60 rounded-full bg-blue-300/15 blur-xl animate-float-delay"></div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight tracking-tight drop-shadow-lg">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-100 to-white">{COMP_NAME}</span>
        </h1>

        <p className="text-xl sm:text-2xl mb-8 max-w-2xl mx-auto text-blue-100 font-medium drop-shadow-md">Your trusted partner in Africa-China Tourism solutions</p>

        <button
          onClick={() => scrollToSection(contactRef)}
          className="px-8 py-3 sm:px-10 sm:py-4 bg-white text-blue-700 font-bold rounded-full 
                    hover:bg-blue-100 hover:scale-105 transition-all duration-300 
                    shadow-lg hover:shadow-xl active:scale-95"
        >
          <span className="relative z-10">Contact Us!</span>
          <span className="absolute inset-0 rounded-full bg-white opacity-20 animate-ping-once"></span>
        </button>
      </div>

      {/* Animated wave divider at bottom */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 sm:h-24">
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            fill="white"
            opacity=".25"
            className="fill-current text-blue-900"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            fill="white"
            opacity=".5"
            className="fill-current text-blue-800"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            fill="white"
            className="fill-current text-blue-700"
          ></path>
        </svg>
      </div>
    </section>
  );
}
