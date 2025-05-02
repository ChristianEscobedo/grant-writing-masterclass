"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Balancer from "react-wrap-balancer";
import {
  IconArrowRight,
  IconFileCheck,
  IconCoin,
  IconBuildingBank,
  IconUsers,
  IconChartBar,
  IconRobot
} from "@tabler/icons-react";

import { Container } from "@/components/container";
import { Background } from "@/components/background";
import { Heading } from "@/components/heading";
import { Subheading } from "@/components/subheading";
import { Button } from "@/components/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Badge } from "@/components/badge";

const formSchema = z.object({
  name: z
    .string({
      required_error: "Please enter your name",
    })
    .min(1, "Please enter your name"),
  email: z
    .string({
      required_error: "Please enter email",
    })
    .email("Please enter valid email")
    .min(1, "Please enter email"),
  phone: z
    .string()
    .optional(),
  company: z
    .string()
    .optional(),
  interest: z
    .string({
      required_error: "Please select an option",
    })
    .min(1, "Please select an option"),
});

type MasterclassRegistration = z.infer<typeof formSchema>;

export default function RegisterPage() {
  const router = useRouter();
  const form = useForm<MasterclassRegistration>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      interest: "",
    },
  });

  async function onSubmit(values: MasterclassRegistration) {
    try {
      console.log("submitted form", values);

      // Send the form data to our API endpoint
      const response = await fetch('/api/masterclass', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        // Redirect to the thank you page using window.location for a full page reload
        window.location.href = "/register/thank-you";
      } else {
        // Handle error
        console.error("Error submitting form:", await response.text());
        alert("There was an error submitting your registration. Please try again.");
      }
    } catch (e) {
      console.error("Error submitting form:", e);
      alert("There was an error submitting your registration. Please try again.");
    }
  }

  const sections = [
    {
      title: "The Big Opportunity",
      icon: <IconCoin className="h-5 w-5 text-blue-600" />,
      items: [
        "Why grants are the fastest growing client niche in 2025",
        "How government, non-profit, and private funding exploded post-2020",
        "Why businesses are desperate for help getting funding—and will gladly pay $3–5K/month to get it"
      ]
    },
    {
      title: "AI-Powered Grant Writing Made Simple",
      icon: <IconRobot className="h-5 w-5 text-blue-600" />,
      items: [
        "See how our A.I. Grant Builder writes 90% of the grant FOR you",
        "How to structure grants for local businesses, nonprofits, and startups",
        "Examples of real grants that got $250K–$1M+ funded"
      ]
    },
    {
      title: "The $10K/Month Business Model",
      icon: <IconChartBar className="h-5 w-5 text-blue-600" />,
      items: [
        "How to land clients on monthly retainers or $3–5K per grant",
        "How to target funded industries like education, healthcare, clean energy, and tech",
        "Templates for your outreach, onboarding, and fulfillment process"
      ]
    },
    {
      title: "Prospecting & Closing High-Ticket Clients",
      icon: <IconUsers className="h-5 w-5 text-blue-600" />,
      items: [
        "How to find perfect-fit leads who are already looking for grants",
        "What to say on your sales calls to land $3K–$5K deals",
        "How to build client trust even if you're new to grant writing"
      ]
    },
    {
      title: "Automating with Software",
      icon: <IconBuildingBank className="h-5 w-5 text-blue-600" />,
      items: [
        "How our Grant Builder app helps you fill out 20–50 page grants in a few clicks",
        "Save hours using our templates, funding source database, and auto-fill tools",
        "How to white-label or brand your own version of the system (optional)"
      ]
    }
  ];

  const benefits = [
    "A clear path to earn $3K–5K per grant",
    "How to offer funding services on a retainer",
    "Tools to automate 80% of the grant writing work",
    "The confidence to close your first (or next) high-ticket client",
    "A proven system that's easy to learn, scale, and run part-time"
  ];

  const forWho = [
    "Freelancers looking to add high-ticket services",
    "Agency owners who want to offer grant funding as a retainer",
    "Career changers and consultants who want remote income",
    "Nonprofits or impact entrepreneurs who want to learn grant writing AND get clients"
  ];

  return (
    <div className="relative">
      <div className="absolute inset-0 h-full w-full overflow-hidden">
        <Background />
      </div>
      <Container className="flex min-h-screen flex-col items-center justify-between py-20">
        <div className="w-full max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ ease: "easeOut", duration: 0.5 }}
              className="flex flex-col items-center gap-2 mb-6"
            >
              <Badge className="bg-gradient-to-r from-blue-500/10 to-blue-400/10 text-blue-700 dark:text-blue-400 text-base">
                Free Masterclass
              </Badge>
              <Badge className="bg-gradient-to-r from-green-500/10 to-green-400/10 text-green-700 dark:text-green-400">
                Saturday, May 3rd at 2:00 PM EST
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ ease: "easeOut", duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold tracking-tight text-black dark:text-white mb-6"
            >
              <Balancer>
                Turn AI Into Income: Learn How to Build a $10K+/Month Grant Writing Business
              </Balancer>
            </motion.h1>

            <motion.p
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ ease: "easeOut", duration: 0.5, delay: 0.2 }}
              className="text-xl text-neutral-600 dark:text-neutral-300 mb-8"
            >
              <Balancer>
                Join this free in-depth training to discover how to use our A.I. Grant Builder to write high-ticket grants, find clients who want to pay you $3–5K per month, help businesses access hundreds of thousands in funding, and turn this into a predictable $10K/month online business.
              </Balancer>
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left Column - Content */}
            <motion.div
              initial={{ x: -40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ ease: "easeOut", duration: 0.5, delay: 0.3 }}
              className="flex flex-col space-y-10"
            >
              {/* What You'll Learn */}
              <div className="bg-white dark:bg-neutral-900 rounded-xl p-6 shadow-aceternity relative z-10 border border-neutral-200 dark:border-neutral-800">
                <h2 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">What You'll Learn Inside the Training</h2>

                <div className="space-y-6">
                  {sections.map((section, idx) => (
                    <div key={idx} className="space-y-3">
                      <div className="flex items-center gap-2">
                        <div className="p-1.5 bg-blue-100 dark:bg-blue-900/30 rounded-md">
                          {section.icon}
                        </div>
                        <h3 className="font-medium text-lg">{section.title}</h3>
                      </div>
                      <ul className="space-y-2 pl-9">
                        {section.items.map((item, itemIdx) => (
                          <li key={itemIdx} className="flex items-start gap-2 text-neutral-700 dark:text-neutral-300">
                            <span className="inline-block mt-1 text-blue-600 dark:text-blue-400">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Who This Is For */}
              <div className="bg-white dark:bg-neutral-900 rounded-xl p-6 shadow-aceternity relative z-10 border border-neutral-200 dark:border-neutral-800">
                <h2 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">Who This Is For</h2>
                <ul className="space-y-3">
                  {forWho.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-neutral-700 dark:text-neutral-300">
                      <span className="inline-block mt-1 text-green-600 dark:text-green-400">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div className="bg-white dark:bg-neutral-900 rounded-xl p-6 shadow-aceternity relative z-10 border border-neutral-200 dark:border-neutral-800">
                <h2 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">Benefits You'll Walk Away With</h2>
                <ul className="space-y-3">
                  {benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-neutral-700 dark:text-neutral-300">
                      <span className="inline-block mt-1 text-green-600 dark:text-green-400">✓</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Why This Works */}
              <div className="bg-gradient-to-br from-blue-600/10 to-blue-400/10 rounded-xl p-6 shadow-aceternity relative z-10 border border-neutral-200 dark:border-neutral-800 backdrop-blur-sm">
                <h2 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">Why This Works So Well</h2>
                <p className="text-neutral-700 dark:text-neutral-300 mb-4">Most people don't know this:</p>
                <p className="text-neutral-700 dark:text-neutral-300 font-medium mb-2">There are over $1 TRILLION in grants available... and most businesses don't know how to access it.</p>
                <p className="text-neutral-700 dark:text-neutral-300">They don't have the time.</p>
                <p className="text-neutral-700 dark:text-neutral-300">They don't have the knowledge.</p>
                <p className="text-neutral-700 dark:text-neutral-300">And they will pay you to do it for them — especially if you use software to do it faster and better than traditional writers.</p>
              </div>
            </motion.div>

            {/* Right Column - Registration Form */}
            <motion.div
              initial={{ x: 40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ ease: "easeOut", duration: 0.5, delay: 0.4 }}
            >
              <div className="bg-white dark:bg-neutral-900 rounded-xl p-8 shadow-aceternity sticky top-24 relative z-10 border border-neutral-200 dark:border-neutral-800">
                <h2 className="text-2xl font-semibold mb-3 text-center">Register for the Free Masterclass</h2>
                <p className="text-center text-blue-600 dark:text-blue-400 font-medium mb-6">Saturday, May 3rd at 2:00 PM EST</p>

                <div className="mb-6 bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg border border-blue-100 dark:border-blue-900/50">
                  <h3 className="font-medium text-blue-700 dark:text-blue-300 mb-2">What You'll Get:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-neutral-700 dark:text-neutral-300">
                      <span className="inline-block mt-1 text-green-600 dark:text-green-400">✓</span>
                      <span>A step-by-step roadmap to go from zero → $10K/month writing grants</span>
                    </li>
                    <li className="flex items-start gap-2 text-neutral-700 dark:text-neutral-300">
                      <span className="inline-block mt-1 text-green-600 dark:text-green-400">✓</span>
                      <span>Our AI Grant Builder demo (use it live during the session)</span>
                    </li>
                    <li className="flex items-start gap-2 text-neutral-700 dark:text-neutral-300">
                      <span className="inline-block mt-1 text-green-600 dark:text-green-400">✓</span>
                      <span>Real client examples and how they got funded</span>
                    </li>
                    <li className="flex items-start gap-2 text-neutral-700 dark:text-neutral-300">
                      <span className="inline-block mt-1 text-green-600 dark:text-green-400">✓</span>
                      <span>Templates for outreach, pricing, and proposals</span>
                    </li>
                    <li className="flex items-start gap-2 text-neutral-700 dark:text-neutral-300">
                      <span className="inline-block mt-1 text-green-600 dark:text-green-400">✓</span>
                      <span>Bonus: Our "$500K Grant Proposal" template</span>
                    </li>
                  </ul>
                </div>

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <label
                            htmlFor="name"
                            className="block text-sm font-medium leading-6 text-neutral-700 dark:text-neutral-300"
                          >
                            Full Name*
                          </label>
                          <FormControl>
                            <div className="mt-1">
                              <input
                                id="name"
                                type="text"
                                placeholder="John Smith"
                                className="block w-full bg-white dark:bg-neutral-800 px-4 rounded-md border border-neutral-200 dark:border-neutral-700 py-2 shadow-aceternity text-black dark:text-white placeholder:text-gray-400 focus:ring-2 focus:ring-blue-400 focus:outline-none sm:text-sm"
                                {...field}
                              />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium leading-6 text-neutral-700 dark:text-neutral-300"
                          >
                            Email Address*
                          </label>
                          <FormControl>
                            <div className="mt-1">
                              <input
                                id="email"
                                type="email"
                                placeholder="john@example.com"
                                className="block w-full bg-white dark:bg-neutral-800 px-4 rounded-md border border-neutral-200 dark:border-neutral-700 py-2 shadow-aceternity text-black dark:text-white placeholder:text-gray-400 focus:ring-2 focus:ring-blue-400 focus:outline-none sm:text-sm"
                                {...field}
                              />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <label
                            htmlFor="phone"
                            className="block text-sm font-medium leading-6 text-neutral-700 dark:text-neutral-300"
                          >
                            Phone Number (Optional)
                          </label>
                          <FormControl>
                            <div className="mt-1">
                              <input
                                id="phone"
                                type="tel"
                                placeholder="(123) 456-7890"
                                className="block w-full bg-white dark:bg-neutral-800 px-4 rounded-md border border-neutral-200 dark:border-neutral-700 py-2 shadow-aceternity text-black dark:text-white placeholder:text-gray-400 focus:ring-2 focus:ring-blue-400 focus:outline-none sm:text-sm"
                                {...field}
                              />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <label
                            htmlFor="company"
                            className="block text-sm font-medium leading-6 text-neutral-700 dark:text-neutral-300"
                          >
                            Company/Organization (Optional)
                          </label>
                          <FormControl>
                            <div className="mt-1">
                              <input
                                id="company"
                                type="text"
                                placeholder="Your Company"
                                className="block w-full bg-white dark:bg-neutral-800 px-4 rounded-md border border-neutral-200 dark:border-neutral-700 py-2 shadow-aceternity text-black dark:text-white placeholder:text-gray-400 focus:ring-2 focus:ring-blue-400 focus:outline-none sm:text-sm"
                                {...field}
                              />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="interest"
                      render={({ field }) => (
                        <FormItem>
                          <label
                            htmlFor="interest"
                            className="block text-sm font-medium leading-6 text-neutral-700 dark:text-neutral-300"
                          >
                            I want to know about*
                          </label>
                          <FormControl>
                            <div className="mt-1">
                              <select
                                id="interest"
                                className="block w-full bg-white dark:bg-neutral-800 px-4 rounded-md border border-neutral-200 dark:border-neutral-700 py-2 shadow-aceternity text-black dark:text-white focus:ring-2 focus:ring-blue-400 focus:outline-none sm:text-sm"
                                {...field}
                              >
                                <option value="" disabled>Select an option</option>
                                <option value="white-label">White Label Options using this software for my clients and sales process</option>
                                <option value="own-service">Starting my own grant writing service/agency</option>
                                <option value="own-grants">Using the software to write my own grants</option>
                                <option value="agency-account">Agency account: Using the software for finding non-profits (lead gen) and writing grants (Fulfillment)</option>
                              </select>
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="pt-4">
                      <Button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 flex items-center justify-center gap-2 text-base"
                      >
                        Save Your Seat
                        <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </div>
                  </form>
                </Form>

                <div className="mt-6 text-center text-sm text-neutral-500 dark:text-neutral-400">
                  No fluff. No boring theory. Just actionable steps to get high-paying clients and help them win BIG with grants.
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </div>
  );
}
