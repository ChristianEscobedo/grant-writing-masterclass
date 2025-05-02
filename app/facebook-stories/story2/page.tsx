"use client";

import { Container } from "@/components/container";
import { Background } from "@/components/background";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconArrowLeft, IconBrandFacebook, IconDownload } from "@tabler/icons-react";
import { Button } from "@/components/button";
import Image from "next/image";
import { useState } from "react";

export default function Story2Page() {
  const [htmlCopied, setHtmlCopied] = useState(false);

  const storyHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Grant Success Rates: AI vs Traditional</title>
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
      background: linear-gradient(135deg, #0f172a 0%, #334155 100%);
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
    .comparison {
      display: flex;
      justify-content: space-between;
      width: 90%;
      margin-bottom: 60px;
    }
    .method {
      width: 45%;
      padding: 30px;
      border-radius: 20px;
    }
    .traditional {
      background-color: rgba(239, 68, 68, 0.2);
      border: 2px solid #ef4444;
    }
    .ai {
      background-color: rgba(34, 197, 94, 0.2);
      border: 2px solid #22c55e;
    }
    .method-title {
      font-size: 36px;
      font-weight: bold;
      margin-bottom: 20px;
    }
    .success-rate {
      font-size: 72px;
      font-weight: bold;
      margin-bottom: 10px;
    }
    .traditional .success-rate {
      color: #ef4444;
    }
    .ai .success-rate {
      color: #22c55e;
    }
    .metric {
      display: flex;
      justify-content: space-between;
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
    <h1 class="title">Grant Success Rates:<br>AI vs Traditional</h1>
    <p class="subtitle">A data-driven comparison for sophisticated grant professionals</p>
    
    <div class="comparison">
      <div class="method traditional">
        <div class="method-title">Traditional</div>
        <div class="success-rate">7-10%</div>
        <div class="metric">
          <span>Time per Grant</span>
          <span>40+ hours</span>
        </div>
        <div class="metric">
          <span>Revision Cycles</span>
          <span>5-7</span>
        </div>
        <div class="metric">
          <span>Data Integration</span>
          <span>Manual</span>
        </div>
      </div>
      
      <div class="method ai">
        <div class="method-title">AI-Powered</div>
        <div class="success-rate">25%</div>
        <div class="metric">
          <span>Time per Grant</span>
          <span>4-6 hours</span>
        </div>
        <div class="metric">
          <span>Revision Cycles</span>
          <span>1-2</span>
        </div>
        <div class="metric">
          <span>Data Integration</span>
          <span>Automated</span>
        </div>
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
                  Day 2
                </span>
              </div>

              <div className="border-t border-neutral-200 dark:border-neutral-700 pt-6 mb-6">
                <h1 className="text-2xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">Grant Success Rates: AI vs Traditional</h1>
                <div className="bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300 text-sm px-3 py-2 rounded-md mb-4">
                  <strong>Target Audience:</strong> Sophisticated audience (Already Writing Grants or Aware Of Grant writing)
                </div>
              </div>

              <div className="prose prose-blue dark:prose-invert max-w-none">
                <h3>Story Content</h3>
                <p>This Facebook Story presents a data-driven comparison between traditional grant writing methods and our AI-powered approach. It's designed to appeal to sophisticated grant professionals who understand the metrics that matter:</p>
                
                <ul>
                  <li><strong>Success Rate Comparison:</strong> Contrasts the industry average (7-10%) with our AI-powered results (25%)</li>
                  <li><strong>Time Efficiency:</strong> Highlights the dramatic reduction in hours required (40+ vs 4-6)</li>
                  <li><strong>Process Improvements:</strong> Shows how AI reduces revision cycles and automates data integration</li>
                </ul>
                
                <p>The design uses a professional dark gradient background with a clear visual distinction between traditional (red) and AI-powered (green) methods. The side-by-side comparison format allows sophisticated viewers to quickly grasp the advantages without oversimplification.</p>
                
                <h3>Usage Instructions</h3>
                <p>This story should be posted on Day 2 to complement the second Facebook post. It's designed to provide concrete, quantifiable evidence that will resonate with data-driven professionals who are already familiar with grant writing processes and metrics.</p>
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
              <div className="relative h-[600px] bg-gradient-to-br from-slate-900 to-slate-600 flex flex-col items-center justify-center p-8 text-white text-center">
                <Image
                  src="/GrantBuilder-AI-Dark.png"
                  alt="Grant Builder AI"
                  width={150}
                  height={40}
                  className="mb-6"
                />
                <h1 className="text-3xl font-bold mb-3">Grant Success Rates:<br/>AI vs Traditional</h1>
                <p className="text-lg mb-6 max-w-md">A data-driven comparison for sophisticated grant professionals</p>
                
                <div className="flex justify-between w-full max-w-md mb-6 space-x-4">
                  <div className="bg-red-500/20 border-2 border-red-500 rounded-lg p-4 flex-1">
                    <div className="font-bold mb-2">Traditional</div>
                    <div className="text-red-500 text-3xl font-bold mb-2">7-10%</div>
                    <div className="text-sm border-b border-white/20 py-1 flex justify-between">
                      <span>Time per Grant</span>
                      <span>40+ hrs</span>
                    </div>
                    <div className="text-sm border-b border-white/20 py-1 flex justify-between">
                      <span>Revision Cycles</span>
                      <span>5-7</span>
                    </div>
                    <div className="text-sm py-1 flex justify-between">
                      <span>Data Integration</span>
                      <span>Manual</span>
                    </div>
                  </div>
                  
                  <div className="bg-green-500/20 border-2 border-green-500 rounded-lg p-4 flex-1">
                    <div className="font-bold mb-2">AI-Powered</div>
                    <div className="text-green-500 text-3xl font-bold mb-2">25%</div>
                    <div className="text-sm border-b border-white/20 py-1 flex justify-between">
                      <span>Time per Grant</span>
                      <span>4-6 hrs</span>
                    </div>
                    <div className="text-sm border-b border-white/20 py-1 flex justify-between">
                      <span>Revision Cycles</span>
                      <span>1-2</span>
                    </div>
                    <div className="text-sm py-1 flex justify-between">
                      <span>Data Integration</span>
                      <span>Automated</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4">
                  <p className="text-lg font-bold">Join Our Free Masterclass</p>
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
