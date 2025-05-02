"use client";
import { useEffect, useState } from "react";
import { Heading } from "./heading";
import { Subheading } from "./subheading";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const LOGOS = [
  {
    name: "Gates Foundation",
    logo: "/logos/gates-foundation.svg",
    width: 180,
    height: 60,
  },
  {
    name: "Ford Foundation",
    logo: "/logos/ford-foundation.svg",
    width: 160,
    height: 60,
  },
  {
    name: "Rockefeller Foundation",
    logo: "/logos/rockefeller.svg",
    width: 200,
    height: 60,
  },
  {
    name: "MacArthur Foundation",
    logo: "/logos/macarthur.svg",
    width: 180,
    height: 60,
  },
  {
    name: "Open Society Foundations",
    logo: "/logos/open-society.svg",
    width: 160,
    height: 60,
  },
  {
    name: "Kellogg Foundation",
    logo: "/logos/kellogg.svg",
    width: 180,
    height: 60,
  }
];

export const Companies = () => {
  return (
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
          Trusted by Leading Organizations
        </Heading>
        <Subheading className="text-center max-w-3xl mx-auto mt-6 text-lg">
          Join thousands of organizations who have secured millions in grants using our platform.
        </Subheading>
      </motion.div>

      <div className="mt-20 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mx-auto grid grid-cols-2 items-center gap-x-8 gap-y-12 sm:grid-cols-3 lg:grid-cols-6">
          {LOGOS.map((logo, index) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="relative h-16 w-full">
                {/* Logo background */}
                <div 
                  className="absolute inset-0 rounded-xl bg-gradient-to-br"
                  style={{
                    backgroundImage: `linear-gradient(to bottom right, ${
                      index % 2 === 0 
                        ? 'rgba(30, 64, 175, 0.1), rgba(59, 130, 246, 0.1)' 
                        : 'rgba(59, 130, 246, 0.1), rgba(96, 165, 250, 0.1)'
                    })`,
                  }}
                />
                
                <motion.div
                  className="absolute inset-0 flex items-center justify-center p-2"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="relative w-full h-full flex items-center justify-center">
                    <span className="text-sm font-medium text-neutral-600 dark:text-neutral-400 text-center">
                      {logo.name}
                    </span>
                  </div>
                </motion.div>
              </div>

              {/* Hover effect border */}
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-blue-600/25 to-blue-400/25 opacity-0 blur-xl group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 grid grid-cols-2 gap-8 sm:grid-cols-4"
        >
          {[
            { value: "$250M+", label: "Grants Secured" },
            { value: "1,000+", label: "Organizations" },
            { value: "92%", label: "Success Rate" },
            { value: "24/7", label: "Support" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              className="flex flex-col items-center justify-center p-6 bg-gradient-to-br from-blue-50 to-blue-100/50 dark:from-blue-900/10 dark:to-blue-800/5 rounded-2xl"
            >
              <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-blue-800 via-blue-600 to-blue-400 dark:from-blue-400 dark:via-blue-500 dark:to-blue-600">
                {stat.value}
              </div>
              <div className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
