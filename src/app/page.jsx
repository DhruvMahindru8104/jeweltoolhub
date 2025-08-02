'use client'
import HeroSection from "@/components/mycomponents/Hero";
import FeaturesSection from "@/components/mycomponents/Feature";
import MasonryGallery from "@/components/mycomponents/gallery";
import MetricsSection from "@/components/mycomponents/metrics";
import { useEffect } from "react";
import { client } from "@/lib/sanity";
export default function Home() {
  useEffect(() => {
  client.fetch(`*[_type == "tools"]{name, category}`).then((res) => {
    console.log("Sanity data:", res)
  }).catch((err) => {
    console.error("Sanity error:", err)
  })
}, [])

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
