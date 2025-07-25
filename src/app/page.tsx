"use client";

import { useRef } from "react";
import { WEB_MASTER } from "./utils/constants";
import ReviewSection from "./components/Statistics/ReviewPage";
import NavigationMenu from "./components/Menus/Tops/TopNavigators";
import { SocialSection } from "./components/Menus/FooterMedia";
import { HeadSection } from "./components/Menus/Tops/HeadSection";
import { COLOR_BLACK_METALIC, COLOR_BLUE_LIGHT, menuStyles } from "./utils/stylesData";

import SendEmailForm from "./components/Emails/SendEmailForm";
import CeoProfileWithPhoto from "./components/Gallary/CEOBiography";
import { AcademicAchievement } from "./components/Gallary/CEOEducation";
import { GalaryFotos } from "./components/Gallary/GalaryFotos";
import { CompanySlides } from "./components/Gallary/GalaxySlides";
import { BusinessOpportunities } from "./components/LandingPages/BusinessOverviews";
import LogisticsSection from "./components/LandingPages/LogisticsServices";
import MiningServices from "./components/LandingPages/MiningOpportunities";
import ServicesSection from "./components/LandingPages/ServicesDept";
import TourismServices from "./components/LandingPages/TourismOpportunities";
import LifeInChina from "./education/page";

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
      const element = ref.current;
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div style={{ position: "relative" }}>
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

        <div ref={logisticsRef} style={menuStyles}>
          <LogisticsSection />
        </div>

        <div ref={miningRef} style={menuStyles}>
          <MiningServices />
        </div>

        <div ref={tourismRef} style={menuStyles}>
          <TourismServices />
        </div>

        <div ref={educationRef} style={menuStyles}>
          <LifeInChina />
        </div>

        <div ref={founderRef} style={menuStyles}>
          <CeoProfileWithPhoto />
        </div>

        <div style={menuStyles}>
          <AcademicAchievement />
        </div>

        <div ref={reviewsRef} style={menuStyles}>
          <ReviewSection />
        </div>

        <div ref={contactsRef} style={menuStyles}>
          <SendEmailForm />
        </div>

        <div style={menuStyles}>
          <SocialSection />
        </div>

        <div className="w-full md:w-3/4 lg:w-1/2">
          <span className="text-xs md:text-sm italic text-purple-600 float-right">{WEB_MASTER}</span>
        </div>
      </div>
    </div>
  );
};

export default App;
