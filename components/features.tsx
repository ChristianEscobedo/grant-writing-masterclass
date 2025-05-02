"use client";

import React from "react";
import { Heading } from "./heading";
import { Subheading } from "./subheading";
import { cn } from "@/lib/utils";
import { GridLineHorizontal, GridLineVertical } from "./grid-lines";
import { 
  IconFileDescription, 
  IconSearch, 
  IconClipboardCheck, 
  IconDashboard,
  IconArrowRight
} from "@tabler/icons-react";
import { motion, MotionConfig } from "framer-motion";

export const Features = () => {
  const features = [
    {
      title: "Smart Grant Research",
      description:
        "Our AI scans thousands of funding sources daily to match your organization with the perfect grant opportunities, ensuring you never miss out on potential funding.",
      icon: <IconSearch className="w-10 h-10 text-blue-600" />,
      color: "from-blue-600/20 to-blue-500/20",
      className: "lg:col-span-3",
    },
    {
      title: "AI-Powered Writing Assistant",
      description:
        "Transform your ideas into compelling proposals with our intelligent writing assistant. Get real-time suggestions, compliance checks, and success-proven templates.",
      icon: <IconFileDescription className="w-10 h-10 text-blue-600" />,
      color: "from-blue-600/20 to-blue-500/20",
      className: "lg:col-span-3",
    },
    {
      title: "Comprehensive Review System",
      description:
        "Our advanced review system analyzes your proposals for compliance, clarity, and competitiveness. Get instant feedback and suggestions to maximize your success rate.",
      icon: <IconClipboardCheck className="w-10 h-10 text-blue-600" />,
      color: "from-blue-600/20 to-blue-500/20",
      className: "lg:col-span-3",
    },
    {
      title: "Track & Manage Applications",
      description:
        "Stay organized with our intuitive dashboard. Track deadlines, manage multiple applications, and handle post-award reporting all in one place.",
      icon: <IconDashboard className="w-10 h-10 text-blue-600" />,
      color: "from-blue-600/20 to-blue-500/20",
      className: "lg:col-span-3",
    },
  ];

  return (
    <MotionConfig reducedMotion="user">
      <div className="relative z-20 py-20 md:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-grid-neutral-100/50 dark:bg-grid-neutral-900/50 bg-center [mask-image:radial-gradient(white,transparent_85%)]" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <Heading as="h2" className="text-center bg-clip-text text-transparent bg-gradient-to-br from-blue-800 via-blue-600 to-blue-400 dark:from-blue-400 dark:via-blue-500 dark:to-blue-600">
            Complete Grant Writing Solution
          </Heading>
          <Subheading className="text-center max-w-3xl mx-auto mt-6 text-lg">
            From research to submission, our AI-powered platform streamlines every step of your grant writing journey.
          </Subheading>
        </motion.div>

        <div className="relative mt-20 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-8 lg:gap-12">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={cn(
                  "group relative",
                  feature.className
                )}
              >
                <div className="relative h-full rounded-3xl bg-neutral-50 dark:bg-neutral-900/50 p-8 overflow-hidden">
                  {/* Gradient Background */}
                  <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out pointer-events-none" 
                    style={{
                      background: `radial-gradient(circle at 50% 50%, ${feature.color.split(" ")[0].replace("from-", "")} 0%, transparent 75%)`
                    }}
                  />
                  
                  {/* Icon */}
                  <motion.div 
                    className="relative mb-6 inline-block"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {feature.icon}
                  </motion.div>

                  {/* Content */}
                  <div className="relative">
                    <h3 className="text-xl font-semibold mb-4 flex items-center group-hover:text-blue-600 transition-colors duration-300">
                      {feature.title}
                      <IconArrowRight className="w-4 h-4 ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    </h3>
                    <p className="text-muted dark:text-muted-dark leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  {/* Border Gradient */}
                  <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{
                    backgroundImage: `linear-gradient(to right, ${feature.color.split(" ")[0].replace("from-", "").replace("/20", "")}, transparent)`
                  }} />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Background Lines */}
          <GridLineHorizontal className="top-0" />
          <GridLineHorizontal className="bottom-0" />
          <GridLineVertical className="left-0" />
          <GridLineVertical className="right-0" />
        </div>
      </div>
    </MotionConfig>
  );
};
