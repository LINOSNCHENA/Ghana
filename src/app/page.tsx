"use client";

import Image from "next/image";
import { useRef } from "react";
import NavigationMenu from "./components/Menus/NavMenu";
import { SocialSection } from "./components/Contacts/FooterMedia";
import { HeadSection } from "./components/Menus/HeadSection";
import { COLOR_BLACK_METALIC, COLOR_BLUE_LIGHT, menuStyles } from "./utils/stylesData";
import ServicesSection from "./components/Departmt/ServicesDept";
import { AcademicAchievement } from "./components/Multimedia/CEOEducation";
import { BusinessOpportunities } from "./components/Departmt/BusinessProspects";
import CeoProfileWithPhoto from "./components/Multimedia/CEOBiography";
import { GalaryFotos } from "./components/Multimedia/GalaryFotos";
import { CompanySlides } from "./components/Multimedia/CompanySlides";
import LifeInChina from "./components/Departmt/EducationChina";
import { COMP_LOGO_BIG } from "./utils/constants";
import ReviewSection from "./components/Departmt/ReviewPage";
import MiningServices from "./components/Departmt/MiningOpportunities";
import TourismServices from "./components/Departmt/TourismOpportunities";

const App: React.FC = () => {
  const headRef = useRef<HTMLDivElement>(null!);
  const homeRef = useRef<HTMLDivElement>(null!);
  const fotoRef = useRef<HTMLDivElement>(null!);
  const servicesRef = useRef<HTMLDivElement>(null!);  

  const miningRef = useRef<HTMLDivElement>(null!);
  const educationRef = useRef<HTMLDivElement>(null!);
  const tourismRef = useRef<HTMLDivElement>(null!);
  const logisticsRef = useRef<HTMLDivElement>(null!);

  const founderRef = useRef<HTMLDivElement>(null!);
  const reviewsRef = useRef<HTMLDivElement>(null!);
  const contactsRef = useRef<HTMLDivElement>(null!);
  const contactRef = useRef<HTMLDivElement>(null!);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div style={{ position: "relative" }}>
      {/* Watermark background - Fixed issues here */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 0,
          opacity: 0.2, // Reduced opacity for better visibility
          pointerEvents: "none",
          background: COLOR_BLACK_METALIC,
        }}
      >
        <Image
          src={COMP_LOGO_BIG}
          alt="Watermark"
          fill
          style={{
            objectFit: "contain",
            objectPosition: "center",
          }}
          priority
          quality={30} 
          onError={(e) => console.error("Watermark image failed to load", e)}
        />


      </div>

      {/* Main App Content */}
      <div
        style={{
          maxWidth: 1400,
          margin: "auto auto 0.5rem auto",
          padding: "0 1rem 2rem 1rem",
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          borderRadius: "8px",
          background: COLOR_BLACK_METALIC,
          position: "relative",
          zIndex: 1,
        }}
      >
        <NavigationMenu
          scrollToSection={scrollToSection}
          refs={{
            headRef,
            homeRef,
            fotoRef,
            servicesRef,        

            miningRef,
            educationRef,
            logisticsRef,
            tourismRef,

            founderRef,
            reviewsRef,
            contactsRef,
            contactRef,
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
          <HeadSection scrollToSection={scrollToSection} contactRef={contactsRef} />
        </div>

        <div ref={homeRef} style={menuStyles}>
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

        <div ref={educationRef} style={menuStyles}>
          <AcademicAchievement />
        </div>

        <div ref={educationRef} style={menuStyles}>
          <LifeInChina />
        </div>

        <div ref={miningRef} style={menuStyles}>
          <MiningServices />
        </div>

        <div ref={tourismRef} style={menuStyles}>
          <TourismServices />
        </div>

        <div ref={reviewsRef} style={menuStyles}>
          <ReviewSection />
        </div>

        <div ref={contactsRef} style={menuStyles}>
          <SocialSection />
        </div>

        {/* <SocialSection /> */}
      </div>
    </div>
  );
};

export default App;
