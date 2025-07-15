import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { COMP_ICON, COMP_SHORT } from "@/app/utils/constants";
import Image from "next/image";
import Link from "next/link";

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
    <nav className="bg-gray-800 dark:bg-gray-900 text-white fixed w-[92%] sm:w-[90%] md:w-[85%] lg:w-[80%] xl:w-[1200px] left-1/2 -translate-x-1/2 top-6 z-50 px-4 py-2 rounded-xl shadow-md border border-gray-700">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image src={COMP_ICON} alt="Company Logo" width={20} height={20} className="w-5 h-5 object-contain" priority />
          <span className="text-sm font-semibold hidden sm:inline text-gray-100">{COMP_SHORT}</span>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <Link href="/downloads" className="text-gray-300 hover:text-white transition-colors text-sm">
            Downloads
          </Link>

          {/* Desktop Menu */}
          <ul className="flex gap-5 lg:gap-6 text-sm font-medium">
            <li>
              <button onClick={() => handleNavClick(refs.headRef)} className="text-gray-300 hover:text-white transition-colors">
                Home
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick(refs.servicesRef!)} className="text-gray-300 hover:text-white transition-colors">
                Services
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick(refs.logisticsRef!)} className="text-gray-300 hover:text-white transition-colors">
                Logistics
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick(refs.miningRef!)} className="text-gray-300 hover:text-white transition-colors">
                Mining
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick(refs.tourismRef!)} className="text-gray-300 hover:text-white transition-colors">
                Tourism
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick(refs.educationRef!)} className="text-gray-300 hover:text-white transition-colors">
                Education
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick(refs.fotoRef!)} className="text-gray-300 hover:text-white transition-colors">
                Gallery
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick(refs.founderRef!)} className="text-gray-300 hover:text-white transition-colors">
                Founder
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick(refs.reviewsRef!)} className="text-gray-300 hover:text-white transition-colors">
                Reviews
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick(refs.contactsRef!)} className="text-gray-300 hover:text-white transition-colors">
                Contact
              </button>
            </li>
          </ul>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-white focus:outline-none transition-colors p-1" aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden mt-3 space-y-3 bg-gray-700 dark:bg-gray-800 rounded-lg px-4 py-3 shadow-inner">
          <button onClick={() => handleNavClick(refs.headRef)} className="block w-full text-left text-gray-300 hover:text-white transition-colors py-1">
            Home
          </button>
          <button onClick={() => handleNavClick(refs.servicesRef!)} className="block w-full text-left text-gray-300 hover:text-white transition-colors py-1">
            Services
          </button>
          <button onClick={() => handleNavClick(refs.logisticsRef!)} className="block w-full text-left text-gray-300 hover:text-white transition-colors py-1">
            Logistics
          </button>
          <button onClick={() => handleNavClick(refs.miningRef!)} className="block w-full text-left text-gray-300 hover:text-white transition-colors py-1">
            Mining
          </button>
          <button onClick={() => handleNavClick(refs.tourismRef!)} className="block w-full text-left text-gray-300 hover:text-white transition-colors py-1">
            Tourism
          </button>
          <button onClick={() => handleNavClick(refs.educationRef!)} className="block w-full text-left text-gray-300 hover:text-white transition-colors py-1">
            Education
          </button>
          <button onClick={() => handleNavClick(refs.fotoRef!)} className="block w-full text-left text-gray-300 hover:text-white transition-colors py-1">
            Gallery
          </button>
          <button onClick={() => handleNavClick(refs.founderRef!)} className="block w-full text-left text-gray-300 hover:text-white transition-colors py-1">
            Founder
          </button>
          <button onClick={() => handleNavClick(refs.contactsRef!)} className="block w-full text-left text-gray-300 hover:text-white transition-colors py-1">
            Contact
          </button>
          <Link href="/downloads" className="block w-full text-left text-gray-300 hover:text-white transition-colors py-1">
            Downloads
          </Link>
        </div>
      )}
    </nav>
  );
};

export default NavigationMenu;
