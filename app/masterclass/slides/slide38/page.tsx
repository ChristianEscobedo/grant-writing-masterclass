"use client";

import { Container } from "@/components/container";
import { Background } from "@/components/background";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconArrowLeft, IconArrowRight, IconDownload } from "@tabler/icons-react";
import { Button } from "@/components/button";

export default function Slide38Page() {
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
                Slide 38 of 100
              </span>
            </div>
            
            <div className="flex space-x-2">
              <Button
                as={Link}
                href="/masterclass/slides/slide37"
                className="bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700"
              >
                <IconArrowLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>
              
              <Button
                as={Link}
                href="/masterclass/slides/slide39"
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
            <div className="aspect-[16/9] relative bg-gradient-to-br from-orange-600 to-red-600 flex items-center justify-center p-12">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('/pattern-dots.svg')] opacity-10"></div>
              
              <div className="relative z-10">
                <div className="text-center mb-8">
                  <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                    Strategic Partnerships for Client Acquisition
                  </h1>
                  <p className="text-xl text-white/90 max-w-3xl mx-auto">
                    How to leverage partnerships to access a steady stream of pre-qualified clients
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-8 max-w-5xl mx-auto">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                    <h3 className="text-xl font-bold text-white mb-4">Top 5 Strategic Partners</h3>
                    
                    <div className="space-y-4">
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-orange-500 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">1</div>
                          <div>
                            <div className="text-white font-semibold">Non-Profit Accountants & CPAs</div>
                            <div className="text-white/80 text-sm">
                              <p className="mb-1">They work with organizations that need funding but don't offer grant services.</p>
                              <p className="text-white/70 italic text-xs">Value Exchange: Referral fees or reciprocal referrals</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-orange-500 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">2</div>
                          <div>
                            <div className="text-white font-semibold">Board Development Consultants</div>
                            <div className="text-white/80 text-sm">
                              <p className="mb-1">They help organizations strengthen governance but don't focus on funding.</p>
                              <p className="text-white/70 italic text-xs">Value Exchange: Co-marketing or service bundling</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-orange-500 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">3</div>
                          <div>
                            <div className="text-white font-semibold">Marketing Agencies</div>
                            <div className="text-white/80 text-sm">
                              <p className="mb-1">They help organizations with branding and visibility but not grant funding.</p>
                              <p className="text-white/70 italic text-xs">Value Exchange: White-label services or commission structure</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-orange-500 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">4</div>
                          <div>
                            <div className="text-white font-semibold">Program Evaluation Specialists</div>
                            <div className="text-white/80 text-sm">
                              <p className="mb-1">They help measure program impact but don't secure initial funding.</p>
                              <p className="text-white/70 italic text-xs">Value Exchange: Collaborative proposals or joint services</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-orange-500 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">5</div>
                          <div>
                            <div className="text-white font-semibold">Fundraising Consultants</div>
                            <div className="text-white/80 text-sm">
                              <p className="mb-1">They focus on individual donors and events but often avoid grant writing.</p>
                              <p className="text-white/70 italic text-xs">Value Exchange: Complementary service offering or revenue share</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                      <h3 className="text-xl font-bold text-white mb-4">Partnership Development Process</h3>
                      
                      <div className="space-y-3">
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-green-500 rounded-full w-6 h-6 flex items-center justify-center text-white font-bold mr-2">1</div>
                            <div>
                              <div className="text-white font-semibold">Identify & Research</div>
                              <div className="text-white/80 text-sm">Find 3-5 potential partners in your area who serve your ideal clients</div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-green-500 rounded-full w-6 h-6 flex items-center justify-center text-white font-bold mr-2">2</div>
                            <div>
                              <div className="text-white font-semibold">Initial Outreach</div>
                              <div className="text-white/80 text-sm">Reach out with a value-first approach, offering something of value</div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-green-500 rounded-full w-6 h-6 flex items-center justify-center text-white font-bold mr-2">3</div>
                            <div>
                              <div className="text-white font-semibold">Exploration Meeting</div>
                              <div className="text-white/80 text-sm">Discuss how you can help each other's clients and business models</div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-green-500 rounded-full w-6 h-6 flex items-center justify-center text-white font-bold mr-2">4</div>
                            <div>
                              <div className="text-white font-semibold">Formalize Agreement</div>
                              <div className="text-white/80 text-sm">Create a simple partnership agreement outlining terms and expectations</div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-green-500 rounded-full w-6 h-6 flex items-center justify-center text-white font-bold mr-2">5</div>
                            <div>
                              <div className="text-white font-semibold">Nurture Relationship</div>
                              <div className="text-white/80 text-sm">Regular check-ins, shared resources, and mutual promotion</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                      <h3 className="text-xl font-bold text-white mb-4">Partnership Outreach Template</h3>
                      
                      <div className="bg-white/10 rounded-lg p-4 text-white/90 text-sm">
                        <p className="mb-3"><strong>Subject:</strong> Collaboration Opportunity for [Their Company] Clients</p>
                        
                        <p className="mb-2">Hi [Name],</p>
                        
                        <p className="mb-2">I came across [Their Company] while researching top [their industry] firms in [location], and I was impressed by your work with [specific client or project they've mentioned publicly].</p>
                        
                        <p className="mb-2">I'm reaching out because I help non-profit organizations secure grant funding, and I've noticed that many [their type of clients] often need grant writing support in addition to [their service].</p>
                        
                        <p className="mb-2">I'd love to explore how we might collaborate to provide more comprehensive support to the organizations we serve. As a starting point, I've created a resource on "Top Grant Opportunities for [their client type]" that you're welcome to share with your clients.</p>
                        
                        <p className="mb-2">Would you be open to a 20-minute call to discuss potential ways we could work together to better serve our respective clients?</p>
                        
                        <p className="mb-2">Best regards,<br />[Your Name]</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-xl p-4 max-w-3xl mx-auto">
                  <p className="text-white text-lg">
                    <span className="font-semibold">Key Metric:</span> One strong strategic partnership can generate 3-5 qualified leads per month. With 3-5 active partnerships, you can build a consistent pipeline of 10-15 warm leads monthly.
                  </p>
                </div>
                
                <div className="mt-4 bg-yellow-400/20 backdrop-blur-sm rounded-xl p-4 max-w-3xl mx-auto">
                  <p className="text-white text-lg">
                    <span className="font-semibold">Action Step:</span> Identify 5 potential strategic partners in your area. Research them thoroughly and send personalized outreach emails to the top 3 this week.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">
                Slide 38: Strategic Partnerships for Client Acquisition
              </h2>
              
              <div className="prose prose-blue dark:prose-invert max-w-none">
                <p>This slide provides a comprehensive framework for developing strategic partnerships to generate a steady stream of client referrals. The key elements include:</p>
                
                <ul>
                  <li><strong>Top 5 Partners:</strong> Specific types of professionals who make ideal strategic partners</li>
                  <li><strong>Value Exchange:</strong> Clear articulation of what each partner gets from the relationship</li>
                  <li><strong>5-Step Process:</strong> Structured approach to developing partnerships</li>
                  <li><strong>Outreach Template:</strong> Ready-to-use email template for contacting potential partners</li>
                  <li><strong>Key Metric:</strong> Specific goal of "3-5 qualified leads per month" per partnership</li>
                  <li><strong>Action Step:</strong> Practical next step to "Identify 5 potential strategic partners" with implementation timeline</li>
                </ul>
                
                <p>This slide addresses a powerful client acquisition strategy that reduces the need for cold outreach: strategic partnerships. The specific list of potential partners provides clear direction on who to target, while the value exchange insights help craft compelling partnership proposals. The 5-step process creates a structured approach to partnership development, while the outreach template eliminates guesswork in making initial contact. The key metric creates a clear goal to aim for, showing the significant impact that just a few partnerships can have on lead generation. The action step creates immediate implementation with specific tasks and a timeline.</p>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-between">
            <Button
              as={Link}
              href="/masterclass/slides/slide37"
              className="bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700"
            >
              <IconArrowLeft className="h-4 w-4 mr-2" />
              Previous Slide
            </Button>
            
            <Button
              as={Link}
              href="/masterclass/slides/slide39"
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
