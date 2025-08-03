import HeroSection from "@/components/mycomponents/Hero";
import FeaturesSection from "@/components/mycomponents/Feature";
import MasonryGallery from "@/components/mycomponents/gallery";
import MetricsSection from "@/components/mycomponents/metrics";



export const metadata = {
  title: "JewelToolHub | Goldsmith Tools & Jewellery Equipment in Amritsar",
  description: "Premium goldsmith tools, jewellery boxes, ring boxes, trays & more. Direct delivery to your shop in Amritsar.",
  keywords: ["goldsmith tools", "jewellery equipment", "Amritsar", "ring box", "jewellery box", "tops box", "trays", "chain box", "direct delivery to shop"],
  openGraph: {
    title: "JewelToolHub | Goldsmith Tools & Jewellery Equipment in Amritsar",
    description: "Buy premium goldsmith tools and jewellery accessories with direct delivery to your shop in Amritsar.",
    url: "https://jeweltoolhub.vercel.app",
    siteName: "JewelToolHub",
    images: [
      {
        url: "https://jeweltoolhub.vercel.app/Logobhai.png",
        width: 1200,
        height: 630,
        alt: "Goldsmith Tools in Amritsar - JewelToolHub",
      }
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function Home() {

  return (
   <>
   <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 space-y-16 ">
    <HeroSection/>
    <FeaturesSection/>
    <MasonryGallery/>
    <MetricsSection/>
    
   </div>


   </>
  );
}
