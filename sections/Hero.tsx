"use client";
import ArrowIcon from "./assets/arrow-right.svg";
import cogImage from "./assets/cog.png";
import cylinderImage from "./assets/cylinder.png";
import noodleImage from "./assets/noodle.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={heroRef}
      className="pt-8 pb-20 md:pt-24 md:pb-48 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2_0%,#EAEEFE_100%)] dark:bg-[radial-gradient(ellipse_150%_50%_at_bottom_left,#183EC2_0%,#000000_100%)] overflow-x-clip"
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="md:w-1/2 lg:w-[478px] space-y-6">
            <div className="inline-block px-4 py-2 rounded-full border border-gray-300 dark:border-[#001E80] text-sm font-medium text-gray-700 dark:text-gray-300">
              Version 2.0 is here
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight bg-gradient-to-b from-black to-[#001E80] dark:from-[#001E80] dark:to-white text-transparent bg-clip-text">
              Pathway to productivity
            </h1>
            
            <p className="text-xl text-[#010D3E] dark:text-gray-300 leading-relaxed">
              Celebrate the joy of accomplishment with an app designed to track
              your progress, motivate your efforts, and celebrate your
              successes.
            </p>
            
            <div className="flex flex-wrap gap-4 mt-8">
              <button className="px-8 py-3 rounded-lg bg-[#001E80] text-white font-medium hover:bg-[#00156e] transition-colors">
                Get for free
              </button>
              <button className="flex items-center gap-2 px-8 py-3 rounded-lg font-medium text-[#001E80] dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                <span>Learn more</span>
                <Image 
                  src={ArrowIcon} 
                  className="h-5 w-5" 
                  alt="arrow" 
                  width={20} 
                  height={20} 
                />
              </button>
            </div>
          </div>

          {/* Image Content */}
          <div className="relative w-full md:w-1/2 h-[400px] md:h-[648px] mt-12 md:mt-0">
            {/* Cog Image */}
            <motion.div
              className="absolute w-full h-full flex justify-center md:justify-start"
              animate={{
                translateY: [-30, 30],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 3,
                ease: "easeInOut",
              }}
            >
              <Image
                src={cogImage}
                alt="Cog image"
                className="object-contain h-full w-auto"
                width={600}
                height={600}
              />
            </motion.div>
            
            {/* Cylinder Image */}
            <motion.div
              className="hidden md:block absolute top-8 left-32 w-48 h-48"
              style={{ translateY }}
            >
              <Image
                src={cylinderImage}
                alt="Cylinder image"
                className="object-contain"
                width={220}
                height={220}
              />
            </motion.div>
            
            {/* Noodle Image */}
            <motion.div
              className="hidden lg:block absolute top-[524px] left-[448px] bottom-0 right-0 w-78 h-78"
              style={{ 
                translateY,
                rotate: "30deg"
              }}
            >
              <Image
                src={noodleImage}
                alt="Noodle image"
                className="object-contain"
                width={220}
                height={220}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;