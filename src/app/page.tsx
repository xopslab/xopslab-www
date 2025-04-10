"use client";
import {Hero5} from "@/components/hero";
import EventCards from "@/components/EventCards";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {LucideBookOpen, Code, TrendingUp, Crown} from "lucide-react";
import Link from "next/link";

export default function Page() {
  const features = [
    {
      icon: <LucideBookOpen className="h-10 w-10 text-blue-500" />,
      title: "Learn",
      description: "Access free tutorials, articles and videos",
      link: "/learn",
    },
    {
      icon: <Code className="h-10 w-10 text-indigo-500" />,
      title: "Build",
      description: "Contribute to open-source projects",
      link: "/build",
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-purple-500" />,
      title: "Grow",
      description: "Get career advice and interview prep",
      link: "/grow",
    }
  ];

  return (
    <>
      <Hero5 />

      {/* Features Section */}
      <section className="bg-slate-50 dark:bg-slate-900/50">
        <EventCards />
      </section>
    </>
  );
}
