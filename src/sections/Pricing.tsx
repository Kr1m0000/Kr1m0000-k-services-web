"use client";
import CheckIcon from "@/assets/check.svg";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

const pricingTiers = [
  {
    title: "Basic App",
    monthlyPrice: 20000,
    buttonText: "Sign up now",
    popular: false,
    inverse: false,
    isCustom: false,
    features: [
      "AI text translation",
      "Standard language support",
      "Up to 500K characters/month",
      "Email support",
    ],
  },
  {
    title: "Pro App",
    monthlyPrice: 35000,
    buttonText: "Sign up now",
    popular: true,
    inverse: true,
    isCustom: false,
    features: [
      "Advanced translation engine",
      "File support (PDF, DOCX)",
      "Glossary customization",
      "5M characters/month",
      "Priority support",
    ],
  },
  {
    title: "Custom App",
    monthlyPrice: 35000,
    buttonText: "Sign up now",
    popular: false,
    inverse: false,
    isCustom: true,
    features: [
      "Custom model training",
      "Advanced translation engine",
      "Unlimited translation",
      "API & system integration",
      "Private cloud option",
      "Dedicated support",
    ],
  },
];

export const Pricing = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="section-heading">
          <h2 className="section-title">Our plans</h2>
          <p className="section-description mt-5">
            We offer flexible, scalable solutions designed to meet your translation needs—at the best value. Whether you're looking for API access, a self-service platform, or custom AI model training, we've got you covered.
          </p>

        </div>
        <div className="flex flex-col gap-6 items-center mt-10 lg:flex-row lg:items-end lg:justify-center">
          {pricingTiers.map(
            ({
              title,
              monthlyPrice,
              buttonText,
              popular,
              isCustom,
              inverse,
              features,
            }) => (
              <div
                className={twMerge(
                  "card",
                  inverse === true && "border-black bg-black text-white"
                )}
              >
                <div className="flex justify-between">
                  <h3
                    className={twMerge(
                      "text-lg font-bold text-black/50",
                      inverse === true && "text-white/60"
                    )}
                  >
                    {title}
                  </h3>
                  {popular === true && (
                    <div className="inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20">
                      <motion.span
                        animate={{
                          backgroundPositionX: "100%",
                        }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                          repeatType: "loop",
                        }}
                        className="bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF)] [background-size:200%] text-transparent bg-clip-text font-medium"
                      >
                        Popular
                      </motion.span>
                    </div>
                  )}
                </div>
                <div className="flex items-baseline gap-1 mt-[30px]">
                  <span className="text-4xl font-bold tracking-tighter leading-none">
                    {isCustom ? `+${monthlyPrice}` : monthlyPrice}
                  </span>
                  <span className="tracking-tight font-bold text-grey/10">
                    /projet
                  </span>
                </div>
                <button
                  className={twMerge(
                    "btn btn-primary w-full mt-[30px]",
                    inverse === true && "bg-white text-black"
                  )}
                >
                  {buttonText}
                </button>
                <ul className="flex flex-col gap-5 mt-8">
                  {features.map((feature) => (
                    <li className="text-sm flex items-center gap-4">
                      <CheckIcon className="h-6 w-6" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};
