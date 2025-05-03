"use client";

import { Container } from "@/components/container";
import { Background } from "@/components/background";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { Button } from "@/components/button";

export default function Slide76Page() {
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
                Slide 76 of 100
              </span>
            </div>
            
            <div className="flex space-x-2">
              <Button
                as={Link}
                href="/masterclass/slides/slide75"
                className="bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700"
              >
                <IconArrowLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>
              
              <Button
                as={Link}
                href="/masterclass/slides/slide77"
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
            <div className="aspect-[16/9] relative bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center p-12">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('/pattern-dots.svg')] opacity-10"></div>
              
              <div className="relative z-10 text-center">
                <div className="bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full text-white text-sm font-medium mb-6 inline-block">
                  PART 10: THE HIGH-TICKET OFFER
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                  Creating Your $5K+ Grant Writing Program
                </h1>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left">
                    <h3 className="text-xl font-bold text-white mb-4">Why High-Ticket Offers Work</h3>
                    
                    <div className="space-y-4">
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-purple-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">1</div>
                          <div>
                            <div className="text-white font-semibold">Higher Quality Clients</div>
                            <div className="text-white/80 text-sm">
                              <p>• More committed to implementation</p>
                              <p>• Value expertise over price</p>
                              <p>• Respect your time and boundaries</p>
                              <p>• More likely to follow your process</p>
                              <p>• Fewer payment issues and delays</p>
                              <p>• More professional to work with</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-purple-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">2</div>
                          <div>
                            <div className="text-white font-semibold">Better Business Economics</div>
                            <div className="text-white/80 text-sm">
                              <p>• Fewer clients needed for same revenue</p>
                              <p>• Lower client acquisition costs</p>
                              <p>• More resources for client success</p>
                              <p>• Higher profit margins</p>
                              <p>• More predictable cash flow</p>
                              <p>• Easier to scale and grow</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-purple-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">3</div>
                          <div>
                            <div className="text-white font-semibold">Greater Client Results</div>
                            <div className="text-white/80 text-sm">
                              <p>• More comprehensive solutions</p>
                              <p>• Higher touch service and support</p>
                              <p>• Better accountability systems</p>
                              <p>• More personalized approach</p>
                              <p>• Longer-term relationships</p>
                              <p>• Higher success rates</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-purple-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">4</div>
                          <div>
                            <div className="text-white font-semibold">Improved Market Positioning</div>
                            <div className="text-white/80 text-sm">
                              <p>• Premium brand perception</p>
                              <p>• Less price competition</p>
                              <p>• Higher perceived expertise</p>
                              <p>• More referrals from quality clients</p>
                              <p>• Better industry recognition</p>
                              <p>• Stronger authority positioning</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left">
                      <h3 className="text-xl font-bold text-white mb-4">High-Ticket Program Models</h3>
                      
                      <div className="space-y-3">
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-pink-500/50 rounded-full p-1 mr-2 mt-0.5">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-white font-semibold">Done-For-You Grant Program</div>
                              <div className="text-white/80 text-xs">
                                <p><span className="text-pink-300 font-medium">Price Range:</span> $5,000-$15,000</p>
                                <p><span className="text-pink-300 font-medium">Includes:</span> Complete grant writing service package</p>
                                <p>• Comprehensive grant research</p>
                                <p>• Multiple grant applications</p>
                                <p>• Full content development</p>
                                <p>• Submission management</p>
                                <p>• 3-6 month engagement</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-pink-500/50 rounded-full p-1 mr-2 mt-0.5">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-white font-semibold">Done-With-You Grant Accelerator</div>
                              <div className="text-white/80 text-xs">
                                <p><span className="text-pink-300 font-medium">Price Range:</span> $3,000-$8,000</p>
                                <p><span className="text-pink-300 font-medium">Includes:</span> Guided grant development program</p>
                                <p>• Grant opportunity identification</p>
                                <p>• Templates and frameworks</p>
                                <p>• Weekly coaching calls</p>
                                <p>• Review and feedback</p>
                                <p>• 2-3 month program</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-pink-500/50 rounded-full p-1 mr-2 mt-0.5">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-white font-semibold">Grant Strategy Retainer</div>
                              <div className="text-white/80 text-xs">
                                <p><span className="text-pink-300 font-medium">Price Range:</span> $2,000-$5,000/month</p>
                                <p><span className="text-pink-300 font-medium">Includes:</span> Ongoing grant strategy and support</p>
                                <p>• Monthly grant opportunity research</p>
                                <p>• Grant calendar management</p>
                                <p>• Strategic advisory calls</p>
                                <p>• Grant review services</p>
                                <p>• 6-12 month commitment</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-pink-500/50 rounded-full p-1 mr-2 mt-0.5">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-white font-semibold">Grant Department Outsourcing</div>
                              <div className="text-white/80 text-xs">
                                <p><span className="text-pink-300 font-medium">Price Range:</span> $8,000-$20,000/month</p>
                                <p><span className="text-pink-300 font-medium">Includes:</span> Complete grant department solution</p>
                                <p>• Full grant management</p>
                                <p>• Multiple applications per month</p>
                                <p>• Dedicated grant team</p>
                                <p>• Reporting and analytics</p>
                                <p>• 12+ month contract</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left">
                      <h3 className="text-xl font-bold text-white mb-4">Common Objections & Responses</h3>
                      
                      <div className="space-y-3">
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-red-500/50 rounded-full p-1 mr-2 mt-0.5">
                              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-white font-semibold">"That's too expensive for us."</div>
                              <div className="text-white/80 text-xs">
                                <p><span className="text-green-300 font-medium">Response:</span> "I understand budget concerns. Let's look at this as an investment rather than an expense. Our clients typically see a 10-20x return on their investment with us. What would it mean for your organization if we helped you secure a $250,000 grant?"</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-red-500/50 rounded-full p-1 mr-2 mt-0.5">
                              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-white font-semibold">"We can hire someone in-house for less."</div>
                              <div className="text-white/80 text-xs">
                                <p><span className="text-green-300 font-medium">Response:</span> "You certainly could, but consider the full cost: salary, benefits, training, management time, and the learning curve. With us, you get an entire team of specialists with proven systems and a 25% success rate from day one, not months or years down the road."</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-red-500/50 rounded-full p-1 mr-2 mt-0.5">
                              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-white font-semibold">"We need to think about it."</div>
                              <div className="text-white/80 text-xs">
                                <p><span className="text-green-300 font-medium">Response:</span> "I respect that. What specific information would help you make this decision? Also, keep in mind that grant deadlines wait for no one. Each month of delay potentially means missing out on $50,000-$100,000 in funding opportunities that won't come around again for another year."</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-4xl mx-auto">
                  <h3 className="text-2xl font-bold text-white mb-4">Value-Based Pricing Formula</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="bg-purple-500/30 rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-3">
                        <div className="text-white font-bold">1</div>
                      </div>
                      <div className="text-white font-medium mb-2 text-center">Quantify the Value</div>
                      <div className="text-white/70 text-sm">
                        <p>Calculate the potential grant funding your client could receive:</p>
                        <div className="bg-white/10 p-3 rounded-lg mt-2">
                          <p className="text-center">Average grant size × Number of applications × Success rate</p>
                          <p className="text-center mt-2">Example: $100K × 5 × 25% = $125K</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="bg-purple-500/30 rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-3">
                        <div className="text-white font-bold">2</div>
                      </div>
                      <div className="text-white font-medium mb-2 text-center">Apply Value Capture</div>
                      <div className="text-white/70 text-sm">
                        <p>Determine what percentage of that value you'll capture in your fee:</p>
                        <div className="bg-white/10 p-3 rounded-lg mt-2">
                          <p className="text-center">Total value × Value capture percentage</p>
                          <p className="text-center mt-2">Example: $125K × 8% = $10K</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="bg-purple-500/30 rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-3">
                        <div className="text-white font-bold">3</div>
                      </div>
                      <div className="text-white font-medium mb-2 text-center">Structure the Offer</div>
                      <div className="text-white/70 text-sm">
                        <p>Create a payment structure that works for both parties:</p>
                        <div className="bg-white/10 p-3 rounded-lg mt-2">
                          <p className="text-center">• Upfront fee: 30-50%</p>
                          <p className="text-center">• Monthly payments: 3-6 months</p>
                          <p className="text-center">• Optional success fee component</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 bg-yellow-400/20 backdrop-blur-sm rounded-xl p-4 max-w-3xl mx-auto">
                  <p className="text-white text-lg">
                    <span className="font-semibold">Key Takeaway:</span> High-ticket offers aren't just about charging more—they're about delivering more value, working with better clients, and building a more sustainable business. By focusing on the transformative impact of grant funding rather than the cost of your services, you can confidently price your programs at $5K+ and attract clients who value your expertise.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">
                Slide 76: Creating Your $5K+ Grant Writing Program
              </h2>
              
              <div className="prose prose-blue dark:prose-invert max-w-none">
                <p>This slide introduces the concept of high-ticket grant writing programs, providing a comprehensive framework for creating premium offers that command $5,000 or more. It addresses the benefits of high-ticket offers, different program models, objection handling, and value-based pricing. The key elements include:</p>
                
                <ul>
                  <li><strong>Why High-Ticket Offers Work:</strong> Detailed examination of the benefits of premium pricing, including higher quality clients, better business economics, greater client results, and improved market positioning</li>
                  <li><strong>High-Ticket Program Models:</strong> Four specific program structures with price ranges and components, from done-for-you services to complete department outsourcing</li>
                  <li><strong>Common Objections & Responses:</strong> Strategic approaches to handling the most common price objections with value-focused responses</li>
                  <li><strong>Value-Based Pricing Formula:</strong> Three-step process for determining premium pricing based on the value delivered rather than time spent</li>
                  <li><strong>Key Takeaway:</strong> Strategic emphasis on the relationship between premium pricing and value delivery</li>
                </ul>
                
                <p>This slide begins the high-ticket offer section by establishing the foundation for premium pricing in a grant writing business. The "Why High-Ticket Offers Work" section examines the benefits of premium pricing across four key areas: higher quality clients who are more committed and professional, better business economics with fewer clients needed and higher profit margins, greater client results through more comprehensive solutions and higher touch service, and improved market positioning with less price competition and stronger authority positioning. The "High-Ticket Program Models" section presents four specific program structures with price ranges and components: Done-For-You Grant Program ($5,000-$15,000), Done-With-You Grant Accelerator ($3,000-$8,000), Grant Strategy Retainer ($2,000-$5,000/month), and Grant Department Outsourcing ($8,000-$20,000/month). The "Common Objections & Responses" section provides strategic approaches to handling the most common price objections with value-focused responses that shift the conversation from cost to investment. The "Value-Based Pricing Formula" section presents a three-step process for determining premium pricing based on the value delivered rather than time spent: quantifying the value, applying value capture, and structuring the offer. The key takeaway emphasizes that high-ticket offers aren't just about charging more but about delivering more value, working with better clients, and building a more sustainable business. This slide provides participants with a complete framework for creating premium grant writing offers, setting the stage for the more detailed exploration of offer components in subsequent slides.</p>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-between">
            <Button
              as={Link}
              href="/masterclass/slides/slide75"
              className="bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700"
            >
              <IconArrowLeft className="h-4 w-4 mr-2" />
              Previous Slide
            </Button>
            
            <Button
              as={Link}
              href="/masterclass/slides/slide77"
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
