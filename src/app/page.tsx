// "use client";

"use client";

import { useRef } from "react";
import NavigationMenu from "./components/Menus/NavMenu";
import { SocialSection } from "./components/Contacts/FooterMedia";
import { HeadSection } from "./components/Menus/HeadSection";
import { COLOR_BLACK_METALIC, COLOR_BLUE_LIGHT, menuStyles } from "./utils/stylesData";
import ServicesSection from "./components/Departmt/ServicesDept";
import { AcademicAchievement } from "./components/Multimedia/AcademicAchieved";
import { BusinessOpportunities } from "./components/Multimedia/BusinessProspects";
import CeoProfileWithPhoto from "./components/Multimedia/BiographyOfCEO";
import { GalaryFotos } from "./components/Peoples/GalaryFotos";
import { CompanySlides } from "./components/Peoples/CompanySlides";
import LifeInChina from "./components/Peoples/LiveInChina";

const App: React.FC = () => {
  const headRef = useRef<HTMLDivElement>(null!);
  const specialistsRef = useRef<HTMLDivElement>(null!);
  const projectsRef = useRef<HTMLDivElement>(null!);
  const contactRef = useRef<HTMLDivElement>(null!);
  const fotoRef = useRef<HTMLDivElement>(null!);
  const servicesRef = useRef<HTMLDivElement>(null!);
  const miningRef = useRef<HTMLDivElement>(null!);
  const founderRef = useRef<HTMLDivElement>(null!);
  const academicRef = useRef<HTMLDivElement>(null!);
  const businessRef = useRef<HTMLDivElement>(null!);

  const chinaRef = useRef<HTMLDivElement>(null!);


  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      style={{
        maxWidth: 1400,
        margin: "auto auto 0.5rem auto", // Adds 2rem bottom margin
        padding: "0 1rem 2rem 1rem", // Optional: also adds bottom padding
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        borderRadius: "8px",
        background: COLOR_BLACK_METALIC,
      }}
    >
      <NavigationMenu
        scrollToSection={scrollToSection}
        refs={{
          headRef,
          specialistsRef,
          projectsRef,
          contactRef,
          fotoRef,
          servicesRef,
          miningRef,
          founderRef,
          academicRef,
          businessRef,
          chinaRef,
        }}
      />

      <div
        ref={headRef}
        style={{
          marginBottom: 40,
          minHeight: "50vh",
          background: COLOR_BLUE_LIGHT,
          borderRadius: "8px",
        }}
      >
        <HeadSection scrollToSection={scrollToSection} contactRef={contactRef} />
        {/* <NewsletterVisits /> */}
      </div>

      <div ref={businessRef} style={menuStyles}>
        <BusinessOpportunities />
      </div>

      <div ref={servicesRef} style={menuStyles}>
        <ServicesSection />
      </div>

      <div ref={fotoRef} style={menuStyles}>
        <GalaryFotos />
      </div>

      <div ref={miningRef} style={menuStyles}>
        <CompanySlides />
      </div>

      <div ref={founderRef} style={menuStyles}>
        <CeoProfileWithPhoto />
      </div>

      <div ref={academicRef} style={menuStyles}>
        <AcademicAchievement />
      </div>
      <div ref={chinaRef} style={menuStyles}>
          < LifeInChina/>
      </div>

      <SocialSection />
    </div>
  );
};

export default App;
