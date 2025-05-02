"use client";

import { Container } from "@/components/container";
import { Background } from "@/components/background";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconArrowLeft, IconArrowRight, IconDownload } from "@tabler/icons-react";
import { Button } from "@/components/button";

export default function Slide32Page() {
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
                Slide 32 of 100
              </span>
            </div>
            
            <div className="flex space-x-2">
              <Button
                as={Link}
                href="/masterclass/slides/slide31"
                className="bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700"
              >
                <IconArrowLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>
              
              <Button
                as={Link}
                href="/masterclass/slides/slide33"
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
                    The 5 Best Places to Find<br />
                    Grant Writing Clients
                  </h1>
                  <p className="text-xl text-white/90 max-w-3xl mx-auto">
                    Exactly where to look for organizations actively seeking grant writing help
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-8 max-w-5xl mx-auto">
                  <div className="space-y-6">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                      <div className="flex items-start">
                        <div className="bg-orange-500 rounded-full w-10 h-10 flex items-center justify-center text-white font-bold mr-4 mt-1">1</div>
                        <div>
                          <h3 className="text-xl font-bold text-white mb-2">Non-Profit Directories</h3>
                          <div className="text-white/80 text-sm mb-3">
                            Searchable databases of non-profit organizations in your area
                          </div>
                          
                          <div className="bg-white/10 rounded-lg p-3 text-sm text-white">
                            <div className="font-semibold mb-1">Top Resources:</div>
                            <ul className="space-y-1 list-disc pl-4 text-white/90">
                              <li>GuideStar.org (now Candid)</li>
                              <li>CharityNavigator.org</li>
                              <li>FoundationCenter.org</li>
                            </ul>
                            <div className="mt-2 text-white/80 italic">
                              Filter by: Revenue size ($500K-$5M), recent leadership changes, and grant funding history
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                      <div className="flex items-start">
                        <div className="bg-orange-500 rounded-full w-10 h-10 flex items-center justify-center text-white font-bold mr-4 mt-1">2</div>
                        <div>
                          <h3 className="text-xl font-bold text-white mb-2">Grant Announcements</h3>
                          <div className="text-white/80 text-sm mb-3">
                            Organizations that recently received grants often need help managing them
                          </div>
                          
                          <div className="bg-white/10 rounded-lg p-3 text-sm text-white">
                            <div className="font-semibold mb-1">Where to Look:</div>
                            <ul className="space-y-1 list-disc pl-4 text-white/90">
                              <li>Local newspaper announcements</li>
                              <li>Foundation press releases</li>
                              <li>Grants.gov award notices</li>
                            </ul>
                            <div className="mt-2 text-white/80 italic">
                              These organizations have proven they can secure funding and often need ongoing support
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                      <div className="flex items-start">
                        <div className="bg-orange-500 rounded-full w-10 h-10 flex items-center justify-center text-white font-bold mr-4 mt-1">3</div>
                        <div>
                          <h3 className="text-xl font-bold text-white mb-2">Industry Associations</h3>
                          <div className="text-white/80 text-sm mb-3">
                            Professional groups where organizations actively network
                          </div>
                          
                          <div className="bg-white/10 rounded-lg p-3 text-sm text-white">
                            <div className="font-semibold mb-1">Top Associations:</div>
                            <ul className="space-y-1 list-disc pl-4 text-white/90">
                              <li>Local non-profit alliances</li>
                              <li>Chamber of Commerce events</li>
                              <li>Industry-specific conferences</li>
                            </ul>
                            <div className="mt-2 text-white/80 italic">
                              Attend events or offer to speak about grant opportunities in your target industry
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                      <div className="flex items-start">
                        <div className="bg-orange-500 rounded-full w-10 h-10 flex items-center justify-center text-white font-bold mr-4 mt-1">4</div>
                        <div>
                          <h3 className="text-xl font-bold text-white mb-2">Job Boards & RFPs</h3>
                          <div className="text-white/80 text-sm mb-3">
                            Organizations actively seeking grant writing assistance
                          </div>
                          
                          <div className="bg-white/10 rounded-lg p-3 text-sm text-white">
                            <div className="font-semibold mb-1">Where to Look:</div>
                            <ul className="space-y-1 list-disc pl-4 text-white/90">
                              <li>Indeed.com (search "grant writer")</li>
                              <li>NonprofitTimes.com job board</li>
                              <li>Local government RFP listings</li>
                            </ul>
                            <div className="mt-2 text-white/80 italic">
                              Don't apply for jobs—reach out directly offering contract services at higher value
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                      <div className="flex items-start">
                        <div className="bg-orange-500 rounded-full w-10 h-10 flex items-center justify-center text-white font-bold mr-4 mt-1">5</div>
                        <div>
                          <h3 className="text-xl font-bold text-white mb-2">Strategic Partners</h3>
                          <div className="text-white/80 text-sm mb-3">
                            Professionals who already work with your ideal clients
                          </div>
                          
                          <div className="bg-white/10 rounded-lg p-3 text-sm text-white">
                            <div className="font-semibold mb-1">Best Partners:</div>
                            <ul className="space-y-1 list-disc pl-4 text-white/90">
                              <li>Non-profit accountants & CPAs</li>
                              <li>Board development consultants</li>
                              <li>Fundraising specialists</li>
                            </ul>
                            <div className="mt-2 text-white/80 italic">
                              Offer referral fees (10-15%) or reciprocal referrals to incentivize partnerships
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                      <h3 className="text-xl font-bold text-white mb-3 text-center">Client Targeting Matrix</h3>
                      
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-white/10 rounded-lg p-3 text-center">
                          <div className="text-white font-semibold mb-1">Best Prospects</div>
                          <ul className="space-y-1 text-white/80 text-sm text-left pl-4 list-disc">
                            <li>$500K-$5M annual budget</li>
                            <li>5+ years in operation</li>
                            <li>Previous grant success</li>
                            <li>No in-house grant writer</li>
                          </ul>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-3 text-center">
                          <div className="text-white font-semibold mb-1">Avoid</div>
                          <ul className="space-y-1 text-white/80 text-sm text-left pl-4 list-disc">
                            <li>Startups (under 2 years)</li>
                            <li>Financially unstable orgs</li>
                            <li>Unrealistic expectations</li>
                            <li>Success-fee only clients</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-xl p-4 max-w-3xl mx-auto">
                  <p className="text-white text-lg">
                    <span className="font-semibold">Action Step:</span> Identify 20 potential clients using these five sources and create a targeted outreach plan using our proven email templates (coming up next).
                  </p>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">
                Slide 32: The 5 Best Places to Find Grant Writing Clients
              </h2>
              
              <div className="prose prose-blue dark:prose-invert max-w-none">
                <p>This slide provides specific, actionable information on where to find potential grant writing clients. The key elements include:</p>
                
                <ul>
                  <li><strong>Five Specific Sources:</strong> Clear breakdown of the top places to find clients</li>
                  <li><strong>Specific Resources:</strong> Named websites and platforms like "GuideStar.org" and "NonprofitTimes.com"</li>
                  <li><strong>Strategic Guidance:</strong> Practical tips like "Filter by: Revenue size ($500K-$5M)" and "Don't apply for jobs—reach out directly"</li>
                  <li><strong>Client Targeting Matrix:</strong> Clear criteria for identifying the best prospects and which to avoid</li>
                  <li><strong>Action Step:</strong> Specific next step to "Identify 20 potential clients" creates immediate implementation</li>
                  <li><strong>Forward Reference:</strong> Mention of "proven email templates (coming up next)" creates anticipation</li>
                </ul>
                
                <p>This slide addresses one of the biggest concerns for new grant writers: finding clients. By providing specific sources, resources, and criteria, it makes the process of client acquisition feel concrete and achievable. The client targeting matrix helps focus efforts on the most promising prospects, while the action step creates a clear path to implementation. The strategic guidance throughout adds value beyond just listing sources, showing how to use each source effectively.</p>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-between">
            <Button
              as={Link}
              href="/masterclass/slides/slide31"
              className="bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700"
            >
              <IconArrowLeft className="h-4 w-4 mr-2" />
              Previous Slide
            </Button>
            
            <Button
              as={Link}
              href="/masterclass/slides/slide33"
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
