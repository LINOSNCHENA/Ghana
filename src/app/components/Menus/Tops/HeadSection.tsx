import { COMP_MOTTO, COMP_NAME } from "@/app/utils/constants";
import { RefObject } from "react";
import WatermarkBackground from "../WaterMarks";
import TopBar from "./TopperBar";
import LeftIcon from "./LogoLeft";

interface HeadSectionProps {
  scrollToSection: (ref: RefObject<HTMLDivElement>) => void;
  contactRef: RefObject<HTMLDivElement>;
}

export function HeadSection({ scrollToSection, contactRef }: HeadSectionProps) {
  return (
    <section className="relative text-center py-16 px-4 sm:py-24 sm:px-8 rounded-lg overflow-hidden">
      <TopBar />
      {/* Foreground Content */}
      <div className="relative z-10 min-w-9xl mx-auto">
        <WatermarkBackground altText={COMP_MOTTO} />
        {/* Decorative Blurs */}
        <div className="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-sky-200/10 blur-xl animate-float"></div>
        <div className="absolute bottom-10 -right-10 w-60 h-60 rounded-full bg-sky-400/10 blur-xl animate-float-delay"></div>
        <h1 className="text-4xl sm:text-3xl md:text-5xl font-bold mb-6 leading-tight tracking-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-400">{COMP_NAME}</span>
        </h1>
        <p className="text-base sm:text-2xl mb-8 max-w-xl mx-auto text-slate-600 font-medium">{COMP_MOTTO}</p>
        <LeftIcon />
        <button onClick={() => scrollToSection(contactRef)} className="hidden">
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
