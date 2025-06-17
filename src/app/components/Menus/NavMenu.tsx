import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { COMP_SHORT } from "@/app/utils/constants";

type NavigationMenuProps = {
  scrollToSection: (ref: React.RefObject<HTMLDivElement>) => void;
  refs: {
    headRef: React.RefObject<HTMLDivElement>;
    specialistsRef: React.RefObject<HTMLDivElement>;
    pricingRef: React.RefObject<HTMLDivElement>;
    projectsRef: React.RefObject<HTMLDivElement>;
    contactRef: React.RefObject<HTMLDivElement>;
    techRef?: React.RefObject<HTMLDivElement>;
    servicesRef?: React.RefObject<HTMLDivElement>;
    invoiceRef?: React.RefObject<HTMLDivElement>;
  };
};

const NavigationMenu: React.FC<NavigationMenuProps> = ({ scrollToSection, refs }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (ref: React.RefObject<HTMLDivElement>) => {
    scrollToSection(ref);
    setIsOpen(false);
  };

  return (
    <nav className="bg-yellow-400 text-black fixed w-full max-w-[85%] sm:max-w-[80%] md:max-w-[75%] lg:max-w-[65%] xl:max-w-[1200px] left-1/2 -translate-x-1/2 top-0 z-50 px-4 rounded-lg">
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
              <button onClick={() => handleNavClick(refs.specialistsRef)} className="hover:underline">
                Services
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick(refs.pricingRef)} className="hover:underline">
                Pricing
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick(refs.projectsRef)} className="hover:underline">
                Projects
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick(refs.contactRef)} className="hover:underline">
                Contact
              </button>
            </li>

            <li>
              <button onClick={() => handleNavClick(refs.invoiceRef!)} className="hover:underline">
                Newsletter
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-blue-700 px-4 py-2 space-y-2">
          <button onClick={() => handleNavClick(refs.headRef)} className="block w-full text-left hover:underline">
            Home
          </button>
          <button onClick={() => handleNavClick(refs.specialistsRef)} className="block w-full text-left hover:underline">
            Specialists
          </button>
          <button onClick={() => handleNavClick(refs.pricingRef)} className="block w-full text-left hover:underline">
            Pricing
          </button>
          <button onClick={() => handleNavClick(refs.projectsRef)} className="block w-full text-left hover:underline">
            Projects
          </button>
          <button onClick={() => handleNavClick(refs.contactRef)} className="block w-full text-left hover:underline">
            Contact
          </button>
        </div>
      )}
    </nav>
  );
};

export default NavigationMenu;
