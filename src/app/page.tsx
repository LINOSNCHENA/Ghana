// "use client";

"use client";
import { useRef } from "react";
// import { ContactSection } from "./components/Contacts/ContactDept";
import NavigationMenu from "./components/Menus/NavMenu";
import { SocialSection } from "./components/Contacts/FooterMedia";
// import { PricingSection } from "./components/Departmt/PricingDept";
// import { ServicesSection } from "./components/Departmt/ServicesDept";
import { HeadSection } from "./components/Menus/HeadSection";
// import { SpecialistsSection } from "./components/Peoples/SpecialistDept";
// import { TechStackSection } from "./components/Peoples/TectStack";
// import ProjectSection from "./components/Peoples/TopProjects";
import NewsletterVisits from "./components/Statistics/AddVisitations";
import NewsletterSubscription from "./components/Statistics/NewsLetter";
import { COLOR_BLACK_METALIC, COLOR_GREEN_LIGHT, menuStyles } from "./utils/stylesData";

const App: React.FC = () => {
  const headRef = useRef<HTMLDivElement>(null!);
  const specialistsRef = useRef<HTMLDivElement>(null!);
  const pricingRef = useRef<HTMLDivElement>(null!);
  const projectsRef = useRef<HTMLDivElement>(null!);
  const contactRef = useRef<HTMLDivElement>(null!);
  const techRef = useRef<HTMLDivElement>(null!);
  const servicesRef = useRef<HTMLDivElement>(null!);
  const invoiceRef = useRef<HTMLDivElement>(null!);

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
          pricingRef,
          projectsRef,
          contactRef,
          techRef,
          servicesRef,
          invoiceRef,
        }}
      />

      <div
        ref={headRef}
        style={{
          marginBottom: 40,
          minHeight: "50vh",
          background: COLOR_GREEN_LIGHT,
          borderRadius: "8px",
        }}
      >
        <HeadSection scrollToSection={scrollToSection} contactRef={contactRef} />
        <NewsletterVisits />
      </div>

      {/* <div ref={specialistsRef} style={menuStyles}>
        <SpecialistsSection />
      </div> */}

      {/* <div ref={pricingRef} style={menuStyles}>
        <PricingSection />
      </div>

      <div ref={servicesRef} style={menuStyles}>
        <ServicesSection />
      </div>

      <div ref={techRef} style={menuStyles}>
        <TechStackSection />
      </div>

      <div ref={projectsRef} style={menuStyles}>
        <ProjectSection />
      </div>

      <div ref={contactRef} style={menuStyles}>
        <ContactSection />
      </div> */}

      <div ref={invoiceRef} style={menuStyles}>
        {/* <InvoicesSection /> */}
        <NewsletterSubscription />
        {/* <VisitsList /> */}
      </div>

      <SocialSection />
    </div>
  );
};

export default App;
