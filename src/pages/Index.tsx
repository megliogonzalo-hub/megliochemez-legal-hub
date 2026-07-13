import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FranjaInstitucional from "@/components/FranjaInstitucional";
import SectionEstudio from "@/components/SectionEstudio";
import SectionAreas from "@/components/SectionAreas";
import SectionContacto from "@/components/SectionContacto";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <FranjaInstitucional />
        <SectionEstudio />
        <SectionAreas />
        <SectionContacto />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Index;
