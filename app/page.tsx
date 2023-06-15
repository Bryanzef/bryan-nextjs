import AboutSection from "./pages/About";
import HeaderSection from "./pages/Header";
import HomeSection from "./pages/Home";

export default async function Home() {
  return (
    <>
      <HeaderSection />
      <HomeSection />
      <AboutSection />
    </>
  );
}
