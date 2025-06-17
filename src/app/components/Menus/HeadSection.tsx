import { COMP_NAME } from "@/app/utils/constants";
import { BUTTONS } from "@/app/utils/stylesData";
import { RefObject } from "react";

interface HeadSectionProps {
  scrollToSection: (ref: RefObject<HTMLDivElement>) => void;
  contactRef: RefObject<HTMLDivElement>;
}

export function HeadSection({ scrollToSection, contactRef }: HeadSectionProps) {
  return (
    <section className="text-center py-16 px-4 sm:py-20 sm:px-8 bg-yellow-400 text-black rounded-lg">
      <h1 className="text-2xl sm:text-2xl md:text-5xl font-bold mb-4 leading-snug">{COMP_NAME}</h1>
      <p className="text-lg sm:text-xl mb-4">Your trusted partner in Africa-China Tourism solutions.</p>
      {/* <button className={ButtonTop} onClick={() => scrollToSection(contactRef)}>
        Contact Us!
      </button>

      <button className={smallButton} onClick={() => scrollToSection(contactRef)}>
        Contact Us!
      </button> */}

      <button className={BUTTONS.topButton} onClick={() => scrollToSection(contactRef)}>
        Contact Us!
      </button>
    </section>
  );
}
