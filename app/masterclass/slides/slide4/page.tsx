"use client";

import { Container } from "@/components/container";
import { Background } from "@/components/background";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconArrowLeft, IconArrowRight, IconDownload } from "@tabler/icons-react";
import { Button } from "@/components/button";

export default function Slide4Page() {
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
                Slide 4 of 100
              </span>
            </div>
            
            <div className="flex space-x-2">
              <Button
                as={Link}
                href="/masterclass/slides/slide3"
                className="bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700"
              >
                <IconArrowLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>
              
              <Button
                as={Link}
                href="/masterclass/slides/slide5"
                className="bg-purple-600 hover:bg-purple-700 text-white"
              >
                Next
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
            <div className="aspect-[16/9] relative bg-gradient-to-br from-purple-600 to-blue-700 flex items-center justify-center p-12">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('/pattern-dots.svg')] opacity-10"></div>
              
              <div className="relative z-10 text-center">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">
                  What You'll Learn Today
                </h1>
                
                <div className="grid grid-cols-2 gap-6 max-w-4xl mx-auto">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left">
                    <div className="flex items-center mb-3">
                      <div className="bg-yellow-400 rounded-full w-8 h-8 flex items-center justify-center text-purple-800 font-bold mr-3">1</div>
                      <div className="text-xl font-semibold text-white">The Opportunity</div>
                    </div>
                    <div className="text-white/80 text-sm pl-11">
                      Why grant writing is a $700B opportunity with massive demand and minimal competition
                    </div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left">
                    <div className="flex items-center mb-3">
                      <div className="bg-yellow-400 rounded-full w-8 h-8 flex items-center justify-center text-purple-800 font-bold mr-3">2</div>
                      <div className="text-xl font-semibold text-white">The Business Model</div>
                    </div>
                    <div className="text-white/80 text-sm pl-11">
                      3 profitable business models and how to price your services for maximum income
                    </div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left">
                    <div className="flex items-center mb-3">
                      <div className="bg-yellow-400 rounded-full w-8 h-8 flex items-center justify-center text-purple-800 font-bold mr-3">3</div>
                      <div className="text-xl font-semibold text-white">Client Acquisition</div>
                    </div>
                    <div className="text-white/80 text-sm pl-11">
                      How to consistently find and land high-paying clients (even with zero experience)
                    </div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left">
                    <div className="flex items-center mb-3">
                      <div className="bg-yellow-400 rounded-full w-8 h-8 flex items-center justify-center text-purple-800 font-bold mr-3">4</div>
                      <div className="text-xl font-semibold text-white">Grant Writing Process</div>
                    </div>
                    <div className="text-white/80 text-sm pl-11">
                      The exact process for creating winning grant applications (simplified with AI)
                    </div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left col-span-2">
                    <div className="flex items-center mb-3">
                      <div className="bg-yellow-400 rounded-full w-8 h-8 flex items-center justify-center text-purple-800 font-bold mr-3">5</div>
                      <div className="text-xl font-semibold text-white">Scaling Your Business</div>
                    </div>
                    <div className="text-white/80 text-sm pl-11">
                      How to scale from your first client to a consistent $10K+/month business
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">
                Slide 4: What You'll Learn Today
              </h2>
              
              <div className="prose prose-blue dark:prose-invert max-w-none">
                <p>This agenda slide provides a clear outline of what participants will learn in the next 90 minutes, creating a roadmap for the presentation. The key elements include:</p>
                
                <ul>
                  <li><strong>Clear Structure:</strong> The 5 main sections create a logical flow and help participants follow along</li>
                  <li><strong>Benefit-Focused:</strong> Each section description focuses on the benefit rather than just the topic</li>
                  <li><strong>Objection Handling:</strong> "Even with zero experience" addresses the main concern directly</li>
                  <li><strong>AI Advantage:</strong> Mentions how AI simplifies the process, reducing the perceived complexity</li>
                  <li><strong>End Goal:</strong> "Consistent $10K+/month business" reinforces the core promise</li>
                </ul>
                
                <p>This slide creates a clear roadmap for the presentation while reinforcing the core benefits and addressing key objections. The structured approach helps participants understand what to expect and builds anticipation for each section. The visual organization with numbered sections makes the content feel manageable and well-organized.</p>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-between">
            <Button
              as={Link}
              href="/masterclass/slides/slide3"
              className="bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700"
            >
              <IconArrowLeft className="h-4 w-4 mr-2" />
              Previous Slide
            </Button>
            
            <Button
              as={Link}
              href="/masterclass/slides/slide5"
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
