"use client";

import { Container } from "@/components/container";
import { Background } from "@/components/background";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { Button } from "@/components/button";

export default function Slide82Page() {
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
                Slide 82 of 100
              </span>
            </div>
            
            <div className="flex space-x-2">
              <Button
                as={Link}
                href="/masterclass/slides/slide81"
                className="bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700"
              >
                <IconArrowLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>
              
              <Button
                as={Link}
                href="/masterclass/slides/slide83"
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
                  Success Stories & Case Studies
                </h1>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left">
                    <h3 className="text-xl font-bold text-white mb-4">From Freelancer to Agency Owner</h3>
                    
                    <div className="space-y-4">
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-indigo-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">
                            <span className="text-sm">JS</span>
                          </div>
                          <div>
                            <div className="text-white font-semibold">Jennifer S. - Education Grant Specialist</div>
                            <div className="text-white/80 text-sm">
                              <p className="italic mb-2">"I was a freelance grant writer charging $50/hour and struggling to make ends meet. After implementing the AI-powered systems and premium pricing strategy, I now run a 5-person agency generating $32K/month specializing in education grants."</p>
                              
                              <div className="mt-3 space-y-2">
                                <div className="flex items-center">
                                  <div className="bg-green-500/30 text-green-200 text-xs px-2 py-0.5 rounded mr-2">BEFORE</div>
                                  <p className="text-white/70 text-xs">$3-4K/month as solo freelancer</p>
                                </div>
                                
                                <div className="flex items-center">
                                  <div className="bg-green-500/30 text-green-200 text-xs px-2 py-0.5 rounded mr-2">AFTER</div>
                                  <p className="text-white/70 text-xs">$32K/month agency with 5-person team</p>
                                </div>
                                
                                <div className="flex items-center">
                                  <div className="bg-green-500/30 text-green-200 text-xs px-2 py-0.5 rounded mr-2">TIMELINE</div>
                                  <p className="text-white/70 text-xs">9 months to reach $15K/month, 18 months to $30K+</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-indigo-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">
                            <span className="text-sm">MR</span>
                          </div>
                          <div>
                            <div className="text-white font-semibold">Michael R. - Healthcare Grant Consultant</div>
                            <div className="text-white/80 text-sm">
                              <p className="italic mb-2">"I was working at a non-profit writing grants in-house when I realized I could help multiple organizations. I started my business using the AI systems and premium pricing model, and hit $12K/month within 4 months focusing exclusively on healthcare grants."</p>
                              
                              <div className="mt-3 space-y-2">
                                <div className="flex items-center">
                                  <div className="bg-green-500/30 text-green-200 text-xs px-2 py-0.5 rounded mr-2">BEFORE</div>
                                  <p className="text-white/70 text-xs">$65K/year non-profit employee</p>
                                </div>
                                
                                <div className="flex items-center">
                                  <div className="bg-green-500/30 text-green-200 text-xs px-2 py-0.5 rounded mr-2">AFTER</div>
                                  <p className="text-white/70 text-xs">$12-15K/month solo consultant</p>
                                </div>
                                
                                <div className="flex items-center">
                                  <div className="bg-green-500/30 text-green-200 text-xs px-2 py-0.5 rounded mr-2">TIMELINE</div>
                                  <p className="text-white/70 text-xs">4 months to $10K+/month</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left">
                      <h3 className="text-xl font-bold text-white mb-4">From Zero to Six Figures</h3>
                      
                      <div className="space-y-4">
                        <div className="bg-white/10 rounded-lg p-4">
                          <div className="flex items-start">
                            <div className="bg-violet-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">
                              <span className="text-sm">SL</span>
                            </div>
                            <div>
                              <div className="text-white font-semibold">Sarah L. - Environmental Grant Specialist</div>
                              <div className="text-white/80 text-sm">
                                <p className="italic mb-2">"I had no grant writing experience but a background in environmental science. I followed the roadmap exactly, niched down to environmental grants, and built my business to $8K/month within 6 months as a solo consultant."</p>
                                
                                <div className="mt-3 space-y-2">
                                  <div className="flex items-center">
                                    <div className="bg-green-500/30 text-green-200 text-xs px-2 py-0.5 rounded mr-2">BEFORE</div>
                                    <p className="text-white/70 text-xs">$0/month (career transition)</p>
                                  </div>
                                  
                                  <div className="flex items-center">
                                    <div className="bg-green-500/30 text-green-200 text-xs px-2 py-0.5 rounded mr-2">AFTER</div>
                                    <p className="text-white/70 text-xs">$8K/month solo practice</p>
                                  </div>
                                  
                                  <div className="flex items-center">
                                    <div className="bg-green-500/30 text-green-200 text-xs px-2 py-0.5 rounded mr-2">TIMELINE</div>
                                    <p className="text-white/70 text-xs">6 months to consistent $8K/month</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-4">
                          <div className="flex items-start">
                            <div className="bg-violet-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">
                              <span className="text-sm">DT</span>
                            </div>
                            <div>
                              <div className="text-white font-semibold">David T. - Arts & Culture Grant Agency</div>
                              <div className="text-white/80 text-sm">
                                <p className="italic mb-2">"I was a struggling artist who saw how many arts organizations needed funding. I started offering grant writing services using the AI systems and premium model. Within a year, I built a specialized agency serving arts organizations with $22K/month revenue."</p>
                                
                                <div className="mt-3 space-y-2">
                                  <div className="flex items-center">
                                    <div className="bg-green-500/30 text-green-200 text-xs px-2 py-0.5 rounded mr-2">BEFORE</div>
                                    <p className="text-white/70 text-xs">$2K/month inconsistent income</p>
                                  </div>
                                  
                                  <div className="flex items-center">
                                    <div className="bg-green-500/30 text-green-200 text-xs px-2 py-0.5 rounded mr-2">AFTER</div>
                                    <p className="text-white/70 text-xs">$22K/month agency with 3-person team</p>
                                  </div>
                                  
                                  <div className="flex items-center">
                                    <div className="bg-green-500/30 text-green-200 text-xs px-2 py-0.5 rounded mr-2">TIMELINE</div>
                                    <p className="text-white/70 text-xs">5 months to $10K/month, 12 months to $20K+</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left">
                      <h3 className="text-xl font-bold text-white mb-4">Client Success Stories</h3>
                      
                      <div className="space-y-3">
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-blue-500/50 rounded-full p-1 mr-2 mt-0.5">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-white font-semibold">Community Health Center</div>
                              <div className="text-white/80 text-xs">
                                <p><span className="text-blue-300 font-medium">Investment:</span> $12,000 for 6-month program</p>
                                <p><span className="text-blue-300 font-medium">Result:</span> $1.2M in healthcare grants secured</p>
                                <p><span className="text-blue-300 font-medium">ROI:</span> 100x return on investment</p>
                                <p><span className="text-blue-300 font-medium">Timeline:</span> First grant secured within 60 days</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-blue-500/50 rounded-full p-1 mr-2 mt-0.5">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-white font-semibold">Educational Technology Startup</div>
                              <div className="text-white/80 text-xs">
                                <p><span className="text-blue-300 font-medium">Investment:</span> $8,500 for 3-month program</p>
                                <p><span className="text-blue-300 font-medium">Result:</span> $450K SBIR grant secured</p>
                                <p><span className="text-blue-300 font-medium">ROI:</span> 53x return on investment</p>
                                <p><span className="text-blue-300 font-medium">Timeline:</span> Grant secured within 90 days</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-blue-500/50 rounded-full p-1 mr-2 mt-0.5">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-white font-semibold">Arts & Culture Non-Profit</div>
                              <div className="text-white/80 text-xs">
                                <p><span className="text-blue-300 font-medium">Investment:</span> $15,000 for annual retainer</p>
                                <p><span className="text-blue-300 font-medium">Result:</span> $850K in foundation grants</p>
                                <p><span className="text-blue-300 font-medium">ROI:</span> 57x return on investment</p>
                                <p><span className="text-blue-300 font-medium">Timeline:</span> Multiple grants over 12 months</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-4xl mx-auto">
                  <h3 className="text-2xl font-bold text-white mb-4">Common Success Patterns</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="bg-indigo-500/30 rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-3">
                        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="text-white font-medium mb-2 text-center">Niche Specialization</div>
                      <div className="text-white/70 text-sm">
                        <p>All successful grant writers focused on a specific niche (education, healthcare, arts, environment) rather than being generalists.</p>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="bg-indigo-500/30 rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-3">
                        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="text-white font-medium mb-2 text-center">Premium Pricing</div>
                      <div className="text-white/70 text-sm">
                        <p>All started with premium pricing ($5K+ packages) rather than hourly rates, allowing them to focus on fewer, higher-quality clients.</p>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="bg-indigo-500/30 rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-3">
                        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <div className="text-white font-medium mb-2 text-center">AI Leverage</div>
                      <div className="text-white/70 text-sm">
                        <p>All extensively used AI tools to increase capacity, improve quality, and deliver results faster than competitors.</p>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="bg-indigo-500/30 rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-3">
                        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <div className="text-white font-medium mb-2 text-center">Strategic Partnerships</div>
                      <div className="text-white/70 text-sm">
                        <p>All built referral partnerships with complementary service providers for consistent client flow.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 bg-yellow-400/20 backdrop-blur-sm rounded-xl p-4 max-w-3xl mx-auto">
                  <p className="text-white text-lg">
                    <span className="font-semibold">Key Takeaway:</span> These success stories demonstrate that building a $10K+/month grant writing business is achievable regardless of your starting point. Whether you're a seasoned grant writer or new to the field, following the proven framework of niche specialization, premium pricing, AI leverage, and strategic partnerships can help you build a thriving business within 4-6 months.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">
                Slide 82: Success Stories & Case Studies
              </h2>
              
              <div className="prose prose-blue dark:prose-invert max-w-none">
                <p>This slide presents real-world success stories and case studies that demonstrate the effectiveness of the grant writing business model presented in the masterclass. It provides concrete examples of individuals who have successfully implemented the strategies and achieved significant financial results. The key elements include:</p>
                
                <ul>
                  <li><strong>From Freelancer to Agency Owner:</strong> Two detailed case studies of individuals who transformed their careers from freelancers to successful agency owners</li>
                  <li><strong>From Zero to Six Figures:</strong> Two inspiring stories of individuals who started with little or no grant writing experience and built six-figure businesses</li>
                  <li><strong>Client Success Stories:</strong> Three specific examples of client results, including investment amounts, funding secured, ROI, and timelines</li>
                  <li><strong>Common Success Patterns:</strong> Four recurring patterns observed across all success stories: niche specialization, premium pricing, AI leverage, and strategic partnerships</li>
                  <li><strong>Key Takeaway:</strong> Strategic emphasis on the achievability of success regardless of starting point</li>
                </ul>
                
                <p>This slide builds on the roadmap presented in the previous slide by providing concrete examples of individuals who have successfully implemented the strategies. The "From Freelancer to Agency Owner" section presents two detailed case studies: Jennifer S., who transformed from a $50/hour freelancer to running a 5-person agency generating $32K/month specializing in education grants, and Michael R., who left his non-profit job to build a $12-15K/month healthcare grant consulting business within 4 months. The "From Zero to Six Figures" section shares two inspiring stories: Sarah L., who had no grant writing experience but leveraged her environmental science background to build an $8K/month practice within 6 months, and David T., who transitioned from being a struggling artist to running a $22K/month arts grant agency within a year. The "Client Success Stories" section provides three specific examples of client results, including a community health center that secured $1.2M in grants from a $12K investment, an educational technology startup that secured a $450K SBIR grant from an $8.5K investment, and an arts non-profit that secured $850K in foundation grants from a $15K annual retainer. The "Common Success Patterns" section identifies four recurring patterns observed across all success stories: niche specialization rather than being generalists, premium pricing that allows focus on fewer high-quality clients, AI leverage that increases capacity and quality, and strategic partnerships that provide consistent client flow. The key takeaway emphasizes that building a $10K+/month grant writing business is achievable regardless of starting point, reinforcing the accessibility of the business model presented throughout the masterclass. This slide provides participants with concrete proof that the strategies work, increasing their confidence in implementing the roadmap presented in the previous slide.</p>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-between">
            <Button
              as={Link}
              href="/masterclass/slides/slide81"
              className="bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700"
            >
              <IconArrowLeft className="h-4 w-4 mr-2" />
              Previous Slide
            </Button>
            
            <Button
              as={Link}
              href="/masterclass/slides/slide83"
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
