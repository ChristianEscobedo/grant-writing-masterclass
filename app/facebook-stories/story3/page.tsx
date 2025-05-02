"use client";

import { Container } from "@/components/container";
import { Background } from "@/components/background";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconArrowLeft, IconBrandFacebook, IconDownload } from "@tabler/icons-react";
import { Button } from "@/components/button";
import Image from "next/image";
import { useState } from "react";

export default function Story3Page() {
  const [htmlCopied, setHtmlCopied] = useState(false);

  const storyHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>5 Advanced Grant Writing Strategies for 2025</title>
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
      background: linear-gradient(135deg, #1e293b 0%, #475569 100%);
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
      font-size: 64px;
      font-weight: bold;
      margin-bottom: 30px;
      line-height: 1.2;
    }
    .subtitle {
      font-size: 32px;
      margin-bottom: 60px;
      line-height: 1.4;
      max-width: 80%;
    }
    .strategies {
      width: 90%;
      margin-bottom: 60px;
    }
    .strategy {
      background-color: rgba(255, 255, 255, 0.1);
      border-radius: 15px;
      padding: 25px;
      margin-bottom: 20px;
      text-align: left;
      border-left: 5px solid #3b82f6;
    }
    .strategy-number {
      display: inline-block;
      width: 40px;
      height: 40px;
      background-color: #3b82f6;
      color: white;
      border-radius: 50%;
      text-align: center;
      line-height: 40px;
      font-size: 24px;
      font-weight: bold;
      margin-right: 15px;
      vertical-align: middle;
    }
    .strategy-title {
      display: inline-block;
      font-size: 32px;
      font-weight: bold;
      vertical-align: middle;
    }
    .strategy-description {
      font-size: 24px;
      margin-top: 15px;
      line-height: 1.4;
    }
    .cta {
      font-size: 36px;
      font-weight: bold;
      margin-top: 40px;
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
    <h1 class="title">5 Advanced Grant Writing Strategies for 2025</h1>
    <p class="subtitle">Cutting-edge approaches for sophisticated grant professionals</p>
    
    <div class="strategies">
      <div class="strategy">
        <span class="strategy-number">1</span>
        <span class="strategy-title">Outcome-Based Narratives</span>
        <p class="strategy-description">Structure proposals around measurable outcomes rather than activities, using AI to generate predictive impact models.</p>
      </div>
      
      <div class="strategy">
        <span class="strategy-number">2</span>
        <span class="strategy-title">Algorithmic Funder Matching</span>
        <p class="strategy-description">Use data analytics to identify optimal funders based on historical award patterns and organizational alignment scores.</p>
      </div>
      
      <div class="strategy">
        <span class="strategy-number">3</span>
        <span class="strategy-title">Integrated Data Visualization</span>
        <p class="strategy-description">Embed interactive data visualizations that demonstrate need, capacity, and projected outcomes.</p>
      </div>
      
      <div class="strategy">
        <span class="strategy-number">4</span>
        <span class="strategy-title">Multi-funder Proposal Architecture</span>
        <p class="strategy-description">Design modular proposals that can be efficiently adapted for multiple funding sources simultaneously.</p>
      </div>
      
      <div class="strategy">
        <span class="strategy-number">5</span>
        <span class="strategy-title">AI-Powered Competitive Analysis</span>
        <p class="strategy-description">Analyze previously funded proposals to identify key differentiators and success patterns specific to each funder.</p>
      </div>
    </div>
    
    <p class="cta">Learn These Strategies in Our Free Masterclass</p>
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
                  Day 3
                </span>
              </div>

              <div className="border-t border-neutral-200 dark:border-neutral-700 pt-6 mb-6">
                <h1 className="text-2xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">5 Advanced Grant Writing Strategies for 2025</h1>
                <div className="bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300 text-sm px-3 py-2 rounded-md mb-4">
                  <strong>Target Audience:</strong> Sophisticated audience (Already Writing Grants or Aware Of Grant writing)
                </div>
              </div>

              <div className="prose prose-blue dark:prose-invert max-w-none">
                <h3>Story Content</h3>
                <p>This Facebook Story presents five advanced grant writing strategies that sophisticated grant professionals can implement in 2025. It's designed to position your masterclass as cutting-edge and valuable even to experienced grant writers:</p>
                
                <ul>
                  <li><strong>Outcome-Based Narratives:</strong> Appeals to the shift toward results-focused funding</li>
                  <li><strong>Algorithmic Funder Matching:</strong> Highlights the data-driven approach to finding optimal funding sources</li>
                  <li><strong>Integrated Data Visualization:</strong> Addresses the growing importance of visual data presentation</li>
                  <li><strong>Multi-funder Proposal Architecture:</strong> Speaks to efficiency and scalability concerns</li>
                  <li><strong>AI-Powered Competitive Analysis:</strong> Emphasizes the competitive advantage of AI</li>
                </ul>
                
                <p>The design uses a professional slate gradient background with clean, numbered strategy cards that make the content easy to scan. The technical language and advanced concepts signal to sophisticated viewers that this isn't basic content.</p>
                
                <h3>Usage Instructions</h3>
                <p>This story should be posted on Day 3 to complement the third Facebook post. It's designed to demonstrate your expertise and the advanced nature of your masterclass content, appealing specifically to experienced grant writers looking to stay at the cutting edge.</p>
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
              <div className="relative h-[600px] bg-gradient-to-br from-slate-800 to-slate-600 flex flex-col items-center justify-start p-8 text-white text-center overflow-y-auto">
                <Image
                  src="/GrantBuilder-AI-Dark.png"
                  alt="Grant Builder AI"
                  width={150}
                  height={40}
                  className="mb-6"
                />
                <h1 className="text-2xl font-bold mb-3">5 Advanced Grant Writing Strategies for 2025</h1>
                <p className="text-sm mb-6 max-w-md">Cutting-edge approaches for sophisticated grant professionals</p>
                
                <div className="w-full space-y-3">
                  <div className="bg-white/10 rounded-lg p-3 text-left border-l-4 border-blue-500">
                    <div>
                      <span className="inline-block w-6 h-6 bg-blue-500 rounded-full text-center text-sm font-bold mr-2">1</span>
                      <span className="font-bold">Outcome-Based Narratives</span>
                    </div>
                    <p className="text-xs mt-2">Structure proposals around measurable outcomes rather than activities, using AI to generate predictive impact models.</p>
                  </div>
                  
                  <div className="bg-white/10 rounded-lg p-3 text-left border-l-4 border-blue-500">
                    <div>
                      <span className="inline-block w-6 h-6 bg-blue-500 rounded-full text-center text-sm font-bold mr-2">2</span>
                      <span className="font-bold">Algorithmic Funder Matching</span>
                    </div>
                    <p className="text-xs mt-2">Use data analytics to identify optimal funders based on historical award patterns and organizational alignment scores.</p>
                  </div>
                  
                  <div className="bg-white/10 rounded-lg p-3 text-left border-l-4 border-blue-500">
                    <div>
                      <span className="inline-block w-6 h-6 bg-blue-500 rounded-full text-center text-sm font-bold mr-2">3</span>
                      <span className="font-bold">Integrated Data Visualization</span>
                    </div>
                    <p className="text-xs mt-2">Embed interactive data visualizations that demonstrate need, capacity, and projected outcomes.</p>
                  </div>
                  
                  <div className="bg-white/10 rounded-lg p-3 text-left border-l-4 border-blue-500">
                    <div>
                      <span className="inline-block w-6 h-6 bg-blue-500 rounded-full text-center text-sm font-bold mr-2">4</span>
                      <span className="font-bold">Multi-funder Proposal Architecture</span>
                    </div>
                    <p className="text-xs mt-2">Design modular proposals that can be efficiently adapted for multiple funding sources simultaneously.</p>
                  </div>
                  
                  <div className="bg-white/10 rounded-lg p-3 text-left border-l-4 border-blue-500">
                    <div>
                      <span className="inline-block w-6 h-6 bg-blue-500 rounded-full text-center text-sm font-bold mr-2">5</span>
                      <span className="font-bold">AI-Powered Competitive Analysis</span>
                    </div>
                    <p className="text-xs mt-2">Analyze previously funded proposals to identify key differentiators and success patterns specific to each funder.</p>
                  </div>
                </div>
                
                <div className="mt-4">
                  <p className="text-sm font-bold">Learn These Strategies in Our Free Masterclass</p>
                  <p className="text-xs">May 3rd at 2:00 PM EST</p>
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
