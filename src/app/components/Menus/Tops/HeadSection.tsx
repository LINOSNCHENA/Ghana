// import { COMP_MOTTO, COMP_NAME } from "@/app/utils/constants";
// import { RefObject } from "react";
// import WatermarkBackground from "../WaterMarks";
// import TopBar from "./ToBar";

// interface HeadSectionProps {
//   scrollToSection: (ref: RefObject<HTMLDivElement>) => void;
//   contactRef: RefObject<HTMLDivElement>;
// }

// export function HeadSection({ scrollToSection, contactRef }: HeadSectionProps) {
//   return (
//     <section className="relative text-center py-16 px-4 sm:py-24 sm:px-8 rounded-lg overflow-hidden bg-gradient-to-br from-blue-200 to-blue-300 text-black">
//       <TopBar />

//       {/* Foreground Content */}
//       <div className="relative z-10 min-w-9xl mx-auto">
//         <WatermarkBackground altText={COMP_MOTTO} />
//         {/* Subtle floating elements */}
//         <div className="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-gray-400/10 blur-xl animate-float"></div>
//         <div className="absolute bottom-10 -right-10 w-60 h-60 rounded-full bg-gray-400/10 blur-xl animate-float-delay"></div>

//         <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight tracking-tight">
//           <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-100 to-white text-black">{COMP_NAME}</span>
//         </h1>

//         <p className=" text-green text-xl sm:text-2xl mb-8 max-w-2xl mx-auto text-blue-100/90 font-medium">Your trusted partner in Africa-China Tourism solutions</p>
//         <button onClick={() => scrollToSection(contactRef)} className="bg-blue-700 text-white px-5 py-2 rounded-lg hover:bg-blue-800 transition font-medium">
//           Contact Us
//         </button>
//       </div>

//       {/* Refined wave divider */}
//       <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
//         <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 sm:h-24" aria-hidden="true">
//           <path
//             d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
//             className="fill-current text-blue-900/70"
//           ></path>
//           <path
//             d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
//             className="fill-current text-blue-900/50"
//           ></path>
//           <path
//             d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
//             className="fill-current text-blue-900/30"
//           ></path>
//         </svg>
//       </div>
//     </section>
//   );
// }

import { COMP_MOTTO, COMP_NAME } from "@/app/utils/constants";
import { RefObject } from "react";
import WatermarkBackground from "../WaterMarks";
import TopBar from "./ToBar";
import LeftIcon from "./LogoLeft";

interface HeadSectionProps {
  scrollToSection: (ref: RefObject<HTMLDivElement>) => void;
  contactRef: RefObject<HTMLDivElement>;
}

export function HeadSection({ scrollToSection, contactRef }: HeadSectionProps) {
  return (
    // <section className="relative text-center py-16 px-4 sm:py-24 sm:px-8 rounded-lg overflow-hidden bg-gradient-to-br from-sky-100 to-sky-300 text-slate-800">
    //  <section className="max-w-7xl mx-auto px-6 md:px-12 py-10 space-y-10 relative">
    <section className="relative text-center py-16 px-4 sm:py-24 sm:px-8 rounded-lg overflow-hidden">
      <WatermarkBackground altText={COMP_MOTTO} />
      <TopBar />

      {/* Foreground Content */}
      <div className="relative z-10 min-w-9xl mx-auto">
        <WatermarkBackground altText={COMP_MOTTO} />
        {/* Decorative Blurs */}
        <div className="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-sky-200/10 blur-xl animate-float"></div>
        <div className="absolute bottom-10 -right-10 w-60 h-60 rounded-full bg-sky-400/10 blur-xl animate-float-delay"></div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight tracking-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-400">{COMP_NAME}</span>
        </h1>
        <p className="text-xl sm:text-2xl mb-8 max-w-2xl mx-auto text-slate-600 font-medium">{COMP_MOTTO}</p>
        <LeftIcon/>
        <button onClick={() => scrollToSection(contactRef)} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md shadow-sm transition font-medium">
          Contact Us
        </button>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 sm:h-24" aria-hidden="true">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28..." className="fill-current text-sky-400/70"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69..." className="fill-current text-sky-400/50"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83..." className="fill-current text-sky-400/30"></path>
        </svg>
      </div>
    </section>
  );
}
