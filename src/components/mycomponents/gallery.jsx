'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function MasonryGallery() {
  // Animation variants for images
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4 md:py-20">
      {[
        [
          "https://t4.ftcdn.net/jpg/03/92/96/87/360_F_392968798_jzIZ0OxBx4CYEPuMNWkLQvkIvMPiDSJn.jpg",
          "https://i.pinimg.com/736x/49/4d/16/494d16442d971d38311a1e5e9b407268.jpg",
          "https://i.pinimg.com/736x/2b/c4/2d/2bc42deb0dc9a7b6e5c188a63532dcaf.jpg",
        ],
        [
          "https://i.pinimg.com/736x/db/e6/78/dbe678c92bf596b4f4f68ef250e76da8.jpg",
          "https://i.pinimg.com/736x/ec/21/6a/ec216a867eed5bed95cc8eb10f21e480.jpg",
          "https://i.pinimg.com/736x/e1/8d/14/e18d146d39370a3781e0cb3aefa6558c.jpg",
        ],
        [
          "https://i.pinimg.com/1200x/08/ca/e5/08cae5f8a70f9607b55e5a22a9db75f5.jpg",
          "https://i.pinimg.com/736x/b7/48/ea/b748ea8148b446e8d8294fc329361989.jpg",
          "https://i.pinimg.com/736x/40/7c/23/407c23a9fddc186710289e3d436361da.jpg",
        ],
        [
          "https://i.pinimg.com/736x/d6/fc/aa/d6fcaa30e3348d3dcb10d78ba652d60b.jpg",
          "https://i.pinimg.com/736x/96/3c/ea/963cea970c852b05edf6ddd18406f780.jpg",
          "https://i.pinimg.com/736x/e6/e0/95/e6e09522ef1b4198495ab8cd02fffe6b.jpg",
        ],
      ].map((column, colIndex) => (
        <div key={colIndex} className="grid gap-4">
          {column.map((src, imgIndex) => (
            <motion.div
              key={src}
              initial="hidden"
              whileInView="visible"
              variants={imageVariants}
              transition={{
                duration: 0.6,
                delay: (colIndex * 0.2) + (imgIndex * 0.15), // staggered effect
              }}
              viewport={{ once: true }}
            >
              <Image
                src={src}
                alt="Gallery image"
                width={500}
                height={500}
                className="h-auto max-w-full rounded-lg"
              />
            </motion.div>
          ))}
        </div>
      ))}
    </div>
  );
}
