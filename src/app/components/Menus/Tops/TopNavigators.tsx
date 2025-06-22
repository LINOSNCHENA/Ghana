import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { COMP_ICON, COMP_SHORT } from "@/app/utils/constants";
import Image from "next/image";

type NavigationMenuProps = {
  scrollToSection: (ref: React.RefObject<HTMLDivElement>) => void;
  refs: {
    headRef: React.RefObject<HTMLDivElement>;
    homeRef?: React.RefObject<HTMLDivElement>;
    fotoRef: React.RefObject<HTMLDivElement>;
    servicesRef?: React.RefObject<HTMLDivElement>;
    miningRef?: React.RefObject<HTMLDivElement>;
    founderRef?: React.RefObject<HTMLDivElement>;
    educationRef?: React.RefObject<HTMLDivElement>;
    logisticsRef?: React.RefObject<HTMLDivElement>;
    reviewsRef?: React.RefObject<HTMLDivElement>;
    tourismRef?: React.RefObject<HTMLDivElement>;
    contactsRef?: React.RefObject<HTMLDivElement>;
    contactRef?: React.RefObject<HTMLDivElement>;
  };
};

const NavigationMenu: React.FC<NavigationMenuProps> = ({ scrollToSection, refs }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (ref: React.RefObject<HTMLDivElement>) => {
    scrollToSection(ref);
    setIsOpen(false);
  };

  return (
    <nav className="bg-blue-100 text-black fixed w-[92%] sm:w-[90%] md:w-[85%] lg:w-[80%] xl:w-[1200px] left-1/2 -translate-x-1/2 top-6 z-50 px-4 py-2 rounded-xl shadow-md">
      <div className="flex items-center justify-between">
        <Image
          src={COMP_ICON}
          alt="Company Logo"
          width={20}
          height={20}
          className="w-4 h-4 sm:w-5 sm:h-5 object-contain"
          priority // Ensures fast LCP
        />

        <div className="text-sm sm:text-base md:text-sm lg:text-sm font-semibold tracking-wide">{COMP_SHORT}</div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-black focus:outline-none" aria-label="Toggle menu">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-5 lg:gap-6 text-sm lg:text-xs font-medium">
          <li>
            <button onClick={() => handleNavClick(refs.headRef)} className="hover:underline">
              Home
            </button>
          </li>
          <li>
            <button onClick={() => handleNavClick(refs.servicesRef!)} className="hover:underline">
              Services
            </button>
          </li>
          <li>
            <button onClick={() => handleNavClick(refs.logisticsRef!)} className="hover:underline">
              Logistics
            </button>
          </li>
          <li>
            <button onClick={() => handleNavClick(refs.miningRef!)} className="hover:underline">
              Mining
            </button>
          </li>
          <li>
            <button onClick={() => handleNavClick(refs.tourismRef!)} className="hover:underline">
              Tourism
            </button>
          </li>
          <li>
            <button onClick={() => handleNavClick(refs.educationRef!)} className="hover:underline">
              Education
            </button>
          </li>

          <li>
            <button onClick={() => handleNavClick(refs.fotoRef!)} className="hover:underline">
              Galary
            </button>
          </li>

          <li>
            <button onClick={() => handleNavClick(refs.founderRef!)} className="hover:underline">
              Founder
            </button>
          </li>

          <li>
            <button onClick={() => handleNavClick(refs.reviewsRef!)} className="hover:underline">
              Reviews
            </button>
          </li>
          <li>
            <button onClick={() => handleNavClick(refs.contactsRef!)} className="hover:underline">
              Contact
            </button>
          </li>
        </ul>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden mt-3 space-y-2 bg-blue-100 rounded-lg px-4 py-3 shadow-inner text-sm font-medium">
          <button onClick={() => handleNavClick(refs.headRef)} className="block w-full text-left hover:underline">
            Home
          </button>
          <button onClick={() => handleNavClick(refs.servicesRef!)} className="block w-full text-left hover:underline">
            Services
          </button>
          <button onClick={() => handleNavClick(refs.servicesRef!)} className="block w-full text-left hover:underline">
            Tourism
          </button>
          <button onClick={() => handleNavClick(refs.tourismRef!)} className="block w-full text-left hover:underline">
            Logistics
          </button>
          <button onClick={() => handleNavClick(refs.educationRef!)} className="block w-full text-left hover:underline">
            Education
          </button>
          <button onClick={() => handleNavClick(refs.servicesRef!)} className="block w-full text-left hover:underline">
            Services
          </button>
          <button onClick={() => handleNavClick(refs.founderRef!)} className="block w-full text-left hover:underline">
            Founder
          </button>
          <button onClick={() => handleNavClick(refs.contactsRef!)} className="block w-full text-left hover:underline">
            Contact
          </button>
        </div>
      )}
    </nav>
  );
};

export default NavigationMenu;
