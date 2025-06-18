import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { COMP_SHORT } from "@/app/utils/constants";

type NavigationMenuProps = {
  scrollToSection: (ref: React.RefObject<HTMLDivElement>) => void;

  refs: {
    headRef: React.RefObject<HTMLDivElement>;
    homeRef?: React.RefObject<HTMLDivElement>;
    projectsRef?: React.RefObject<HTMLDivElement>;

    fotoRef: React.RefObject<HTMLDivElement>;
    servicesRef?: React.RefObject<HTMLDivElement>;
    miningRef?: React.RefObject<HTMLDivElement>;
    founderRef?: React.RefObject<HTMLDivElement>;
    educationRef?: React.RefObject<HTMLDivElement>;
    logisticsRef?: React.RefObject<HTMLDivElement>;

    chinaRef?: React.RefObject<HTMLDivElement>;
    reviewsRef?: React.RefObject<HTMLDivElement>;
    tourismRef?: React.RefObject<HTMLDivElement>;
    offeringsRef?: React.RefObject<HTMLDivElement>;

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
    <nav className="bg-blue-200 text-black fixed w-full max-w-[85%] sm:max-w-[80%] md:max-w-[75%] lg:max-w-[65%] xl:max-w-[1200px] left-1/2 -translate-x-1/2 top-0 z-50 px-4 rounded-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="text-sm sm:text-lg md:text-xl lg:text-xl font-bold">{COMP_SHORT}</div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none" aria-label="Toggle menu">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6">
            <li>
              <button onClick={() => handleNavClick(refs.headRef)} className="hover:underline">
                Home
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick(refs.offeringsRef!)} className="hover:underline">
                Offerings
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick(refs.logisticsRef!)} className="hover:underline">
                Logistics
              </button>
            </li>

            <li>
              <button onClick={() => handleNavClick(refs.miningRef!)} className="hover:underline">
                Mining services
              </button>
            </li>

            <li>
              <button onClick={() => handleNavClick(refs.tourismRef!)} className="hover:underline">
                Tourism services
              </button>
            </li>

            <li>
              <button onClick={() => handleNavClick(refs.educationRef!)} className="hover:underline">
                Education Services
              </button>
            </li>

            <li>
              <button onClick={() => handleNavClick(refs.founderRef!)} className="hover:underline">
                Founder CEO
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
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-blue-200 px-4 py-2 space-y-2">
          <button onClick={() => handleNavClick(refs.headRef)} className="block w-full text-left hover:underline">
            Home
          </button>
          <button onClick={() => handleNavClick(refs.homeRef!)} className="block w-full text-left hover:underline">
            Specialists
          </button>
          <button onClick={() => handleNavClick(refs.educationRef!)} className="block w-full text-left hover:underline">
            Overview
          </button>
          <button onClick={() => handleNavClick(refs.projectsRef!)} className="block w-full text-left hover:underline">
            Projects
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
