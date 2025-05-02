"use client";

import { Container } from "@/components/container";
import { Background } from "@/components/background";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconArrowLeft, IconArrowRight, IconDownload } from "@tabler/icons-react";
import { Button } from "@/components/button";

export default function Slide11Page() {
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
                Slide 11 of 100
              </span>
            </div>
            
            <div className="flex space-x-2">
              <Button
                as={Link}
                href="/masterclass/slides/slide10"
                className="bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700"
              >
                <IconArrowLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>
              
              <Button
                as={Link}
                href="/masterclass/slides/slide12"
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
            <div className="aspect-[16/9] relative bg-gradient-to-br from-blue-600 to-green-600 flex items-center justify-center p-12">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('/pattern-dots.svg')] opacity-10"></div>
              
              <div className="relative z-10 text-center">
                <div className="bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full text-white text-sm font-medium mb-6 inline-block">
                  PART 2: THE OPPORTUNITY
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                  The Grant Funding Landscape
                </h1>
                
                <div className="grid grid-cols-3 gap-6 max-w-4xl mx-auto">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                    <div className="text-3xl font-bold text-white mb-2">$700B+</div>
                    <div className="text-white/80 text-sm">Annual Grant Funding Available</div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                    <div className="text-3xl font-bold text-white mb-2">75%</div>
                    <div className="text-white/80 text-sm">Organizations Struggle to Access Funds</div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                    <div className="text-3xl font-bold text-white mb-2">25%</div>
                    <div className="text-white/80 text-sm">Average Success Rate for Applications</div>
                  </div>
                </div>
                
                <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-3xl mx-auto">
                  <div className="text-2xl font-bold text-white mb-4">The Grant Writing Opportunity</div>
                  <div className="text-white/90 text-lg">
                    Organizations desperately need help accessing these funds, but there's a severe shortage of qualified grant writers who know how to create winning applications.
                  </div>
                </div>
                
                <div className="mt-6 text-white/80 text-sm">
                  <em>Source: Foundation Center, Grants.gov, National Grants Management Association</em>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">
                Slide 11: The Grant Funding Landscape
              </h2>
              
              <div className="prose prose-blue dark:prose-invert max-w-none">
                <p>This slide introduces the grant funding landscape with $700 billion available annually. The key elements include:</p>
                
                <ul>
                  <li><strong>Section Header:</strong> "PART 2: THE OPPORTUNITY" clearly indicates the start of a new section</li>
                  <li><strong>Market Size:</strong> "$700B+ Annual Grant Funding Available" establishes the massive size of the opportunity</li>
                  <li><strong>Problem Statement:</strong> "75% Organizations Struggle to Access Funds" identifies the problem that creates demand</li>
                  <li><strong>Success Metric:</strong> "25% Average Success Rate for Applications" suggests room for improvement</li>
                  <li><strong>Opportunity Statement:</strong> Clear explanation of the gap between demand and supply</li>
                  <li><strong>Credibility:</strong> Source citation adds credibility to the statistics</li>
                </ul>
                
                <p>This slide establishes the size and scope of the grant funding opportunity while highlighting the problem that creates demand for grant writers. The statistic that 75% of organizations struggle to access funds creates a clear need, while the 25% average success rate suggests that there's significant room for improvement with the right approach. The source citation adds credibility to the statistics.</p>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-between">
            <Button
              as={Link}
              href="/masterclass/slides/slide10"
              className="bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700"
            >
              <IconArrowLeft className="h-4 w-4 mr-2" />
              Previous Slide
            </Button>
            
            <Button
              as={Link}
              href="/masterclass/slides/slide12"
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
