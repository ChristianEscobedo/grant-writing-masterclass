"use client";

import { Container } from "@/components/container";
import { Background } from "@/components/background";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconArrowLeft, IconBrandFacebook, IconDownload } from "@tabler/icons-react";
import { Button } from "@/components/button";
import Image from "next/image";
import { useState } from "react";

export default function Story1Page() {
  const [htmlCopied, setHtmlCopied] = useState(false);

  const storyHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>The $50M Grant Writing Formula</title>
  <style>
    body, html {
      margin: 0;
      padding: 0;
      width: 1080px;
      height: 1920px;
      font-family: Arial, sans-serif;
      overflow: hidden;
    }
    .story-container {
      width: 100%;
      height: 100%;
      background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
      color: white;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      padding: 40px;
      box-sizing: border-box;
    }
    .logo {
      width: 200px;
      margin-bottom: 40px;
    }
    .title {
      font-size: 72px;
      font-weight: bold;
      margin-bottom: 30px;
      line-height: 1.2;
    }
    .subtitle {
      font-size: 36px;
      margin-bottom: 60px;
      line-height: 1.4;
      max-width: 80%;
    }
    .stats {
      display: flex;
      justify-content: space-between;
      width: 80%;
      margin-bottom: 60px;
    }
    .stat {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .stat-number {
      font-size: 64px;
      font-weight: bold;
      margin-bottom: 10px;
    }
    .stat-label {
      font-size: 24px;
    }
    .cta {
      font-size: 36px;
      font-weight: bold;
      margin-top: 60px;
    }
    .date {
      font-size: 30px;
      margin-top: 20px;
    }
  </style>
</head>
<body>
  <div class="story-container">
    <img src="https://ai-saas-template-aceternity.vercel.app/GrantBuilder-AI-Dark.png" alt="Grant Builder AI" class="logo">
    <h1 class="title">The $50M Grant Writing Formula</h1>
    <p class="subtitle">How our AI-powered system is revolutionizing grant writing for sophisticated professionals</p>
    
    <div class="stats">
      <div class="stat">
        <div class="stat-number">$50M+</div>
        <div class="stat-label">Total Funding</div>
      </div>
      <div class="stat">
        <div class="stat-number">25%</div>
        <div class="stat-label">Success Rate</div>
      </div>
      <div class="stat">
        <div class="stat-number">90%</div>
        <div class="stat-label">Time Saved</div>
      </div>
    </div>
    
    <p class="cta">Join Our Free Masterclass</p>
    <p class="date">May 3rd at 2:00 PM EST</p>
  </div>
</body>
</html>
  `;

  const copyHtml = () => {
    navigator.clipboard.writeText(storyHtml);
    setHtmlCopied(true);
    setTimeout(() => setHtmlCopied(false), 2000);
  };

  return (
    <div className="relative">
      <div className="absolute inset-0 h-full w-full overflow-hidden">
        <Background />
      </div>
      <Container className="flex min-h-screen flex-col py-20">
        <div className="w-full max-w-4xl mx-auto">
          <div className="mb-8">
            <Button
              as={Link}
              href="/facebook-stories"
              className="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-700"
            >
              <IconArrowLeft className="h-4 w-4 mr-2" />
              Back to All Stories
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-neutral-900 rounded-xl p-8 shadow-aceternity relative z-10 border border-neutral-200 dark:border-neutral-800"
            >
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center">
                  <IconBrandFacebook className="h-5 w-5 text-blue-600 mr-2" />
                  <h2 className="text-xl font-semibold text-neutral-800 dark:text-neutral-200">Facebook Story</h2>
                </div>
                <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs px-2 py-1 rounded">
                  Day 1
                </span>
              </div>

              <div className="border-t border-neutral-200 dark:border-neutral-700 pt-6 mb-6">
                <h1 className="text-2xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">The $50M Grant Writing Formula</h1>
                <div className="bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300 text-sm px-3 py-2 rounded-md mb-4">
                  <strong>Target Audience:</strong> Sophisticated audience (Already Writing Grants or Aware Of Grant writing)
                </div>
              </div>

              <div className="prose prose-blue dark:prose-invert max-w-none">
                <h3>Story Content</h3>
                <p>This Facebook Story highlights Gwen's impressive track record of securing over $50 million in grants using our AI-powered system. It's designed to immediately capture the attention of sophisticated grant writers and organizations by showcasing concrete metrics that matter to them:</p>
                
                <ul>
                  <li><strong>$50M+ Total Funding:</strong> Establishes credibility with a specific, impressive number</li>
                  <li><strong>25% Success Rate:</strong> Highlights performance well above industry average (typically 7-10%)</li>
                  <li><strong>90% Time Saved:</strong> Addresses a key pain point for experienced grant writers</li>
                </ul>
                
                <p>The design uses a professional blue gradient background with clean typography to appeal to a sophisticated audience. The call-to-action is clear but not overly sales-focused, respecting the audience's professional sensibilities.</p>
                
                <h3>Usage Instructions</h3>
                <p>This story should be posted on Day 1 to complement the first Facebook post. It's designed to establish immediate credibility with sophisticated grant writers and organizations who will recognize the significance of the metrics presented.</p>
              </div>
              
              <div className="mt-6">
                <Button
                  onClick={copyHtml}
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  <IconDownload className="h-4 w-4 mr-2" />
                  {htmlCopied ? "HTML Copied!" : "Copy HTML"}
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white dark:bg-neutral-900 rounded-xl overflow-hidden shadow-aceternity relative z-10 border border-neutral-200 dark:border-neutral-800"
            >
              <div className="relative h-[600px] bg-gradient-to-br from-blue-900 to-blue-500 flex flex-col items-center justify-center p-8 text-white text-center">
                <Image
                  src="/GrantBuilder-AI-Dark.png"
                  alt="Grant Builder AI"
                  width={150}
                  height={40}
                  className="mb-8"
                />
                <h1 className="text-4xl font-bold mb-4">The $50M Grant Writing Formula</h1>
                <p className="text-xl mb-8 max-w-md">How our AI-powered system is revolutionizing grant writing for sophisticated professionals</p>
                
                <div className="flex justify-between w-full max-w-md mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-1">$50M+</div>
                    <div className="text-sm">Total Funding</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-1">25%</div>
                    <div className="text-sm">Success Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-1">90%</div>
                    <div className="text-sm">Time Saved</div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <p className="text-xl font-bold">Join Our Free Masterclass</p>
                  <p className="text-lg">May 3rd at 2:00 PM EST</p>
                </div>
              </div>
              
              <div className="p-4 bg-neutral-100 dark:bg-neutral-800 text-center">
                <p className="text-sm text-neutral-500 dark:text-neutral-400">Preview of how the story will appear on mobile devices</p>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </div>
  );
}
