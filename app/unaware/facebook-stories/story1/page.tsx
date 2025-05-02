"use client";

import { Container } from "@/components/container";
import { Background } from "@/components/background";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconArrowLeft, IconBrandFacebook, IconDownload } from "@tabler/icons-react";
import { Button } from "@/components/button";
import Image from "next/image";
import { useState } from "react";

export default function UnawareStory1Page() {
  const [htmlCopied, setHtmlCopied] = useState(false);

  const storyHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>From Struggling Freelancer to $15K/Month</title>
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
      background: linear-gradient(135deg, #6b46c1 0%, #9f7aea 100%);
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
    .before-after {
      display: flex;
      justify-content: space-between;
      width: 90%;
      margin-bottom: 60px;
    }
    .column {
      width: 45%;
      padding: 30px;
      border-radius: 20px;
    }
    .before {
      background-color: rgba(255, 0, 0, 0.2);
      border: 2px solid rgba(255, 0, 0, 0.5);
    }
    .after {
      background-color: rgba(0, 255, 0, 0.2);
      border: 2px solid rgba(0, 255, 0, 0.5);
    }
    .column-title {
      font-size: 36px;
      font-weight: bold;
      margin-bottom: 20px;
    }
    .metric {
      font-size: 24px;
      margin-bottom: 15px;
      padding-bottom: 15px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    }
    .metric:last-child {
      border-bottom: none;
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
    <h1 class="title">From Struggling Freelancer to $15K/Month</h1>
    <p class="subtitle">How Sarah transformed her business with grant writing</p>
    
    <div class="before-after">
      <div class="column before">
        <div class="column-title">BEFORE</div>
        <div class="metric">50+ hours/week</div>
        <div class="metric">$3-4K/month</div>
        <div class="metric">Constant hustle</div>
        <div class="metric">Fierce competition</div>
      </div>
      
      <div class="column after">
        <div class="column-title">AFTER</div>
        <div class="metric">25 hours/week</div>
        <div class="metric">$15K/month</div>
        <div class="metric">Retainer clients</div>
        <div class="metric">Minimal competition</div>
      </div>
    </div>
    
    <p class="cta">Learn How at Our Free Masterclass</p>
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
              href="/unaware/facebook-stories"
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
                <h1 className="text-2xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">From Struggling Freelancer to $15K/Month</h1>
                <div className="bg-rose-100 dark:bg-rose-900/30 text-rose-800 dark:text-rose-300 text-sm px-3 py-2 rounded-md mb-4">
                  <strong>Target Audience:</strong> Low Sophistication (Unaware of Grant Writing)
                </div>
              </div>

              <div className="prose prose-blue dark:prose-invert max-w-none">
                <h3>Story Content</h3>
                <p>This Facebook Story presents a clear before-and-after transformation that resonates with struggling freelancers. It's designed to:</p>
                
                <ul>
                  <li><strong>Highlight the contrast</strong> between the freelancer's life before and after discovering grant writing</li>
                  <li><strong>Focus on metrics that matter</strong> to freelancers (income, hours worked, client stability)</li>
                  <li><strong>Create desire</strong> through a relatable success story</li>
                  <li><strong>Use visual design</strong> to emphasize the transformation (red for before, green for after)</li>
                </ul>
                
                <p>The design uses a purple gradient background that stands out in feeds and creates a professional, premium feel. The before/after format makes the benefits immediately clear without requiring deep understanding of grant writing itself.</p>
                
                <h3>Usage Instructions</h3>
                <p>This story should be posted on Day 1 to complement the first Facebook post. It's designed to create immediate interest by showing the transformation possible with grant writing, even for those who have never considered it before.</p>
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
              <div className="relative h-[600px] bg-gradient-to-br from-purple-700 to-purple-400 flex flex-col items-center justify-center p-8 text-white text-center">
                <Image
                  src="/GrantBuilder-AI-Dark.png"
                  alt="Grant Builder AI"
                  width={150}
                  height={40}
                  className="mb-8"
                />
                <h1 className="text-3xl font-bold mb-4">From Struggling Freelancer to $15K/Month</h1>
                <p className="text-xl mb-6 max-w-md">How Sarah transformed her business with grant writing</p>
                
                <div className="flex justify-between w-full max-w-md mb-6 space-x-4">
                  <div className="bg-red-500/20 border-2 border-red-500/50 rounded-lg p-4 flex-1">
                    <div className="font-bold mb-2">BEFORE</div>
                    <div className="text-sm border-b border-white/20 py-1">50+ hours/week</div>
                    <div className="text-sm border-b border-white/20 py-1">$3-4K/month</div>
                    <div className="text-sm border-b border-white/20 py-1">Constant hustle</div>
                    <div className="text-sm py-1">Fierce competition</div>
                  </div>
                  
                  <div className="bg-green-500/20 border-2 border-green-500/50 rounded-lg p-4 flex-1">
                    <div className="font-bold mb-2">AFTER</div>
                    <div className="text-sm border-b border-white/20 py-1">25 hours/week</div>
                    <div className="text-sm border-b border-white/20 py-1">$15K/month</div>
                    <div className="text-sm border-b border-white/20 py-1">Retainer clients</div>
                    <div className="text-sm py-1">Minimal competition</div>
                  </div>
                </div>
                
                <div className="mt-4">
                  <p className="text-lg font-bold">Learn How at Our Free Masterclass</p>
                  <p className="text-sm">May 3rd at 2:00 PM EST</p>
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
