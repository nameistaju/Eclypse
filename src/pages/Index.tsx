
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ContentGrid from "../components/ContentGrid";
import ProductHighlight from "../components/ProductHighlight";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <ContentGrid />
      <ProductHighlight />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
