import About from "/src/components/layout/About";
import Contact from "/src/components/layout/Contact";
import Hero from "/src/components/layout/Hero";
import HomeMenu from "/src/components/layout/HomeMenu";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu />
      <About />
      <Contact />
    </>
  );
}