"use client";
import productImage from "./assets/product-image.png";
import pyramidImage from "./assets/pyramid.png";
import tubeImage from "./assets/tube.png";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ProductShowcase = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  
  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-white via-[#D2DCFF] to-[#EAEEFE] dark:from-[#000A2E] dark:via-[#001E80] dark:to-[#000A2E] py-20 md:py-32 overflow-x-clip"
    >
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Heading Section */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex px-4 py-2 rounded-full bg-white dark:bg-gray-900 text-sm font-medium text-[#001E80] dark:text-white shadow-sm">
            Boost your productivity
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-6 bg-gradient-to-r from-black to-[#001E80] dark:from-white dark:to-[#7A9AFF] text-transparent bg-clip-text">
            A more effective way to track progress
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mt-6 leading-relaxed">
            Effortlessly turn your ideas into a fully functional, responsive,
            SaaS website in just minutes with this template.
          </p>
        </div>

        {/* Product Image with Floating Elements */}
        <div className="relative mt-16 md:mt-24">
          <div className="relative mx-auto max-w-4xl">
            <Image 
              src={productImage} 
              alt="Product Image" 
              className="w-full h-auto rounded-xl shadow-2xl"
              priority
            />
            
            {/* Pyramid Floating Element */}
            <motion.div
              className="hidden md:block absolute -right-20 -top-20 w-48 h-48 lg:w-64 lg:h-64"
              style={{ translateY }}
            >
              <Image
                src={pyramidImage}
                alt="Pyramid Image"
                className="object-contain"
                fill
              />
            </motion.div>
            
            {/* Tube Floating Element */}
            <motion.div
              className="hidden md:block absolute -left-20 bottom-0 w-48 h-48 lg:w-64 lg:h-64"
              style={{ translateY }}
            >
              <Image
                src={tubeImage}
                alt="Tube image"
                className="object-contain"
                fill
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;