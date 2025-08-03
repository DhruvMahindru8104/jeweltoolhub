import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Playfair_Display } from "next/font/google";
import Navbar from "@/components/mycomponents/Navbar";
import Footer from "@/components/mycomponents/Footer";

// Load Playfair Display
const playfair = Playfair_Display({
  weight: ["400", "700"], // Regular & Bold
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "JewelToolHub | Goldsmith Tools & Jewellery Equipment in Amritsar",
  description: "Goldsmith tools, jewellery boxes, and accessories with direct delivery to your shop in Amritsar.",
       verification: {
    google: "NBcM0KC7LzlFvKgNFic_yLD1FHFResize2ExM6_15Mc",
  },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "GoldSmithTools",
      name: "JewelToolHub",
      image: "https://jeweltoolhub.vercel.app/Logobhai.png",
      url: "https://jeweltoolhub.vercel.app",
      telephone: "+91-6239535324",
   
      address: {
        "@type": "PostalAddress",
        streetAddress: "828,katra mohar singh",
        addressLocality: "Amritsar",
        addressRegion: "Punjab",
        postalCode: "143001",
        addressCountry: "IN",
      },
      sameAs: [
        "https://www.instagram.com/jeweltoolhub"
      ]
    }),
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${playfair.className}  antialiased`}
      >
           <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 space-y-16 ">
        <Navbar />
           </div>
        {children}
        <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 space-y-16 ">
        <Footer/>

        </div>
      </body>
    </html>
  );
}
