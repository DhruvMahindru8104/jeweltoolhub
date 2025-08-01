'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

// Counter Component with Animation
const Counter = ({ target, duration = 2 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = target / (duration * 60); // smooth frame-based counting
    const interval = setInterval(() => {
      start += increment;
      if (start >= target) {
        start = target;
        clearInterval(interval);
      }
      setCount(Math.floor(start));
    }, 1000 / 60);

    return () => clearInterval(interval);
  }, [target, duration]);

  return <span>{count}+</span>;
};

const MetricsSection = () => {
  return (
    <section className="bg-white text-black md:py-20 py-4">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 space-y-16">
        
        {/* Heading */}
        <motion.div
          className="space-y-6 max-w-xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <h1 className="text-3xl font-bold text-yellow-500 capitalize">
            Our Journey Since 1997
          </h1>
          <p className="text-gray-700">
            Since 1997, we’ve been dedicated to delivering premium 
            <strong> goldsmith tools</strong> and <strong> jewellery boxes</strong>  
            to jewellers across the country. Over the years, we’ve built strong 
            relationships and earned the trust of thousands of jewellers.  
            Our mission is simple — to make every jeweller a happy customer 
            by delivering products they can rely on.
          </p>
        </motion.div>

        {/* Metrics + Image */}
        <div className="flex flex-col md:flex-row gap-14 md:items-center">
          
          {/* Metrics */}
          <motion.div
            className="md:w-1/2 md:py-8 grid sm:grid-cols-2 gap-8 md:gap-6 lg:gap-10 text-center children:space-y-3"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            viewport={{ once: true }}
          >
            {[
              { title: 'Happy Jewellers', value: 12000, description: 'Jewellers we have proudly served nationwide.' },
              { title: 'Years in Business', value: 27, description: 'Delivering excellence since 1997.' },
              { title: 'Goldsmith Tools Sold', value: 9500, description: 'Providing quality tools to skilled goldsmiths.' },
              { title: 'Cities Served', value: 18, description: 'Serving jewellers across multiple cities.' },
            ].map((metric, index) => (
              <motion.div
                key={index}
                className="p-4 rounded-lg bg-black text-white shadow-md"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <span className="font-semibold text-2xl text-yellow-500">
                  <Counter target={metric.value} />
                </span>
                <h2 className="font-medium">{metric.title}</h2>
                <p className="text-gray-300 text-sm">{metric.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Image */}
          <motion.div
            className="w-full md:w-1/2 rounded-lg overflow-hidden shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <Image
              src="https://i.pinimg.com/736x/44/e8/43/44e843de3f115846a1ee47d91034a7f5.jpg"
              height={1200}
              width={2300}
              alt="Happy goldsmith team at work"
              className="w-full h-auto object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MetricsSection;
