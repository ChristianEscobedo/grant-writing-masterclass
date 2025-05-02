"use client";

import React, { useState, useEffect } from "react";
import Balancer from "react-wrap-balancer";
import { Button } from "./button";
import { HiArrowRight } from "react-icons/hi2";
import { Badge } from "./badge";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Link } from "next-view-transitions";
import {
  IconPencil,
  IconCheck,
  IconCoin,
  IconCircleDot,
  IconCircleX,
  IconCircleMinus,
  IconSend,
  IconFileCheck,
  IconChartBar,
  IconCalendar,
  IconUsers,
  IconBuildingBank
} from "@tabler/icons-react";

export const Hero = () => {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [section, setSection] = useState(0);

  const steps = [
    { text: "Analyzing requirements...", icon: <IconPencil className="text-blue-600" />, color: "from-blue-600 to-blue-500" },
    { text: "Writing grant proposal...", icon: <IconPencil className="text-blue-500" />, color: "from-blue-500 to-blue-400" },
    { text: "Reviewing compliance...", icon: <IconCheck className="text-blue-600" />, color: "from-blue-600 to-blue-500" },
    { text: "Submitting proposal...", icon: <IconSend className="text-blue-500" />, color: "from-blue-500 to-blue-400" },
    { text: "Final Review...", icon: <IconFileCheck className="text-blue-600" />, color: "from-blue-600 to-blue-500" },
    { text: "Funding secured!", icon: <IconCoin className="text-blue-500" />, color: "from-blue-500 to-blue-400" },
  ];

  const sections = [
    {
      title: "Project Overview",
      icon: <IconUsers className="w-6 h-6" />,
      content: [
        { label: "Initiative Type", value: "Community Development Program" },
        { label: "Target Population", value: "10,000+ Residents" },
        { label: "Project Duration", value: "24 Months" },
        { label: "Primary Focus", value: "Education & Skills Development" },
        { label: "Geographic Reach", value: "Metropolitan Area" },
        { label: "Key Partners", value: "5 Local Organizations" },
        { label: "Impact Areas", value: "Youth, Seniors, Underserved Communities" },
        { label: "Success Metrics", value: "Employment Rate, Education Access" }
      ]
    },
    {
      title: "Budget Breakdown",
      icon: <IconChartBar className="w-6 h-6" />,
      content: [
        { label: "Total Grant Request", value: "$500,000", highlight: true },
        { label: "Personnel Costs", value: "$250,000" },
        { label: "Equipment & Technology", value: "$150,000" },
        { label: "Program Operations", value: "$100,000" },
        { label: "Cost per Participant", value: "$50" },
        { label: "Administrative", value: "15%" },
        { label: "Direct Services", value: "75%" },
        { label: "Evaluation", value: "10%" }
      ]
    },
    {
      title: "Implementation Plan",
      icon: <IconCalendar className="w-6 h-6" />,
      content: [
        { label: "Phase 1: Setup", value: "Months 1-3" },
        { label: "Phase 2: Launch", value: "Months 4-6" },
        { label: "Phase 3: Expansion", value: "Months 7-12" },
        { label: "Phase 4: Evaluation", value: "Months 13-18" },
        { label: "Phase 5: Optimization", value: "Months 19-22" },
        { label: "Phase 6: Reporting", value: "Months 23-24" },
        { label: "Key Milestones", value: "12" },
        { label: "Review Points", value: "4" }
      ]
    },
    {
      title: "Expected Outcomes",
      icon: <IconBuildingBank className="w-6 h-6" />,
      content: [
        { label: "Success Rate", value: "75%" },
        { label: "Community Impact Score", value: "9.2/10" },
        { label: "Job Creation", value: "150+ Positions" },
        { label: "Skills Training", value: "1,000+ Participants" },
        { label: "Economic Impact", value: "$2.5M" },
        { label: "ROI", value: "5x" },
        { label: "Sustainability Score", value: "95%" },
        { label: "Long-term Benefits", value: "10+ Years" }
      ]
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      if (step === steps.length - 1) {
        // Reset both step and section when cycle completes
        setStep(0);
        setSection(0);
      } else if (step < steps.length - 2) {
        // Update section every other step until near the end
        setSection((prev) => (step % 2 === 0 ? (prev + 1) % sections.length : prev));
        setStep((prev) => prev + 1);
      } else {
        // Just update step for final animations
        setStep((prev) => prev + 1);
      }
    }, 4000);
    return () => clearInterval(timer);
  }, [step]);

  return (
    <div className="flex flex-col min-h-screen pt-20 md:pt-40 relative overflow-hidden">
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 0.5 }}
        className="flex justify-center"
      >
        <Badge onClick={() => router.push("/blog/top-5-grant-writing-tips")} className="bg-gradient-to-r from-blue-500/10 to-blue-400/10 text-blue-700 dark:text-blue-400 text-base md:text-lg">
          Trusted by 1000+ organizations • $250M+ in grants secured
        </Badge>
      </motion.div>
      <motion.h1
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 0.5 }}
        className="text-4xl md:text-6xl lg:text-8xl font-bold max-w-6xl mx-auto text-center mt-8 relative z-10 bg-clip-text text-transparent bg-gradient-to-br from-blue-800 via-blue-600 to-blue-400 dark:from-blue-400 dark:via-blue-500 dark:to-blue-600 pb-2"
      >
        <Balancer>
          Get Funded. Get Building. Get Growing.
        </Balancer>
      </motion.h1>
      <motion.p
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 0.5, delay: 0.2 }}
        className="text-lg md:text-2xl text-muted dark:text-muted-dark max-w-4xl mx-auto relative z-10 text-center mt-10 leading-relaxed"
      >
        <Balancer>
          Our AI-powered platform helps you write winning grant proposals in minutes, not months. Turn your ideas into funded realities with intelligent grant writing that works.
        </Balancer>
      </motion.p>
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 0.5, delay: 0.4 }}
        className="flex flex-col sm:flex-row items-center gap-4 justify-center mt-10 relative z-10"
      >
        <Button
          size="lg"
          className="bg-blue-600 hover:bg-blue-700 text-white min-w-[160px]"
          as={Link}
          href="/masterclass"
        >
          Join Free Masterclass
        </Button>
        <Button
          variant="simple"
          size="lg"
          as={Link}
          href="/early-access"
          className="flex items-center gap-2 group min-w-[160px] justify-center"
        >
          <span>Schedule Demo</span>
          <HiArrowRight className="text-muted group-hover:translate-x-1 stroke-[1px] h-4 w-4 transition-transform duration-200 dark:text-muted-dark" />
        </Button>
      </motion.div>

      {/* Stats Section */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 0.5, delay: 0.6 }}
        className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto mt-16 px-4"
      >
        {[
          { id: "success-rate", label: "Success Rate", value: "92%" },
          { id: "grant-size", label: "Avg. Grant Size", value: "$275K" },
          { id: "time-saved", label: "Time Saved", value: "75%" },
          { id: "active-users", label: "Active Users", value: "1000+" },
        ].map((stat) => (
          <div key={stat.id} className="text-center">
            <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-500">
              {stat.value}
            </div>
            <div className="text-sm text-muted dark:text-muted-dark mt-1">
              {stat.label}
            </div>
          </div>
        ))}
      </motion.div>

      {/* Browser Demo Section */}
      <div className="p-4 border border-neutral-200 bg-neutral-100 dark:bg-neutral-800 dark:border-neutral-700 rounded-[32px] mt-20 relative">
        <div className="absolute inset-x-0 bottom-0 h-40 w-full bg-gradient-to-b from-transparent via-white to-white dark:via-black/50 dark:to-black scale-[1.1] pointer-events-none" />

        <div className="p-2 bg-white dark:bg-black dark:border-neutral-700 border border-neutral-200 rounded-[24px] relative overflow-hidden min-h-[700px]">
          {/* Browser Controls */}
          <div className="absolute top-0 left-0 w-full h-10 bg-neutral-100 dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800 flex items-center px-4 gap-2">
            <div className="flex gap-2">
              <IconCircleX className="h-4 w-4 text-red-500" />
              <IconCircleMinus className="h-4 w-4 text-yellow-500" />
              <IconCircleDot className="h-4 w-4 text-green-500" />
            </div>
            <div className="ml-4 flex-1 bg-white dark:bg-neutral-800 h-6 rounded-full px-4 text-xs flex items-center text-neutral-500">
              grantwriter.ai/proposal-builder
            </div>
          </div>

          {/* Progress Bar */}
          <div className="absolute top-10 left-0 w-full h-1 bg-gradient-to-r from-blue-700 via-blue-500 to-blue-400">
            <motion.div
              className="h-full w-1/4 bg-white/20"
              animate={{
                x: ["0%", "400%"],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            />
          </div>

          <div className="relative mt-14">
            {/* Status Header - Adjusted positioning */}
            <div className="absolute -top-2 left-4 right-4 flex items-center justify-between bg-white/80 dark:bg-black/80 backdrop-blur-sm py-2 px-4 rounded-full z-50">
              <div className="flex items-center space-x-3">
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                  }}
                  className={`flex items-center justify-center h-8 w-8 rounded-full bg-gradient-to-r ${steps[step].color}`}
                >
                  {steps[step].icon}
                </motion.div>
                <motion.span
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  key={steps[step].text}
                  className={`text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r ${steps[step].color}`}
                >
                  {steps[step].text}
                </motion.span>
              </div>

              <motion.div
                className="flex space-x-1"
                animate={{
                  opacity: [0.5, 1],
                }}
                transition={{
                  duration: 1,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              >
                {steps.map((_, i) => (
                  <motion.div
                    key={`step-${i}`}
                    className={`h-2 w-2 rounded-full ${
                      i <= step ? "bg-blue-500" : "bg-neutral-300 dark:bg-neutral-600"
                    }`}
                    animate={{
                      scale: i === step ? [1, 1.2, 1] : 1,
                    }}
                    transition={{
                      duration: 1,
                      repeat: i === step ? Number.POSITIVE_INFINITY : 0,
                    }}
                  />
                ))}
              </motion.div>
            </div>

            {/* Main Content Area - Adjusted top margin */}
            <div className="mt-8 px-8">
              <AnimatePresence mode="wait">
                {step === steps.length - 1 ? (
                  // Final Approval Screen
                  <motion.div
                    key="approval"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="flex flex-col items-center justify-center space-y-8 py-20"
                  >
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                      }}
                      className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 flex items-center justify-center"
                    >
                      <IconCoin className="w-16 h-16 text-white" />
                    </motion.div>
                    <div className="text-center">
                      <h2 className="text-4xl font-bold text-blue-600 mb-4">Grant Approved!</h2>
                      <div className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400 mb-4">
                        $500,000
                      </div>
                      <p className="text-neutral-500 dark:text-neutral-400">
                        Congratulations! Your grant has been approved and funded.
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  // Section Content
                  <motion.div
                    key={sections[section].title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="bg-neutral-50 dark:bg-neutral-900 rounded-xl p-8"
                  >
                    <div className="flex items-center space-x-3 mb-8">
                      <div className="p-2 bg-neutral-200 dark:bg-neutral-800 rounded-lg">
                        {sections[section].icon}
                      </div>
                      <h2 className="text-xl font-semibold">{sections[section].title}</h2>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                      {sections[section].content.map((item, index) => (
                        <motion.div
                          key={item.label}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className={`p-4 rounded-lg ${
                            item.highlight
                              ? "bg-gradient-to-r from-blue-500/10 to-blue-400/10"
                              : "bg-white dark:bg-neutral-800"
                          }`}
                        >
                          <div className="text-sm text-neutral-500 dark:text-neutral-400">
                            {item.label}
                          </div>
                          <div className={`text-lg font-semibold ${
                            item.highlight ? "text-blue-500" : ""
                          }`}>
                            {item.value}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Status Footer */}
            <div className="absolute bottom-4 left-4 right-4">
              <motion.div
                className="h-10 bg-neutral-100 dark:bg-neutral-900 rounded-full flex items-center justify-between px-6"
                animate={{
                  opacity: step === steps.length - 1 ? 0 : 1,
                }}
              >
                <div className="text-sm text-neutral-500">
                  Processing section {section + 1} of {sections.length}
                </div>
                <div className="text-sm font-medium text-blue-500">
                  {Math.round((step / (steps.length - 1)) * 100)}% Complete
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
