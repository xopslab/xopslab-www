"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Loader2, Construction } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function UnderConstructionHero({ pageName = "This page" }) {
  const [loadingText, setLoadingText] = useState("Building awesome features");
  const [counter, setCounter] = useState(0);

  // Simulate a "building" effect with changing ellipsis
  useEffect(() => {
    const interval = setInterval(() => {
      const dots = ".".repeat((counter % 3) + 1);
      setLoadingText(`Building awesome features${dots}`);
      setCounter(prev => prev + 1);
    }, 2000);
    
    return () => clearInterval(interval);
  }, [counter]);

  const funnyMessages = [
    "Our code monkeys are still typing...",
    "Teaching AI to build this page correctly...",
    "Still writing documentation (just kidding, no one writes docs)",
    "Coffee break... be back in 5 minutes",
    "Looking for that missing semicolon",
    "Waiting for Stack Overflow to load",
  ];

  const randomMessage = funnyMessages[Math.floor(Math.random() * funnyMessages.length)];

  return (
    <section className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="max-w-3xl w-full text-center">
        <motion.div 
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="mx-auto mb-6 bg-yellow-200 rounded-full p-6 w-24 h-24 flex items-center justify-center"
        >
          <Construction size={40} className="text-yellow-600" />
        </motion.div>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          {pageName} Is Under Construction
        </h1>
        
        <p className="text-xl mb-8 text-muted-foreground">{randomMessage}</p>
        
        <div className="flex items-center justify-center mb-8">
          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
          <span className="text-lg font-medium">{loadingText}</span>
        </div>
        
        <div className="space-y-4">
          <p className="text-lg">
            Meanwhile, why not check out some other parts of our site?
          </p>
          
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/">
              <Button variant="outline" size="lg">
                Back to Home
              </Button>
            </Link>
            <Link href="/learn">
              <Button variant="outline" size="lg">
                Learn Something New
              </Button>
            </Link>
          </div>
          
          <p className="text-sm text-muted-foreground mt-8">
            Estimated completion time: Soon
          </p>
        </div>
      </div>
    </section>
  );
}