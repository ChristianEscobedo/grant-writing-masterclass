"use client";

import { Container } from "@/components/container";
import { Background } from "@/components/background";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { Button } from "@/components/button";

export default function Slide83Page() {
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
                Slide 83 of 100
              </span>
            </div>
            
            <div className="flex space-x-2">
              <Button
                as={Link}
                href="/masterclass/slides/slide82"
                className="bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700"
              >
                <IconArrowLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>
              
              <Button
                as={Link}
                href="/masterclass/slides/slide84"
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
            <div className="aspect-[16/9] relative bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center p-12">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('/pattern-dots.svg')] opacity-10"></div>
              
              <div className="relative z-10 text-center">
                <div className="bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full text-white text-sm font-medium mb-6 inline-block">
                  PART 11: MASTERCLASS CONCLUSION
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                  Overcoming Obstacles & Mindset Mastery
                </h1>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left">
                    <h3 className="text-xl font-bold text-white mb-4">Common Obstacles & Solutions</h3>
                    
                    <div className="space-y-4">
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-red-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">
                            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                          </div>
                          <div>
                            <div className="text-white font-semibold">Imposter Syndrome</div>
                            <div className="text-white/80 text-sm">
                              <p className="mb-2">"Who am I to charge premium rates for grant writing? I don't have enough experience/credentials."</p>
                              
                              <div className="bg-white/10 p-3 rounded-lg">
                                <p className="text-white/90 text-sm font-medium">Solution:</p>
                                <ul className="list-disc pl-5 text-white/80 text-xs space-y-1 mt-1">
                                  <li>Focus on the value and results you deliver, not your credentials</li>
                                  <li>Start with a specific niche where you have knowledge or interest</li>
                                  <li>Use AI tools to enhance your capabilities from day one</li>
                                  <li>Partner with subject matter experts when needed</li>
                                  <li>Remember: clients care about results, not your background</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-red-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">
                            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                          </div>
                          <div>
                            <div className="text-white font-semibold">Fear of Rejection</div>
                            <div className="text-white/80 text-sm">
                              <p className="mb-2">"I'm afraid to reach out to potential clients or partners because they might say no or think my prices are too high."</p>
                              
                              <div className="bg-white/10 p-3 rounded-lg">
                                <p className="text-white/90 text-sm font-medium">Solution:</p>
                                <ul className="list-disc pl-5 text-white/80 text-xs space-y-1 mt-1">
                                  <li>Adopt a "service not sales" mindset - you're helping, not selling</li>
                                  <li>Set rejection goals (aim for 10 "no's" per week)</li>
                                  <li>Use proven outreach scripts and templates</li>
                                  <li>Focus on organizations that clearly need funding</li>
                                  <li>Remember: rejection of your offer is not rejection of you</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-red-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">
                            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                          </div>
                          <div>
                            <div className="text-white font-semibold">Overwhelm & Analysis Paralysis</div>
                            <div className="text-white/80 text-sm">
                              <p className="mb-2">"There's so much to learn and do. I don't know where to start or which steps to take first."</p>
                              
                              <div className="bg-white/10 p-3 rounded-lg">
                                <p className="text-white/90 text-sm font-medium">Solution:</p>
                                <ul className="list-disc pl-5 text-white/80 text-xs space-y-1 mt-1">
                                  <li>Follow the 30-day action plan exactly as outlined</li>
                                  <li>Focus on revenue-generating activities first</li>
                                  <li>Limit learning to 20% of your time, action to 80%</li>
                                  <li>Set just 1-3 priorities each day</li>
                                  <li>Remember: imperfect action beats perfect inaction</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left">
                      <h3 className="text-xl font-bold text-white mb-4">Mindset Shifts for Success</h3>
                      
                      <div className="space-y-3">
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-violet-500/50 rounded-full p-1 mr-2 mt-0.5">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-white font-semibold">From Service Provider to Strategic Partner</div>
                              <div className="text-white/80 text-xs">
                                <p><span className="text-violet-300 font-medium">Old Mindset:</span> "I write grants for clients."</p>
                                <p><span className="text-violet-300 font-medium">New Mindset:</span> "I'm a strategic funding partner who helps organizations achieve their mission through grants."</p>
                                <p className="mt-1">This shift positions you as a high-value advisor rather than a commodity service provider, justifying premium rates and creating deeper client relationships.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-violet-500/50 rounded-full p-1 mr-2 mt-0.5">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-white font-semibold">From Hourly Billing to Value Pricing</div>
                              <div className="text-white/80 text-xs">
                                <p><span className="text-violet-300 font-medium">Old Mindset:</span> "My time is worth $X per hour."</p>
                                <p><span className="text-violet-300 font-medium">New Mindset:</span> "The value I create is worth $Y to my clients, regardless of the time it takes."</p>
                                <p className="mt-1">This shift decouples your income from your time, allowing you to leverage AI and systems to increase efficiency while maintaining or increasing your fees.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-violet-500/50 rounded-full p-1 mr-2 mt-0.5">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-white font-semibold">From Scarcity to Abundance</div>
                              <div className="text-white/80 text-xs">
                                <p><span className="text-violet-300 font-medium">Old Mindset:</span> "There's not enough clients/money/opportunity to go around."</p>
                                <p><span className="text-violet-300 font-medium">New Mindset:</span> "There are billions in grant funding available and thousands of organizations that need help accessing it."</p>
                                <p className="mt-1">This shift eliminates desperate energy in sales conversations and allows you to confidently turn away poor-fit clients, knowing better opportunities are available.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-violet-500/50 rounded-full p-1 mr-2 mt-0.5">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-white font-semibold">From Perfectionism to Progress</div>
                              <div className="text-white/80 text-xs">
                                <p><span className="text-violet-300 font-medium">Old Mindset:</span> "I need everything to be perfect before I can launch/scale/charge more."</p>
                                <p><span className="text-violet-300 font-medium">New Mindset:</span> "Done is better than perfect. I can improve and iterate as I go."</p>
                                <p className="mt-1">This shift accelerates your progress by removing self-imposed barriers and allowing you to learn and improve through real-world experience rather than endless preparation.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left">
                      <h3 className="text-xl font-bold text-white mb-4">Daily Success Habits</h3>
                      
                      <div className="space-y-3">
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-blue-500/50 rounded-full p-1 mr-2 mt-0.5">
                              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-white font-semibold">Morning Power Hour</div>
                              <div className="text-white/80 text-xs">
                                <p>Dedicate the first hour of each day to high-impact business building activities:</p>
                                <ul className="list-disc pl-5 space-y-0.5 mt-1">
                                  <li>15 min: Review goals and set daily priorities</li>
                                  <li>15 min: Mindset work (affirmations, visualization)</li>
                                  <li>30 min: Revenue-generating outreach</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-blue-500/50 rounded-full p-1 mr-2 mt-0.5">
                              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-white font-semibold">Daily Outreach Quota</div>
                              <div className="text-white/80 text-xs">
                                <p>Commit to a minimum number of outreach activities each day:</p>
                                <ul className="list-disc pl-5 space-y-0.5 mt-1">
                                  <li>5 personalized emails to potential clients</li>
                                  <li>3 follow-up calls or messages</li>
                                  <li>2 connection requests with potential partners</li>
                                  <li>1 piece of valuable content shared</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-blue-500/50 rounded-full p-1 mr-2 mt-0.5">
                              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-white font-semibold">Weekly Review & Planning</div>
                              <div className="text-white/80 text-xs">
                                <p>Schedule 90 minutes each week to review progress and plan ahead:</p>
                                <ul className="list-disc pl-5 space-y-0.5 mt-1">
                                  <li>Review key metrics and progress toward goals</li>
                                  <li>Identify what worked and what didn't</li>
                                  <li>Adjust strategies based on results</li>
                                  <li>Plan the upcoming week's priorities</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-4xl mx-auto">
                  <h3 className="text-2xl font-bold text-white mb-4">Overcoming Setbacks: The Resilience Framework</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="bg-indigo-500/30 rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-3">
                        <div className="text-white font-bold">1</div>
                      </div>
                      <div className="text-white font-medium mb-2 text-center">Acknowledge</div>
                      <div className="text-white/70 text-sm">
                        <p>Recognize the setback without judgment or blame. Accept that challenges are part of the entrepreneurial journey and don't reflect your worth or potential.</p>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="bg-indigo-500/30 rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-3">
                        <div className="text-white font-bold">2</div>
                      </div>
                      <div className="text-white font-medium mb-2 text-center">Analyze</div>
                      <div className="text-white/70 text-sm">
                        <p>Objectively examine what happened and why. Identify the factors within your control and those outside it. Look for patterns and lessons to be learned.</p>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="bg-indigo-500/30 rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-3">
                        <div className="text-white font-bold">3</div>
                      </div>
                      <div className="text-white font-medium mb-2 text-center">Adjust</div>
                      <div className="text-white/70 text-sm">
                        <p>Make strategic changes based on your analysis. Modify your approach, systems, or messaging as needed. Seek feedback or guidance if necessary.</p>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="bg-indigo-500/30 rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-3">
                        <div className="text-white font-bold">4</div>
                      </div>
                      <div className="text-white font-medium mb-2 text-center">Advance</div>
                      <div className="text-white/70 text-sm">
                        <p>Take immediate action with your adjusted approach. Maintain momentum despite the setback. Celebrate the resilience you've demonstrated by persisting.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 bg-yellow-400/20 backdrop-blur-sm rounded-xl p-4 max-w-3xl mx-auto">
                  <p className="text-white text-lg">
                    <span className="font-semibold">Key Takeaway:</span> Your mindset is the foundation of your business success. By proactively addressing common obstacles, adopting empowering mindset shifts, implementing daily success habits, and developing resilience in the face of setbacks, you can overcome the internal barriers that prevent most people from building a successful grant writing business.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">
                Slide 83: Overcoming Obstacles & Mindset Mastery
              </h2>
              
              <div className="prose prose-blue dark:prose-invert max-w-none">
                <p>This slide addresses the psychological and emotional aspects of building a successful grant writing business. It provides practical strategies for overcoming common obstacles, adopting empowering mindset shifts, implementing daily success habits, and developing resilience in the face of setbacks. The key elements include:</p>
                
                <ul>
                  <li><strong>Common Obstacles & Solutions:</strong> Detailed examination of three major psychological barriers—imposter syndrome, fear of rejection, and overwhelm—with specific, actionable solutions for each</li>
                  <li><strong>Mindset Shifts for Success:</strong> Four transformative mindset shifts that facilitate business growth, from service provider to strategic partner, hourly billing to value pricing, scarcity to abundance, and perfectionism to progress</li>
                  <li><strong>Daily Success Habits:</strong> Three specific daily and weekly practices that build momentum and consistency: morning power hour, daily outreach quota, and weekly review and planning</li>
                  <li><strong>Overcoming Setbacks:</strong> Four-step resilience framework for handling inevitable challenges: acknowledge, analyze, adjust, and advance</li>
                  <li><strong>Key Takeaway:</strong> Strategic emphasis on mindset as the foundation of business success</li>
                </ul>
                
                <p>This slide builds on the roadmap and success stories presented in previous slides by addressing the internal barriers that often prevent implementation. The common obstacles section examines three major psychological barriers: imposter syndrome ("Who am I to charge premium rates?"), fear of rejection ("I'm afraid clients will say no"), and overwhelm ("There's so much to learn and do"), providing specific, actionable solutions for each. The mindset shifts section presents four transformative perspectives that facilitate business growth: shifting from service provider to strategic partner (positioning as a high-value advisor), from hourly billing to value pricing (decoupling income from time), from scarcity to abundance (eliminating desperate energy in sales), and from perfectionism to progress (accelerating implementation through iteration). The daily success habits section outlines three specific practices that build momentum and consistency: a morning power hour dedicated to high-impact activities, a daily outreach quota that ensures consistent client acquisition efforts, and a weekly review and planning session that promotes strategic thinking and adjustment. The resilience framework provides a four-step process for handling inevitable setbacks: acknowledge the challenge without judgment, analyze what happened objectively, adjust the approach based on lessons learned, and advance by taking immediate action. The key takeaway emphasizes that mindset is the foundation of business success, positioning psychological and emotional mastery as essential components of building a successful grant writing business. This slide provides participants with practical strategies for overcoming the internal barriers that often prevent implementation of the business strategies presented throughout the masterclass.</p>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-between">
            <Button
              as={Link}
              href="/masterclass/slides/slide82"
              className="bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700"
            >
              <IconArrowLeft className="h-4 w-4 mr-2" />
              Previous Slide
            </Button>
            
            <Button
              as={Link}
              href="/masterclass/slides/slide84"
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
