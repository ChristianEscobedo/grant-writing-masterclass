"use client";

import { Container } from "@/components/container";
import { Background } from "@/components/background";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconArrowLeft, IconArrowRight, IconDownload } from "@tabler/icons-react";
import { Button } from "@/components/button";

export default function Slide12Page() {
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
                Slide 12 of 100
              </span>
            </div>
            
            <div className="flex space-x-2">
              <Button
                as={Link}
                href="/masterclass/slides/slide11"
                className="bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700"
              >
                <IconArrowLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>
              
              <Button
                as={Link}
                href="/masterclass/slides/slide13"
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
            <div className="aspect-[16/9] relative bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center p-12">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('/pattern-dots.svg')] opacity-10"></div>
              
              <div className="relative z-10 text-center">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">
                  Where Grant Money Comes From
                </h1>
                
                <div className="grid grid-cols-3 gap-8 max-w-5xl mx-auto">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                    <div className="bg-blue-500/30 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-2">Government</h3>
                    <div className="text-2xl font-bold text-white mb-2">$290B</div>
                    
                    <div className="space-y-2 mt-4">
                      <div className="bg-white/10 rounded-lg p-2 text-sm text-white text-left">
                        <span className="font-semibold">Federal:</span> $180B
                      </div>
                      <div className="bg-white/10 rounded-lg p-2 text-sm text-white text-left">
                        <span className="font-semibold">State:</span> $75B
                      </div>
                      <div className="bg-white/10 rounded-lg p-2 text-sm text-white text-left">
                        <span className="font-semibold">Local:</span> $35B
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                    <div className="bg-purple-500/30 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z" />
                      </svg>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-2">Foundations</h3>
                    <div className="text-2xl font-bold text-white mb-2">$330B</div>
                    
                    <div className="space-y-2 mt-4">
                      <div className="bg-white/10 rounded-lg p-2 text-sm text-white text-left">
                        <span className="font-semibold">Private:</span> $200B
                      </div>
                      <div className="bg-white/10 rounded-lg p-2 text-sm text-white text-left">
                        <span className="font-semibold">Family:</span> $85B
                      </div>
                      <div className="bg-white/10 rounded-lg p-2 text-sm text-white text-left">
                        <span className="font-semibold">Community:</span> $45B
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                    <div className="bg-green-500/30 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-2">Corporate</h3>
                    <div className="text-2xl font-bold text-white mb-2">$80B</div>
                    
                    <div className="space-y-2 mt-4">
                      <div className="bg-white/10 rounded-lg p-2 text-sm text-white text-left">
                        <span className="font-semibold">Direct Grants:</span> $45B
                      </div>
                      <div className="bg-white/10 rounded-lg p-2 text-sm text-white text-left">
                        <span className="font-semibold">CSR Programs:</span> $25B
                      </div>
                      <div className="bg-white/10 rounded-lg p-2 text-sm text-white text-left">
                        <span className="font-semibold">Sponsorships:</span> $10B
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 text-white/80 text-sm">
                  <em>Each funding source has different requirements, priorities, and application processes — creating demand for specialized expertise.</em>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">
                Slide 12: Where Grant Money Comes From
              </h2>
              
              <div className="prose prose-blue dark:prose-invert max-w-none">
                <p>This slide explains the three main funding sources: government agencies, private foundations, and corporations. The key elements include:</p>
                
                <ul>
                  <li><strong>Visual Breakdown:</strong> Clear visual representation of the three main funding sources</li>
                  <li><strong>Specific Numbers:</strong> Detailed breakdown of funding amounts by source and subcategory</li>
                  <li><strong>Icons and Colors:</strong> Visual distinction between the three funding sources</li>
                  <li><strong>Subcategories:</strong> Further breakdown of each funding source into specific types</li>
                  <li><strong>Opportunity Statement:</strong> The note about different requirements creating demand for expertise</li>
                </ul>
                
                <p>This slide provides a detailed breakdown of where grant funding comes from, adding credibility through specific numbers and subcategories. The total of $700 billion reinforces the massive size of the opportunity, while the note about different requirements creates a clear need for specialized expertise. This positions grant writing as a valuable skill that helps organizations navigate the complex landscape of funding sources.</p>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-between">
            <Button
              as={Link}
              href="/masterclass/slides/slide11"
              className="bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700"
            >
              <IconArrowLeft className="h-4 w-4 mr-2" />
              Previous Slide
            </Button>
            
            <Button
              as={Link}
              href="/masterclass/slides/slide13"
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
