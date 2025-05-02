"use client";

import { Container } from "@/components/container";
import { Background } from "@/components/background";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconArrowLeft, IconArrowRight, IconDownload } from "@tabler/icons-react";
import { Button } from "@/components/button";

export default function Slide1Page() {
  return (
    <div className="relative">
      <div className="absolute inset-0 h-full w-full overflow-hidden">
        <Background />
      </div>
      <Container className="flex min-h-screen flex-col py-10">
        <div className="w-full max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <Button
              as={Link}
              href="/masterclass/slides"
              className="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-700"
            >
              <IconArrowLeft className="h-4 w-4 mr-2" />
              Back to Slides
            </Button>
            
            <div className="flex items-center">
              <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs px-2 py-1 rounded">
                Slide 1 of 100
              </span>
            </div>
            
            <div className="flex space-x-2">
              <Button
                as={Link}
                href="/masterclass/slides/slide2"
                className="bg-purple-600 hover:bg-purple-700 text-white"
              >
                Next Slide
                <IconArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-neutral-900 rounded-xl overflow-hidden shadow-aceternity relative z-10 border border-neutral-200 dark:border-neutral-800 mb-8"
          >
            <div className="aspect-[16/9] relative bg-gradient-to-br from-purple-600 to-indigo-700 flex items-center justify-center p-12">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('/pattern-dots.svg')] opacity-10"></div>
              
              <div className="relative z-10 text-center">
                <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full text-white text-sm font-medium mb-6 inline-block">
                  90-Minute Masterclass
                </div>
                
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  How to Build a <span className="text-yellow-300">$10K+/Month</span><br />
                  Grant Writing Business
                </h1>
                
                <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
                  <span className="font-semibold">(Even If You Have Zero Experience)</span>
                </p>
                
                <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg text-white text-sm inline-block">
                  May 3rd, 2025 • 2:00 PM EST
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">
                Slide 1: Title Slide
              </h2>
              
              <div className="prose prose-blue dark:prose-invert max-w-none">
                <p>This is the title slide for the masterclass, designed to immediately capture attention and address the main objection (no experience needed). The key elements include:</p>
                
                <ul>
                  <li><strong>Clear Income Promise:</strong> "$10K+/Month" is highlighted to establish the financial opportunity</li>
                  <li><strong>Objection Handling:</strong> "Even If You Have Zero Experience" directly addresses the main concern</li>
                  <li><strong>Time Investment:</strong> "90-Minute Masterclass" sets clear expectations for the time commitment</li>
                  <li><strong>Date and Time:</strong> Specific date and time creates urgency and concrete next steps</li>
                  <li><strong>Visual Design:</strong> Professional gradient background with subtle pattern establishes credibility</li>
                </ul>
                
                <p>This slide establishes the core promise of the masterclass and creates immediate interest by highlighting both the opportunity ($10K+/month) and addressing the main objection (no experience needed).</p>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-between">
            <div></div>
            <Button
              as={Link}
              href="/masterclass/slides/slide2"
              className="bg-purple-600 hover:bg-purple-700 text-white"
            >
              Next Slide
              <IconArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
