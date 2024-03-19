import { useRef } from "react";

import HeroSection from "./HeroSection";
import AboutMe from "./AboutMe";
import Technologies from "./Technologies";
import Projects from "./Projects";
import ContactMe from "./ContactMe";
const App = () => {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <HeroSection
        scrollToRef={scrollToRef}
        scrollToTop={scrollToTop}
        aboutRef={aboutRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
      />
      <AboutMe scrollToRef={scrollToRef} aboutRef={aboutRef} />
      <Technologies />
      <Projects scrollToRef={scrollToRef} projectsRef={projectsRef} />
      <ContactMe scrollToRef={scrollToRef} contactRef={contactRef} />
    </>
  );
};

export default App;
