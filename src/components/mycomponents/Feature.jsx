'use client';

import Image from 'next/image';
import Link from 'next/link';
import { LuChevronRight } from 'react-icons/lu';
import { motion } from 'framer-motion';

export default function FeaturesSection() {
  return (
    <section className="bg-white py-4 md:py-20">
      <div className="container space-y-12">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-black">
            🛒 Shop Now
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Discover our premium range of goldsmith tools and jewellery boxes,  
            delivered directly to your shop at market prices.
          </p>
        </motion.div>

        {/* Product Cards */}
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-20">
          
          {/* Goldsmith Tools Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="rounded-lg border border-gray-200 bg-white shadow-sm hover:shadow-lg transition-all"
          >
            <div className="rounded-t-lg bg-zinc-100 p-4 md:p-6">
              <Image
                src="https://i.pinimg.com/1200x/55/a2/d9/55a2d9f17c1952f902ba079bb2e62511.jpg"
                alt="Goldsmith tools delivery"
                width={800}
                height={500}
                className="aspect-video max-h-[500px] w-full rounded-lg object-cover"
              />
            </div>
            <div className="p-6">
              <div className="mb-1 flex items-center gap-2 font-semibold text-black">
                Goldsmith Tools
                <div className="inline-flex items-center rounded-full bg-yellow-500 px-2.5 py-0.5 text-xs font-semibold text-black">
                  Popular
                </div>
              </div>
              <p className="text-gray-700">
                Get high-quality <strong>goldsmith tools</strong> delivered directly to your shop at market prices.  
                No need to visit the market — we bring the tools to you.
              </p>
              <Link href="/tools" className="mt-4 flex items-center gap-2 font-medium text-black hover:text-yellow-500">
                Explore Tools
                <LuChevronRight className="w-4" />
              </Link>
            </div>
          </motion.div>

          {/* Jewellery Boxes Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="rounded-lg border border-gray-200 bg-white shadow-sm hover:shadow-lg transition-all"
          >
            <div className="rounded-t-lg bg-zinc-100 p-4 md:p-6">
              <Image
                src="https://i.pinimg.com/1200x/55/a2/d9/55a2d9f17c1952f902ba079bb2e62511.jpg"
                alt="Jewellery boxes for jewellers"
                width={800}
                height={500}
                className="aspect-video max-h-[500px] w-full rounded-lg object-cover"
              />
            </div>
            <div className="p-6">
              <p className="mb-1 flex items-center gap-2 font-semibold text-black">
                Jewellery Boxes
              </p>
              <p className="text-gray-700">
                Elegant and sturdy <strong>jewellery boxes</strong> for professional jewellers.  
                Delivered straight to your shop with reliable service.
              </p>
              <Link href="/jewellerybox" className="mt-4 flex items-center gap-2 font-medium text-black hover:text-yellow-500">
                Explore Jewellery Boxes
                <LuChevronRight className="w-4" />
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
