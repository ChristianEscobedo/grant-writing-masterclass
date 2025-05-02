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
            <div className="bg-gradient-to-br from-green-500 to-teal-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <IconCheck className="h-10 w-10 text-white" />
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">
              You're All Set!
            </h1>

            <p className="text-xl text-neutral-600 dark:text-neutral-300 mb-4">
              Thank you for registering for the Grant Writing Masterclass.
            </p>

            <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8">
              We're excited to have you join us for this transformative session on building a $10K+/month grant writing business.
            </p>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 p-8 rounded-xl border border-blue-100 dark:border-blue-900/50 mb-8 text-left shadow-sm">
              <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-300 mb-6">Masterclass Details</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white dark:bg-neutral-800/50 p-5 rounded-lg shadow-sm border border-blue-100 dark:border-blue-900/50">
                  <div className="bg-blue-100 dark:bg-blue-800/50 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <IconCalendarEvent className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="font-semibold text-lg text-neutral-800 dark:text-neutral-200 mb-2">Date & Time</h3>
                  <p className="text-neutral-600 dark:text-neutral-400">Friday, May 3rd at 2:00 PM EST</p>
                </div>

                <div className="bg-white dark:bg-neutral-800/50 p-5 rounded-lg shadow-sm border border-blue-100 dark:border-blue-900/50">
                  <div className="bg-blue-100 dark:bg-blue-800/50 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <svg className="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-lg text-neutral-800 dark:text-neutral-200 mb-2">Where</h3>
                  <p className="text-neutral-600 dark:text-neutral-400">
                    <a
                      href="https://livewebinar.com/280-498-675/3837b8c6cb549fb87cbe67d8899630d3"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      Live Webinar
                    </a>
                  </p>
                </div>

                <div className="bg-white dark:bg-neutral-800/50 p-5 rounded-lg shadow-sm border border-blue-100 dark:border-blue-900/50">
                  <div className="bg-blue-100 dark:bg-blue-800/50 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <svg className="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-lg text-neutral-800 dark:text-neutral-200 mb-2">Duration</h3>
                  <p className="text-neutral-600 dark:text-neutral-400">90 minutes with Q&A</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 p-8 rounded-xl border border-purple-100 dark:border-purple-900/50 mb-8 shadow-sm">
              <h2 className="text-2xl font-bold text-purple-700 dark:text-purple-300 mb-6 text-center">Before the Masterclass</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white dark:bg-neutral-800/50 p-5 rounded-lg shadow-sm border border-purple-100 dark:border-purple-900/50 text-center">
                  <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-3 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4 shadow-sm">
                    <svg className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-lg text-neutral-800 dark:text-neutral-200 mb-3">Add to Calendar</h3>
                  <p className="text-neutral-600 dark:text-neutral-400 mb-4">Don't miss this event! Add it to your calendar now.</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    <a
                      href="#"
                      className="text-sm bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-3 py-1.5 rounded-full hover:bg-purple-200 dark:hover:bg-purple-800/30 transition-colors"
                    >
                      Google
                    </a>
                    <a
                      href="#"
                      className="text-sm bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-3 py-1.5 rounded-full hover:bg-purple-200 dark:hover:bg-purple-800/30 transition-colors"
                    >
                      Apple
                    </a>
                    <a
                      href="#"
                      className="text-sm bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-3 py-1.5 rounded-full hover:bg-purple-200 dark:hover:bg-purple-800/30 transition-colors"
                    >
                      Outlook
                    </a>
                  </div>
                </div>

                <div className="bg-white dark:bg-neutral-800/50 p-5 rounded-lg shadow-sm border border-purple-100 dark:border-purple-900/50 text-center">
                  <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-3 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4 shadow-sm">
                    <svg className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-lg text-neutral-800 dark:text-neutral-200 mb-3">Check Your Email</h3>
                  <p className="text-neutral-600 dark:text-neutral-400">
                    We've sent you a confirmation email with all the details and a calendar invite.
                  </p>
                </div>

                <div className="bg-white dark:bg-neutral-800/50 p-5 rounded-lg shadow-sm border border-purple-100 dark:border-purple-900/50 text-center">
                  <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-3 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4 shadow-sm">
                    <svg className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-lg text-neutral-800 dark:text-neutral-200 mb-3">Join Early</h3>
                  <p className="text-neutral-600 dark:text-neutral-400">
                    Join 10 minutes early to ensure your audio and video are working properly.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <Button
                as="a"
                href="https://livewebinar.com/280-498-675/3837b8c6cb549fb87cbe67d8899630d3"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1"
              >
                Join Webinar
                <IconArrowRight className="h-5 w-5 ml-3" />
              </Button>
            </div>

            <p className="text-neutral-500 dark:text-neutral-400 text-sm mt-6">
              If you have any questions, please email us at <a href="mailto:support@grantwritingai.com" className="text-blue-600 dark:text-blue-400 hover:underline">support@grantwritingai.com</a>
            </p>
          </motion.div>
        </div>
      </Container>
    </div>
  );
}
