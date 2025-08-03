import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { client } from "@/lib/sanity";
export const metadata = {
  title: "Ring Boxes for Jewellers in Amritsar | JewelToolHub",
  description: "Elegant ring boxes for jewellery shops in Amritsar. Direct shop delivery available.",
  keywords: ["ring box", "jewellery ring box", "Amritsar", "direct shop delivery"],
  openGraph: {
    title: "Ring Boxes in Amritsar | JewelToolHub",
    description: "Buy premium ring boxes for your jewellery shop with direct delivery in Amritsar.",
    url: "https://jeweltoolhub.vercel.app/ring-boxes",
    siteName: "JewelToolHub",
    images: [
      {
        url: "https://jeweltoolhub.vercel.app/Logobhai.png",
        width: 1200,
        height: 630,
        alt: "Ring Box - JewelToolHub",
      }
    ],
    locale: "en_IN",
    type: "website",
  },
};

// ✅ Server-side data fetching with ISR for Ring Boxes
async function getRingBoxesData() {
  const query = `
    *[_type == "ringBoxes"]{
      name,
      category,
      description,
      "imageUrl": image.asset->url
    }
  `;
  return await client.fetch(query, {}, { next: { revalidate: 60 } });
}

// ✅ Server Component for Product List
async function ProductsList() {
  const products = await getRingBoxesData();

  if (products.length === 0) {
    return <p className="text-gray-500 text-lg">No products found</p>;
  }

  return products.map((product, index) => {
    const whatsappMessage = `Hello, I am interested in this product:
  
*Product:* ${product.name}
*Category:* ${product.category}
*Description:* ${product.description}
*Image:* ${product.imageUrl}`;

    const whatsappLink = `https://wa.me/916239535324?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    return (
      <div
        key={index}
        className="flex w-80 flex-col justify-center bg-white rounded-2xl shadow-xl shadow-gray-400/20"
      >
        {/* Product Image */}
        <div className="relative aspect-square w-80 rounded-t-2xl overflow-hidden">
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            className="object-cover object-center"
          />
        </div>

        {/* Card Content */}
        <div className="p-6 flex flex-col gap-4">
          <div>
            <small className="text-gray-900 text-xs">{product.category}</small>
            <h1 className="text-2xl font-medium text-gray-700 pb-2">
              {product.name}
            </h1>
            <p className="text-gray-500 leading-6">{product.description}</p>
          </div>

          {/* Order Now Button */}
          <Link
            href={whatsappLink}
            target="_blank"
            className="w-full py-3 rounded-lg bg-black hover:bg-gray-900 text-white text-center font-semibold transition-all duration-300"
          >
            Order Now
          </Link>
        </div>
      </div>
    );
  });
}

// ✅ Page Component with Suspense
export default function Page() {
  return (
    <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 py-4 md:py-20">
      <div className="flex flex-wrap justify-center gap-8">
        <Suspense
          fallback={Array(3)
            .fill()
            .map((_, index) => (
              <div
                key={index}
                className="flex w-80 flex-col justify-center bg-white rounded-2xl shadow-xl shadow-gray-400/20 animate-pulse"
              >
                <div className="w-80 h-48 bg-gray-200 rounded-t-2xl"></div>
                <div className="p-6 space-y-3">
                  <div className="w-20 h-3 bg-gray-200 rounded"></div>
                  <div className="w-40 h-5 bg-gray-200 rounded"></div>
                  <div className="w-full h-12 bg-gray-200 rounded"></div>
                  <div className="w-full h-10 bg-gray-300 rounded"></div>
                </div>
              </div>
            ))}
        >
          <ProductsList />
        </Suspense>
      </div>
    </div>
  );
}
