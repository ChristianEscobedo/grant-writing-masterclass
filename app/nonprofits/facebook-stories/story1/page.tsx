"use client";

import { Container } from "@/components/container";
import { Background } from "@/components/background";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconArrowLeft, IconDownload } from "@tabler/icons-react";
import { Button } from "@/components/button";
import { useState } from "react";

export default function NonprofitFacebookStory1Page() {
  const storyFrames = [
    {
      background: "bg-emerald-600",
      content: (
        <div className="text-white text-center p-6">
          <h2 className="text-3xl font-bold mb-4">7 Hidden Reasons</h2>
          <h3 className="text-xl mb-6">Why Most Grant Applications Get Rejected</h3>
          <p className="text-sm opacity-80">Swipe up to discover why your applications might be getting rejected</p>
        </div>
      )
    },
    {
      background: "bg-emerald-700",
      content: (
        <div className="text-white p-6">
          <h2 className="text-xl font-bold mb-4 text-center">Reason #1</h2>
          <h3 className="text-2xl font-bold mb-4 text-center">Misalignment with Funder Priorities</h3>
          <div className="bg-white/20 rounded-lg p-4 mb-4">
            <p className="text-sm">Most organizations focus only on the published guidelines, missing the unstated priorities that influence decisions.</p>
          </div>
          <p className="text-xs text-center opacity-80">Swipe to see the next reason</p>
        </div>
      )
    },
    {
      background: "bg-emerald-800",
      content: (
        <div className="text-white p-6">
          <h2 className="text-xl font-bold mb-4 text-center">Reason #2</h2>
          <h3 className="text-2xl font-bold mb-4 text-center">Weak Outcome Metrics</h3>
          <div className="bg-white/20 rounded-lg p-4 mb-4">
            <p className="text-sm">Applications focus on activities and outputs rather than meaningful, measurable outcomes that resonate with funders.</p>
          </div>
          <p className="text-xs text-center opacity-80">Swipe to see the next reason</p>
        </div>
      )
    },
    {
      background: "bg-emerald-900",
      content: (
        <div className="text-white p-6">
          <h2 className="text-xl font-bold mb-4 text-center">Reason #3</h2>
          <h3 className="text-2xl font-bold mb-4 text-center">Inadequate Need Statement</h3>
          <div className="bg-white/20 rounded-lg p-4 mb-4">
            <p className="text-sm">Organizations fail to provide compelling evidence of the need and their unique position to address it.</p>
          </div>
          <p className="text-xs text-center opacity-80">Swipe to see the next reason</p>
        </div>
      )
    },
    {
      background: "bg-teal-700",
      content: (
        <div className="text-white p-6">
          <h2 className="text-xl font-bold mb-4 text-center">Reason #4</h2>
          <h3 className="text-2xl font-bold mb-4 text-center">Weak Budget Justification</h3>
          <div className="bg-white/20 rounded-lg p-4 mb-4">
            <p className="text-sm">Budgets lack sufficient detail or clear alignment with the proposed activities and outcomes.</p>
          </div>
          <p className="text-xs text-center opacity-80">Swipe to see the next reason</p>
        </div>
      )
    },
    {
      background: "bg-teal-800",
      content: (
        <div className="text-white p-6">
          <h2 className="text-xl font-bold mb-4 text-center">Reason #5</h2>
          <h3 className="text-2xl font-bold mb-4 text-center">Unconvincing Sustainability Plan</h3>
          <div className="bg-white/20 rounded-lg p-4 mb-4">
            <p className="text-sm">Applications fail to address how the project will continue after grant funding ends or how it will create lasting impact.</p>
          </div>
          <p className="text-xs text-center opacity-80">Swipe to see the next reason</p>
        </div>
      )
    },
    {
      background: "bg-teal-900",
      content: (
        <div className="text-white p-6">
          <h2 className="text-xl font-bold mb-4 text-center">Reason #6</h2>
          <h3 className="text-2xl font-bold mb-4 text-center">Weak Organizational Capacity</h3>
          <div className="bg-white/20 rounded-lg p-4 mb-4">
            <p className="text-sm">Applications don't adequately demonstrate the organization's ability to successfully implement the proposed project.</p>
          </div>
          <p className="text-xs text-center opacity-80">Swipe to see the final reason</p>
        </div>
      )
    },
    {
      background: "bg-blue-700",
      content: (
        <div className="text-white p-6">
          <h2 className="text-xl font-bold mb-4 text-center">Reason #7</h2>
          <h3 className="text-2xl font-bold mb-4 text-center">Poor Narrative Structure</h3>
          <div className="bg-white/20 rounded-lg p-4 mb-4">
            <p className="text-sm">Applications are difficult to read, poorly organized, or fail to tell a compelling story about the organization's work.</p>
          </div>
          <p className="text-xs text-center opacity-80">Swipe to learn how to fix these issues</p>
        </div>
      )
    },
    {
      background: "bg-gradient-to-b from-emerald-600 to-blue-700",
      content: (
        <div className="text-white p-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Learn How to Fix These Issues</h2>
          <div className="bg-white/20 rounded-lg p-4 mb-6">
            <p className="text-sm mb-4">Join our FREE Masterclass on May 3rd at 2:00 PM EST</p>
            <p className="text-xs mb-2">• Discover the exact strategies that increase grant success rates</p>
            <p className="text-xs mb-2">• Learn how to uncover funders' unstated priorities</p>
            <p className="text-xs mb-2">• Get templates for creating compelling applications</p>
          </div>
          <div className="bg-white text-emerald-700 rounded-full py-2 px-4 font-bold inline-block">
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
                  Day 1
                </span>
                <span className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-xs px-2 py-1 rounded">
                  Facebook Story
                </span>
              </div>

              <div className="mb-6">
                <h1 className="text-2xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">7 Hidden Reasons Grant Applications Get Rejected</h1>
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
                      <li><strong>Capture attention</strong> with a compelling problem statement</li>
                      <li><strong>Provide valuable insights</strong> in an easily digestible format</li>
                      <li><strong>Create curiosity</strong> about solutions to common problems</li>
                      <li><strong>Position the masterclass</strong> as the source for comprehensive solutions</li>
                    </ul>
                    
                    <p>The story uses a problem-focused approach that resonates with non-profit organizations struggling with grant applications. By breaking down the seven common reasons for rejection, it validates their experiences while creating desire for solutions. The clear call to action at the end provides a natural next step.</p>
                    
                    <h3>Usage Instructions</h3>
                    <p>Post this story on Day 1 to complement the more detailed Facebook post. The visual format makes the information more accessible and shareable. Use the "Register Now" swipe-up link to direct viewers directly to the registration page.</p>
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
                        className={`px-4 py-2 rounded-md ${currentFrame === 0 ? 'bg-neutral-200 dark:bg-neutral-700 text-neutral-400 dark:text-neutral-500' : 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300'}`}
                      >
                        Previous
                      </button>
                      <button 
                        onClick={nextFrame} 
                        disabled={currentFrame === storyFrames.length - 1}
                        className={`px-4 py-2 rounded-md ${currentFrame === storyFrames.length - 1 ? 'bg-neutral-200 dark:bg-neutral-700 text-neutral-400 dark:text-neutral-500' : 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300'}`}
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
                  <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
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
