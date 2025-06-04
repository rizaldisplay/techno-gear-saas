"use client";
import CheckIcon from "./assets/check.svg";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import Image from "next/image";

const pricingTiers = [
  {
    title: "Free",
    monthlyPrice: 0,
    buttonText: "Get started for free",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "2GB storage",
      "Integrations",
      "Basic support",
    ],
  },
  {
    title: "Pro",
    monthlyPrice: 9,
    buttonText: "Sign up now",
    popular: true,
    inverse: true,
    features: [
      "Up to 50 project members",
      "Unlimited tasks and projects",
      "50GB storage",
      "Integrations",
      "Priority support",
      "Advanced support",
      "Export support",
    ],
  },
  {
    title: "Business",
    monthlyPrice: 19,
    buttonText: "Sign up now",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "200GB storage",
      "Integrations",
      "Dedicated account manager",
      "Custom fields",
      "Advanced analytics",
      "Export capabilities",
      "API access",
      "Advanced security features",
    ],
  },
];

const Pricing = () => {
  return (
    <section className="py-20 md:py-32 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Heading Section */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-black to-[#001E80] dark:from-white dark:to-[#7A9AFF] text-transparent bg-clip-text">
            Pricing
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mt-6 leading-relaxed">
            Free forever. Upgrade for unlimited tasks, better security, and
            exclusive features.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16 max-w-6xl mx-auto">
          {pricingTiers.map((tier, idx) => (
            <motion.div
              key={tier.title + idx}
              whileHover={{ y: -5 }}
              className={twMerge(
                "relative rounded-2xl p-8 border border-gray-200 dark:border-gray-700 transition-all",
                tier.inverse ? "bg-black dark:bg-gray-800 text-white" : "bg-white dark:bg-gray-800",
                tier.popular && "ring-2 ring-[#001E80] dark:ring-[#7A9AFF]"
              )}
            >
              {/* Popular Badge */}
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <div className="px-4 py-1.5 rounded-full bg-[#001E80] dark:bg-[#7A9AFF] text-white text-sm font-medium">
                    <motion.span
                      animate={{
                        backgroundPositionX: "100%",
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear",
                        repeatType: "loop",
                      }}
                      className="bg-[linear-gradient(90deg,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF)] bg-[length:200%] text-transparent bg-clip-text"
                    >
                      Most Popular
                    </motion.span>
                  </div>
                </div>
              )}

              {/* Tier Title */}
              <h3 className={twMerge(
                "text-xl font-bold",
                tier.inverse ? "text-white/80" : "text-gray-500 dark:text-gray-400"
              )}>
                {tier.title}
              </h3>

              {/* Price */}
              <div className="mt-6">
                <div className="flex items-baseline gap-2">
                  <span className={twMerge(
                    "text-5xl font-bold",
                    tier.inverse ? "text-white" : "text-black dark:text-white"
                  )}>
                    ${tier.monthlyPrice}
                  </span>
                  <span className={twMerge(
                    "text-lg",
                    tier.inverse ? "text-white/60" : "text-gray-500 dark:text-gray-400"
                  )}>
                    /month
                  </span>
                </div>
              </div>

              {/* Button */}
              <button
                className={twMerge(
                  "w-full mt-8 py-3 px-6 rounded-lg font-medium transition-all",
                  tier.inverse 
                    ? "bg-white text-black hover:bg-gray-100" 
                    : "bg-[#001E80] dark:bg-[#7A9AFF] text-white hover:bg-[#00156e] dark:hover:bg-[#5a7bd6]"
                )}
              >
                {tier.buttonText}
              </button>

              {/* Features List */}
              <ul className="mt-8 space-y-4">
                {tier.features.map((feature, idx) => (
                  <li key={feature + idx} className="flex items-start gap-3">
                    <Image 
                      src={CheckIcon} 
                      alt="check" 
                      width={20} 
                      height={20} 
                      className={twMerge(
                        "flex-shrink-0 mt-1",
                        tier.inverse ? "text-white" : "text-[#001E80] dark:text-[#7A9AFF]"
                      )}
                    />
                    <span className={tier.inverse ? "text-white/90" : "text-gray-700 dark:text-gray-300"}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;