"use client";
import acmeLogo from "./assets/logo-acme.png";
import quantumLogo from "./assets/logo-quantum.png";
import echoLogo from "./assets/logo-echo.png";
import celestialLogo from "./assets/logo-celestial.png";
import pulseLogo from "./assets/logo-pulse.png";
import apexLogo from "./assets/logo-apex.png";
import Image from "next/image";
import { motion } from "framer-motion";

const LogoTicker = () => {
  const logos = [
    { src: acmeLogo, alt: "Acme Logo" },
    { src: quantumLogo, alt: "Quantum Logo" },
    { src: echoLogo, alt: "Echo Logo" },
    { src: celestialLogo, alt: "Celestial Logo" },
    { src: pulseLogo, alt: "Pulse Logo" },
    { src: apexLogo, alt: "Apex Logo" }
  ];

  return (
    <div className="py-5 md:py-16 bg-gray-50 dark:bg-gray-900 dark:border-gray-800">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="relative overflow-hidden">
          {/* Gradient masks */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-gray-50 dark:from-gray-900 to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-gray-50 dark:from-gray-900 to-transparent z-10" />
          
          <motion.div
            className="flex"
            animate={{
              x: ["0%", "-100%"]
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {/* Double the logos for seamless looping */}
            {[...logos, ...logos].map((logo, index) => (
              <div 
                key={`${logo.alt}-${index}`} 
                className="flex-shrink-0 px-8 md:px-12 flex items-center justify-center"
              >
                <div className="relative h-12 w-32 md:h-16 md:w-40 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 160px, 200px"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LogoTicker;