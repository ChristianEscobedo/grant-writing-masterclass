"use client";

import { Container } from "@/components/container";
import { Background } from "@/components/background";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconArrowLeft, IconDownload } from "@tabler/icons-react";
import { Button } from "@/components/button";
import { useState } from "react";

export default function NonprofitFacebookStory2Page() {
  const storyFrames = [
    {
      background: "bg-teal-600",
      content: (
        <div className="text-white text-center p-6">
          <h2 className="text-3xl font-bold mb-4">Success Story</h2>
          <h3 className="text-xl mb-6">How This Non-Profit Increased Their Grant Success Rate by 300%</h3>
          <p className="text-sm opacity-80">Swipe up to discover their strategy</p>
        </div>
      )
    },
    {
      background: "bg-teal-700",
      content: (
        <div className="text-white p-6">
          <h2 className="text-xl font-bold mb-4 text-center">Meet Community Roots</h2>
          <div className="bg-white/20 rounded-lg p-4 mb-4">
            <p className="text-sm mb-2">• Small environmental non-profit</p>
            <p className="text-sm mb-2">• Just 3 full-time staff members</p>
            <p className="text-sm mb-2">• Applied for 14 grants in one year</p>
            <p className="text-sm">• Secured only 1 grant for $25,000</p>
          </div>
          <p className="text-xs text-center opacity-80">Swipe to see what changed</p>
        </div>
      )
    },
    {
      background: "bg-teal-800",
      content: (
        <div className="text-white p-6">
          <h2 className="text-xl font-bold mb-4 text-center">The Problem</h2>
          <div className="bg-white/20 rounded-lg p-4 mb-4">
            <p className="text-sm mb-3">They were following the standard approach:</p>
            <p className="text-xs mb-2">• Finding opportunities that matched their programs</p>
            <p className="text-xs mb-2">• Reading the guidelines carefully</p>
            <p className="text-xs mb-2">• Following application instructions precisely</p>
            <p className="text-xs">• But still getting rejected repeatedly</p>
          </div>
          <p className="text-xs text-center opacity-80">Swipe to see what they discovered</p>
        </div>
      )
    },
    {
      background: "bg-teal-900",
      content: (
        <div className="text-white p-6">
          <h2 className="text-xl font-bold mb-4 text-center">The Discovery</h2>
          <div className="bg-white/20 rounded-lg p-4 mb-4">
            <p className="text-sm mb-3">They were missing crucial information about:</p>
            <p className="text-xs mb-2">• Funders' unstated priorities</p>
            <p className="text-xs mb-2">• Preferred approaches and methodologies</p>
            <p className="text-xs mb-2">• Specific outcomes funders valued most</p>
            <p className="text-xs">• Information that successful applicants had somehow uncovered</p>
          </div>
          <p className="text-xs text-center opacity-80">Swipe to see their new strategy</p>
        </div>
      )
    },
    {
      background: "bg-blue-700",
      content: (
        <div className="text-white p-6">
          <h2 className="text-xl font-bold mb-4 text-center">The Strategy</h2>
          <div className="bg-white/20 rounded-lg p-4 mb-4">
            <p className="text-sm mb-3">They implemented a 7-step research process:</p>
            <p className="text-xs mb-2">1. Analyze past grants</p>
            <p className="text-xs mb-2">2. Analyze funder language</p>
            <p className="text-xs mb-2">3. Research funder leadership</p>
            <p className="text-xs">4. Analyze strategic plans</p>
          </div>
          <p className="text-xs text-center opacity-80">Swipe to see the rest of their strategy</p>
        </div>
      )
    },
    {
      background: "bg-blue-800",
      content: (
        <div className="text-white p-6">
          <h2 className="text-xl font-bold mb-4 text-center">The Strategy (cont.)</h2>
          <div className="bg-white/20 rounded-lg p-4 mb-4">
            <p className="text-xs mb-2">5. Contact previous grantees</p>
            <p className="text-xs mb-2">6. Engage with funders when possible</p>
            <p className="text-xs mb-2">7. Create a funder alignment document</p>
          </div>
          <p className="text-sm mt-4 text-center">This document became their roadmap for crafting each application.</p>
          <p className="text-xs text-center opacity-80">Swipe to see their results</p>
        </div>
      )
    },
    {
      background: "bg-indigo-700",
      content: (
        <div className="text-white p-6">
          <h2 className="text-xl font-bold mb-4 text-center">The Results</h2>
          <div className="bg-white/20 rounded-lg p-4 mb-4">
            <p className="text-sm mb-3">After implementing this process:</p>
            <p className="text-xs mb-2">• Applied for 12 grants</p>
            <p className="text-xs mb-2">• Secured 4 grants totaling $325,000</p>
            <p className="text-xs mb-2">• Increased success rate from 7% to 33%</p>
            <p className="text-xs">• Reduced time spent on applications</p>
          </div>
          <p className="text-xs text-center opacity-80">Swipe to learn this strategy</p>
        </div>
      )
    },
    {
      background: "bg-gradient-to-b from-teal-600 to-indigo-700",
      content: (
        <div className="text-white p-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Learn This Strategy</h2>
          <div className="bg-white/20 rounded-lg p-4 mb-6">
            <p className="text-sm mb-4">Join our FREE Masterclass on May 3rd at 2:00 PM EST</p>
            <p className="text-xs mb-2">• Get templates for creating effective funder research documents</p>
            <p className="text-xs mb-2">• Learn scripts for contacting previous grantees</p>
            <p className="text-xs mb-2">• Discover strategies for aligning with funder priorities</p>
          </div>
          <div className="bg-white text-teal-700 rounded-full py-2 px-4 font-bold inline-block">
            Register Now
          </div>
        </div>
      )
    }
  ];

  const [currentFrame, setCurrentFrame] = useState(0);

  const nextFrame = () => {
    if (currentFrame < storyFrames.length - 1) {
      setCurrentFrame(currentFrame + 1);
    }
  };

  const prevFrame = () => {
    if (currentFrame > 0) {
      setCurrentFrame(currentFrame - 1);
    }
  };

  return (
    <div className="relative">
      <div className="absolute inset-0 h-full w-full overflow-hidden">
        <Background />
      </div>
      <Container className="flex min-h-screen flex-col py-20">
        <div className="w-full max-w-3xl mx-auto">
          <div className="mb-8">
            <Button
              as={Link}
              href="/nonprofits/facebook-stories"
              className="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-700"
            >
              <IconArrowLeft className="h-4 w-4 mr-2" />
              Back to All Stories
            </Button>
          </div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-neutral-900 rounded-xl overflow-hidden shadow-aceternity relative z-10 border border-neutral-200 dark:border-neutral-800 mb-8"
          >
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs px-2 py-1 rounded">
                  Day 2
                </span>
                <span className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-xs px-2 py-1 rounded">
                  Facebook Story
                </span>
              </div>

              <div className="mb-6">
                <h1 className="text-2xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">How This Non-Profit Increased Their Grant Success Rate by 300%</h1>
                <div className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 text-sm px-3 py-2 rounded-md mb-4">
                  <strong>Target Audience:</strong> Non-Profit Organizations & NGOs Seeking Grant Funding
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-8 mb-8">
                <div className="w-full md:w-1/3">
                  <div className="prose prose-emerald dark:prose-invert max-w-none">
                    <h3>Story Strategy</h3>
                    <p>This Facebook Story is designed to:</p>
                    
                    <ul>
                      <li><strong>Provide social proof</strong> through a relatable case study</li>
                      <li><strong>Show transformation</strong> with clear before and after metrics</li>
                      <li><strong>Make success feel achievable</strong> by featuring a small organization</li>
                      <li><strong>Create desire</strong> for the specific strategy that led to success</li>
                    </ul>
                    
                    <p>The story uses a narrative approach that helps non-profit organizations see themselves in Community Roots' journey. By featuring a small organization with just 3 staff members, it makes the success feel achievable for organizations of any size. The specific metrics (7% to 33% success rate, $325,000 in funding) create both desire and believability.</p>
                    
                    <h3>Usage Instructions</h3>
                    <p>Post this story on Day 2 to complement the more detailed Facebook post about funder research. The visual format makes the case study more engaging and memorable. Use the "Register Now" swipe-up link to direct viewers directly to the registration page.</p>
                  </div>
                </div>
                
                <div className="w-full md:w-2/3">
                  <div className="aspect-[9/16] relative rounded-xl overflow-hidden shadow-lg border border-neutral-200 dark:border-neutral-700">
                    <div className={`absolute inset-0 ${storyFrames[currentFrame].background}`}>
                      <div className="absolute inset-0 flex items-center justify-center">
                        {storyFrames[currentFrame].content}
                      </div>
                      
                      {/* Story navigation */}
                      <div className="absolute top-0 left-0 right-0 flex p-2">
                        {storyFrames.map((_, index) => (
                          <div 
                            key={index} 
                            className={`h-1 bg-white/50 flex-1 mx-1 rounded-full overflow-hidden ${index === currentFrame ? 'opacity-100' : 'opacity-50'}`}
                          >
                            {index === currentFrame && (
                              <motion.div 
                                className="h-full bg-white" 
                                initial={{ width: "0%" }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 5 }}
                                onAnimationComplete={nextFrame}
                              />
                            )}
                          </div>
                        ))}
                      </div>
                      
                      {/* Left/Right click areas */}
                      <div className="absolute inset-y-0 left-0 w-1/3" onClick={prevFrame}></div>
                      <div className="absolute inset-y-0 right-0 w-1/3" onClick={nextFrame}></div>
                    </div>
                  </div>
                  
                  <div className="flex justify-center mt-4">
                    <div className="flex space-x-4">
                      <button 
                        onClick={prevFrame} 
                        disabled={currentFrame === 0}
                        className={`px-4 py-2 rounded-md ${currentFrame === 0 ? 'bg-neutral-200 dark:bg-neutral-700 text-neutral-400 dark:text-neutral-500' : 'bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300'}`}
                      >
                        Previous
                      </button>
                      <button 
                        onClick={nextFrame} 
                        disabled={currentFrame === storyFrames.length - 1}
                        className={`px-4 py-2 rounded-md ${currentFrame === storyFrames.length - 1 ? 'bg-neutral-200 dark:bg-neutral-700 text-neutral-400 dark:text-neutral-500' : 'bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300'}`}
                      >
                        Next
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-neutral-200 dark:border-neutral-700 pt-6">
                <h3 className="text-lg font-semibold mb-4 text-neutral-800 dark:text-neutral-200">Download Instructions</h3>
                <p className="text-neutral-600 dark:text-neutral-400 mb-4">To use these stories on Facebook:</p>
                <ol className="list-decimal list-inside text-neutral-600 dark:text-neutral-400 mb-6 space-y-2">
                  <li>Download each frame as an image</li>
                  <li>Upload them in sequence to your Facebook Story</li>
                  <li>Add the "Swipe Up" link to your registration page on the final frame</li>
                </ol>
                <div className="flex justify-center">
                  <Button className="bg-teal-600 hover:bg-teal-700 text-white">
                    <IconDownload className="h-4 w-4 mr-2" />
                    Download Story Frames (ZIP)
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </div>
  );
}
