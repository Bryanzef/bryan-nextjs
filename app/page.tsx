import AboutSection from "./pages/About";
import ContactSection from "./pages/Contact";
import FooterSection from "./pages/Footer";
import HeaderSection from "./pages/Header";
import HomeSection from "./pages/Home";
import ProjectSection from "./pages/Projects";
import SkillsSection from "./pages/Skills";

export default async function Home() {
  return (
    <>
      <HeaderSection />
      <HomeSection />
      <AboutSection />
      <SkillsSection />
      <ProjectSection />
      <ContactSection />
      <FooterSection />
    </>
  );
}
