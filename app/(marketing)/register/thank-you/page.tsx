"use client";

import { Container } from "@/components/container";
import { Background } from "@/components/background";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconArrowRight, IconCalendarEvent, IconCheck } from "@tabler/icons-react";
import { Button } from "@/components/button";

export default function ThankYouPage() {
  return (
    <div className="relative">
      <div className="absolute inset-0 h-full w-full overflow-hidden">
        <Background />
      </div>
      <Container className="flex min-h-screen flex-col items-center justify-center py-20">
        <div className="w-full max-w-3xl mx-auto">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-neutral-900 rounded-xl overflow-hidden shadow-aceternity relative z-10 border border-neutral-200 dark:border-neutral-800 p-8 text-center"
          >
            <div className="bg-green-100 dark:bg-green-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <IconCheck className="h-8 w-8 text-green-600 dark:text-green-400" />
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">
              You're Registered!
            </h1>
            
            <p className="text-xl text-neutral-600 dark:text-neutral-300 mb-8">
              Thank you for registering for the Grant Writing Masterclass.
            </p>
            
            <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border border-blue-100 dark:border-blue-900/50 mb-8 text-left">
              <h2 className="text-xl font-semibold text-blue-700 dark:text-blue-300 mb-4">Masterclass Details</h2>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-100 dark:bg-blue-800/50 p-2 rounded-md mr-4">
                    <IconCalendarEvent className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-medium text-neutral-800 dark:text-neutral-200">Date & Time</h3>
                    <p className="text-neutral-600 dark:text-neutral-400">Saturday, May 3rd at 2:00 PM EST</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 dark:bg-blue-800/50 p-2 rounded-md mr-4">
                    <svg className="h-5 w-5 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-neutral-800 dark:text-neutral-200">Where</h3>
                    <p className="text-neutral-600 dark:text-neutral-400">
                      <a 
                        href="https://livewebinar.com/280-498-675/3837b8c6cb549fb87cbe67d8899630d3" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        Live Webinar (Click to bookmark)
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 dark:bg-blue-800/50 p-2 rounded-md mr-4">
                    <svg className="h-5 w-5 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-neutral-800 dark:text-neutral-200">Duration</h3>
                    <p className="text-neutral-600 dark:text-neutral-400">90 minutes with Q&A</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-4 mb-8">
              <h2 className="text-xl font-semibold text-neutral-800 dark:text-neutral-200">Next Steps</h2>
              
              <ol className="space-y-4 text-left">
                <li className="flex items-start">
                  <div className="bg-purple-100 dark:bg-purple-900/30 rounded-full w-6 h-6 flex items-center justify-center text-purple-600 dark:text-purple-400 font-bold mr-3 mt-0.5">1</div>
                  <div>
                    <p className="text-neutral-700 dark:text-neutral-300">
                      <strong>Add to Calendar:</strong> Make sure to add this event to your calendar so you don't miss it.
                    </p>
                    <div className="flex space-x-2 mt-2">
                      <a 
                        href="#" 
                        className="text-xs bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-2 py-1 rounded hover:bg-purple-200 dark:hover:bg-purple-800/30"
                      >
                        Google Calendar
                      </a>
                      <a 
                        href="#" 
                        className="text-xs bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-2 py-1 rounded hover:bg-purple-200 dark:hover:bg-purple-800/30"
                      >
                        Apple Calendar
                      </a>
                      <a 
                        href="#" 
                        className="text-xs bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-2 py-1 rounded hover:bg-purple-200 dark:hover:bg-purple-800/30"
                      >
                        Outlook
                      </a>
                    </div>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="bg-purple-100 dark:bg-purple-900/30 rounded-full w-6 h-6 flex items-center justify-center text-purple-600 dark:text-purple-400 font-bold mr-3 mt-0.5">2</div>
                  <div>
                    <p className="text-neutral-700 dark:text-neutral-300">
                      <strong>Check Your Email:</strong> We've sent you a confirmation email with all the details and a calendar invite.
                    </p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="bg-purple-100 dark:bg-purple-900/30 rounded-full w-6 h-6 flex items-center justify-center text-purple-600 dark:text-purple-400 font-bold mr-3 mt-0.5">3</div>
                  <div>
                    <p className="text-neutral-700 dark:text-neutral-300">
                      <strong>Join 10 Minutes Early:</strong> We recommend joining the webinar 10 minutes early to make sure your audio and video are working properly.
                    </p>
                  </div>
                </li>
              </ol>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                as={Link}
                href="/masterclass"
                className="bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700"
              >
                Explore Resources
              </Button>
              
              <Button
                as="a"
                href="https://livewebinar.com/280-498-675/3837b8c6cb549fb87cbe67d8899630d3"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                Join Webinar
                <IconArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </motion.div>
        </div>
      </Container>
    </div>
  );
}
