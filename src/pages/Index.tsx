import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SectionPenal from "@/components/SectionPenal";
import SectionDelitos from "@/components/SectionDelitos";
import SectionEmpresas from "@/components/SectionEmpresas";
import SectionEquipo from "@/components/SectionEquipo";
import SectionContacto from "@/components/SectionContacto";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <SectionPenal />
        <SectionDelitos />
        <SectionEmpresas />
        <SectionEquipo />
        <SectionContacto />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Index;
