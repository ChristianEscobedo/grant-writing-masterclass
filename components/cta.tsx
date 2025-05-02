"use client";
import React from "react";
import Balancer from "react-wrap-balancer";
import { Button } from "./button";
import { motion, MotionConfig } from "framer-motion";
import { IconFileCheck, IconArrowRight, IconCoin } from "@tabler/icons-react";
import Link from "next/link";

export const CTA = () => {
  return (
    <MotionConfig reducedMotion="user">
      <section className="py-60 w-full overflow-hidden relative z-30">
        <div className="bg-white dark:bg-black">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mx-auto w-full relative z-20 sm:max-w-[40rem] md:max-w-[48rem] lg:max-w-[64rem] xl:max-w-[80rem] bg-gradient-to-br from-blue-800 dark:from-blue-900 to-blue-600 sm:rounded-2xl"
          >
            <div className="relative -mx-6 sm:mx-0 sm:rounded-2xl overflow-hidden px-6 md:px-8">
              <div
                className="absolute inset-0 w-full h-full opacity-10 bg-noise fade-vignette [mask-image:radial-gradient(#fff,transparent,75%)]"
                style={{
                  backgroundImage: "url(/noise.webp)",
                  backgroundSize: "30%",
                }}
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="pointer-events-none absolute inset-y-0 right-0 select-none overflow-hidden rounded-2xl"
                style={{
                  mask: "radial-gradient(33.875rem 33.875rem at calc(100% - 8.9375rem) 0, white 3%, transparent 70%)",
                }}
              >
                <IconCoin className="absolute right-8 top-8 h-24 w-24 text-white/10" />
              </motion.div>

              <div className="relative px-6 pb-14 pt-20 sm:px-10 sm:pb-20 lg:px-[4.5rem]">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="text-center text-balance mx-auto text-3xl md:text-5xl font-semibold tracking-[-0.015em] text-white"
                >
                  Ready to secure your next grant?
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="mt-6 max-w-[32rem] text-center mx-auto text-lg/7 text-blue-100"
                >
                  <Balancer>
                    Start your journey to successful grant funding today. Join thousands of organizations who have already secured millions in grants using our AI-powered platform.
                  </Balancer>
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="relative z-10 mx-auto flex flex-col sm:flex-row gap-4 justify-center mt-10"
                >
                  <Button
                    className="group bg-white text-blue-600 hover:bg-blue-50 flex items-center gap-2 text-base"
                    as={Link}
                    href="/masterclass"
                  >
                    Join Free Masterclass
                    <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <Button
                    className="group bg-blue-700 hover:bg-blue-600 text-white flex items-center gap-2 text-base"
                    as={Link}
                    href="/early-access"
                  >
                    Schedule Demo
                    <IconFileCheck className="h-4 w-4" />
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </MotionConfig>
  );
};
