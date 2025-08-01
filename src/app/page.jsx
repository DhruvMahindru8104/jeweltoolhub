import Navbar from "@/components/mycomponents/Navbar";
import HeroSection from "@/components/mycomponents/Hero";
import FeaturesSection from "@/components/mycomponents/Feature";
import MasonryGallery from "@/components/mycomponents/gallery";
import MetricsSection from "@/components/mycomponents/metrics";
import Footer from "@/components/mycomponents/Footer";
export default function Home() {
  return (
   <>
   <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 space-y-16 ">
    <Navbar/>
    <HeroSection/>
    <FeaturesSection/>
    <MasonryGallery/>
    <MetricsSection/>
    <Footer/>
   </div>


   </>
  );
}
