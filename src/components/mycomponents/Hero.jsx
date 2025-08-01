'use client';

import Image from 'next/image';
import { LuArrowDownRight } from 'react-icons/lu';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="py-4 md:py-20">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
        
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-end bg-zinc-100"
        >
          <Image
            src="https://i.pinimg.com/1200x/55/a2/d9/55a2d9f17c1952f902ba079bb2e62511.jpg"
            alt="Goldsmith tools and jewellery making equipment"
            width={800}
            height={800}
            className="max-h-[600px] w-full rounded-md object-cover lg:max-h-[800px]"
            priority // improves LCP score
          />
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center lg:max-w-3xl lg:items-start lg:text-left"
        >
          {/* New Release Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors 
              focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent 
              bg-yellow-500 text-black hover:bg-yellow-400"
          >
            New Service
            <LuArrowDownRight className="ml-2 size-4" />
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="my-6 text-pretty text-4xl font-bold lg:text-6xl xl:text-7xl"
          >
            Goldsmith Tools Delivered Straight to Your Shop
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="mb-8 max-w-xl text-zinc-700 lg:text-2xl"
          >
            JewelToolHub makes it easy for jewellers to get <strong>goldsmith tools</strong>, 
            <strong> jewellery boxes</strong> and other essential <strong>workshop supplies</strong> 
            delivered directly to their shop — at <strong>market prices</strong>.  
            No need to visit the market. Quality products, on-time delivery, and trusted by jewellers since 1997.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            viewport={{ once: true }}
            className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start"
          >
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm 
              ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring 
              focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 
              bg-yellow-500 text-black hover:bg-yellow-400 h-10 px-4 py-2 w-full sm:w-auto font-semibold">
              Shop Now
            </button>

            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm  
              ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring 
              focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 
              border border-gray-300 bg-white hover:bg-zinc-100 hover:text-zinc-800 h-10 px-4 py-2 w-full sm:w-auto font-semibold">
              Learn More
              <LuArrowDownRight className="ml-2 size-4" />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
