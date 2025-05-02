"use client";

import { Container } from "@/components/container";
import { Background } from "@/components/background";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconArrowLeft, IconArrowRight, IconDownload } from "@tabler/icons-react";
import { Button } from "@/components/button";

export default function Slide2Page() {
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
                Slide 2 of 100
              </span>
            </div>
            
            <div className="flex space-x-2">
              <Button
                as={Link}
                href="/masterclass/slides/slide1"
                className="bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700"
              >
                <IconArrowLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>
              
              <Button
                as={Link}
                href="/masterclass/slides/slide3"
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
            <div className="aspect-[16/9] relative bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center p-12">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('/pattern-dots.svg')] opacity-10"></div>
              
              <div className="relative z-10 text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                  The <span className="text-yellow-300">$700 Billion</span> Opportunity<br />
                  Most Freelancers Are Missing
                </h1>
                
                <div className="grid grid-cols-3 gap-6 max-w-4xl mx-auto">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                    <div className="text-4xl font-bold text-white mb-2">$290B</div>
                    <div className="text-white/80 text-sm">Federal Government Grants</div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                    <div className="text-4xl font-bold text-white mb-2">$330B</div>
                    <div className="text-white/80 text-sm">Foundation Grants</div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                    <div className="text-4xl font-bold text-white mb-2">$80B</div>
                    <div className="text-white/80 text-sm">Corporate Grants</div>
                  </div>
                </div>
                
                <div className="mt-8 text-xl text-white/90">
                  <span className="font-semibold">And most organizations struggle to access these funds...</span>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">
                Slide 2: The $700 Billion Opportunity Most Freelancers Are Missing
              </h2>
              
              <div className="prose prose-blue dark:prose-invert max-w-none">
                <p>This attention-grabbing slide highlights the massive grant funding market that creates immediate interest and curiosity. The key elements include:</p>
                
                <ul>
                  <li><strong>Massive Market Size:</strong> "$700 Billion" is highlighted to establish the scale of the opportunity</li>
                  <li><strong>Exclusivity:</strong> "Most Freelancers Are Missing" creates curiosity and suggests insider knowledge</li>
                  <li><strong>Breakdown by Source:</strong> Visual representation of funding sources adds credibility and detail</li>
                  <li><strong>Pain Point:</strong> "Most organizations struggle to access these funds" introduces the problem that creates demand</li>
                  <li><strong>Visual Design:</strong> Professional gradient with data visualization establishes authority</li>
                </ul>
                
                <p>This slide creates immediate interest by highlighting the massive size of the grant funding market and breaking it down by source. The mention that "most organizations struggle to access these funds" introduces the problem that creates demand for grant writers, setting up the opportunity for the audience.</p>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-between">
            <Button
              as={Link}
              href="/masterclass/slides/slide1"
              className="bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700"
            >
              <IconArrowLeft className="h-4 w-4 mr-2" />
              Previous Slide
            </Button>
            
            <Button
              as={Link}
              href="/masterclass/slides/slide3"
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
