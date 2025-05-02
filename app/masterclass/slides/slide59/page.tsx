"use client";

import { Container } from "@/components/container";
import { Background } from "@/components/background";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { Button } from "@/components/button";

export default function Slide59Page() {
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
                Slide 59 of 100
              </span>
            </div>
            
            <div className="flex space-x-2">
              <Button
                as={Link}
                href="/masterclass/slides/slide58"
                className="bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700"
              >
                <IconArrowLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>
              
              <Button
                as={Link}
                href="/masterclass/slides/slide60"
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
            <div className="aspect-[16/9] relative bg-gradient-to-br from-orange-600 to-pink-600 flex items-center justify-center p-12">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('/pattern-dots.svg')] opacity-10"></div>
              
              <div className="relative z-10 text-center">
                <div className="bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full text-white text-sm font-medium mb-6 inline-block">
                  PART 6: CLIENT ACQUISITION
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                  Pillar 3: Strategic Partnerships
                </h1>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left">
                    <h3 className="text-xl font-bold text-white mb-4">Top 5 Strategic Partners</h3>
                    
                    <div className="space-y-4">
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-red-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">1</div>
                          <div>
                            <div className="text-white font-semibold">Accountants & Bookkeepers</div>
                            <div className="text-white/80 text-sm">
                              <p>Already work with businesses needing funding</p>
                              <p className="text-white/60 text-xs mt-1">Have established trust and financial visibility</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-red-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">2</div>
                          <div>
                            <div className="text-white font-semibold">Business Consultants</div>
                            <div className="text-white/80 text-sm">
                              <p>Advise clients on growth strategies requiring capital</p>
                              <p className="text-white/60 text-xs mt-1">Can position grants as part of strategic planning</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-red-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">3</div>
                          <div>
                            <div className="text-white font-semibold">Industry Associations</div>
                            <div className="text-white/80 text-sm">
                              <p>Direct access to entire industries (healthcare, education, etc.)</p>
                              <p className="text-white/60 text-xs mt-1">Can position you as the preferred grant expert</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-red-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">4</div>
                          <div>
                            <div className="text-white font-semibold">Chamber of Commerce</div>
                            <div className="text-white/80 text-sm">
                              <p>Access to local businesses across multiple industries</p>
                              <p className="text-white/60 text-xs mt-1">Opportunity for speaking engagements and workshops</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-red-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">5</div>
                          <div>
                            <div className="text-white font-semibold">Economic Development Agencies</div>
                            <div className="text-white/80 text-sm">
                              <p>Focused on helping local businesses access funding</p>
                              <p className="text-white/60 text-xs mt-1">Can refer clients who don't qualify for their programs</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left">
                      <h3 className="text-xl font-bold text-white mb-4">Partnership Development Process</h3>
                      
                      <div className="space-y-3">
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-orange-500/50 rounded-full p-1 mr-2 mt-0.5">
                              <span className="text-white text-xs font-bold">1</span>
                            </div>
                            <div>
                              <div className="text-white font-semibold">Initial Outreach</div>
                              <div className="text-white/80 text-xs">
                                <p>Focus on mutual benefit and complementary services</p>
                                <p>Personalize based on their specific client base</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-orange-500/50 rounded-full p-1 mr-2 mt-0.5">
                              <span className="text-white text-xs font-bold">2</span>
                            </div>
                            <div>
                              <div className="text-white font-semibold">Value Demonstration</div>
                              <div className="text-white/80 text-xs">
                                <p>Offer a free grant opportunity assessment for one of their clients</p>
                                <p>Share case studies relevant to their industry</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-orange-500/50 rounded-full p-1 mr-2 mt-0.5">
                              <span className="text-white text-xs font-bold">3</span>
                            </div>
                            <div>
                              <div className="text-white font-semibold">Partnership Structure</div>
                              <div className="text-white/80 text-xs">
                                <p>Establish clear referral process and tracking system</p>
                                <p>Create co-branded materials for their clients</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-orange-500/50 rounded-full p-1 mr-2 mt-0.5">
                              <span className="text-white text-xs font-bold">4</span>
                            </div>
                            <div>
                              <div className="text-white font-semibold">Ongoing Nurturing</div>
                              <div className="text-white/80 text-xs">
                                <p>Regular updates on grant opportunities for their clients</p>
                                <p>Quarterly success reports and partnership reviews</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left">
                      <h3 className="text-xl font-bold text-white mb-4">Referral Commission Structures</h3>
                      
                      <div className="space-y-4">
                        <div className="bg-white/10 rounded-lg p-4">
                          <div className="flex items-center justify-between">
                            <div className="text-white font-semibold">Flat Fee Model</div>
                            <div className="bg-green-500/20 px-3 py-1 rounded-full text-white text-sm">$500-1,000</div>
                          </div>
                          <div className="text-white/80 text-xs mt-2">
                            <p>One-time payment per successful client referral</p>
                            <p>Simple to track and calculate</p>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-4">
                          <div className="flex items-center justify-between">
                            <div className="text-white font-semibold">Percentage Model</div>
                            <div className="bg-green-500/20 px-3 py-1 rounded-full text-white text-sm">10-15%</div>
                          </div>
                          <div className="text-white/80 text-xs mt-2">
                            <p>Percentage of first project or first 3 months</p>
                            <p>Aligns incentives with project value</p>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-4">
                          <div className="flex items-center justify-between">
                            <div className="text-white font-semibold">Hybrid Model</div>
                            <div className="bg-green-500/20 px-3 py-1 rounded-full text-white text-sm">$250 + 5%</div>
                          </div>
                          <div className="text-white/80 text-xs mt-2">
                            <p>Initial payment plus smaller percentage</p>
                            <p>Balances immediate reward with long-term value</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-4xl mx-auto">
                  <h3 className="text-2xl font-bold text-white mb-4">Partnership Results</h3>
                  <div className="grid grid-cols-4 gap-4">
                    <div className="bg-white/10 rounded-lg p-4 text-center">
                      <div className="text-3xl font-bold text-white mb-2">5-10</div>
                      <div className="text-white/70 text-sm">Active Partners</div>
                    </div>
                    
                    <div className="bg-white/10 rounded-lg p-4 text-center">
                      <div className="text-3xl font-bold text-white mb-2">2-3</div>
                      <div className="text-white/70 text-sm">Referrals/Month</div>
                    </div>
                    
                    <div className="bg-white/10 rounded-lg p-4 text-center">
                      <div className="text-3xl font-bold text-white mb-2">80%</div>
                      <div className="text-white/70 text-sm">Close Rate</div>
                    </div>
                    
                    <div className="bg-white/10 rounded-lg p-4 text-center">
                      <div className="text-3xl font-bold text-white mb-2">$5-8K</div>
                      <div className="text-white/70 text-sm">Monthly Revenue</div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 bg-yellow-400/20 backdrop-blur-sm rounded-xl p-4 max-w-3xl mx-auto">
                  <p className="text-white text-lg">
                    <span className="font-semibold">Key Takeaway:</span> Strategic partnerships deliver the highest-quality leads with an 80% close rate because they come with built-in trust and credibility from the referral source.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">
                Slide 59: Pillar 3: Strategic Partnerships
              </h2>
              
              <div className="prose prose-blue dark:prose-invert max-w-none">
                <p>This slide provides a detailed breakdown of the third client acquisition pillar: strategic partnerships. It presents a systematic approach to developing relationships with complementary service providers who can refer clients. The key elements include:</p>
                
                <ul>
                  <li><strong>Top 5 Partners:</strong> Specific types of businesses and organizations that make ideal referral partners</li>
                  <li><strong>Development Process:</strong> Step-by-step approach to establishing and nurturing partnerships</li>
                  <li><strong>Commission Structures:</strong> Different models for compensating partners for successful referrals</li>
                  <li><strong>Expected Results:</strong> Concrete metrics showing the impact of partnerships on lead generation and revenue</li>
                  <li><strong>Key Takeaway:</strong> Clear benefit of partnership leads compared to other acquisition methods</li>
                </ul>
                
                <p>This slide takes the strategic partnerships pillar introduced earlier and breaks it down into a detailed, actionable system. The top 5 partners section provides clear guidance on who to target for partnerships, focusing on businesses and organizations that already work with potential grant clients and have established trust. The partnership development process offers a systematic approach to establishing these relationships, from initial outreach to ongoing nurturing. The commission structures section addresses a critical practical question: how to compensate partners for referrals, with three different models to choose from based on the specific partnership. The results section provides concrete metrics that show the business impact of partnerships, including the number of active partners needed (5-10) and the potential return ($5-8K monthly revenue). The key takeaway highlights the most significant advantage of partnership leads: they come with built-in trust and credibility, resulting in an 80% close rate—significantly higher than the other acquisition methods. This positions strategic partnerships as the highest-quality lead source in the overall client acquisition strategy.</p>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-between">
            <Button
              as={Link}
              href="/masterclass/slides/slide58"
              className="bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700"
            >
              <IconArrowLeft className="h-4 w-4 mr-2" />
              Previous Slide
            </Button>
            
            <Button
              as={Link}
              href="/masterclass/slides/slide60"
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
