import {Metadata} from "next";
import UnderConstructionHero from "@/components/UnderConstructionHero";

export const metadata: Metadata = {
  title: "Learn | XOps Lab",
  description: "Free tutorials, blogs, and videos to help you learn AI, ML, and Cloud technologies.",
};

const tutorials = [
  {
    title: "Introduction to Machine Learning",
    description: "Learn the fundamentals of Machine Learning algorithms",
    category: "ML",
    level: "Beginner",
    duration: "1 hour",
    link: "#",
  },
  {
    title: "LangChain 101",
    description: "Build your first LLM application with LangChain",
    category: "AI",
    level: "Intermediate",
    duration: "45 minutes",
    link: "#",
  },
  {
    title: "Deploy an ML Model on AWS",
    description: "Step by step guide to deploy your ML models to production",
    category: "AWS",
    level: "Advanced",
    duration: "2 hours",
    link: "#",
  },
  {
    title: "GitHub Actions for MLOps",
    description: "Automate your ML workflows with GitHub Actions",
    category: "MLOps",
    level: "Intermediate",
    duration: "1.5 hours",
    link: "#",
  },
  {
    title: "Azure ML Services Overview",
    description: "Comprehensive guide to Azure's ML offerings",
    category: "Azure",
    level: "Beginner",
    duration: "1 hour",
    link: "#",
  },
  {
    title: "Building a CI/CD Pipeline",
    description: "Learn how to build a robust CI/CD pipeline",
    category: "DevOps",
    level: "Intermediate",
    duration: "1.5 hours",
    link: "#",
  },
];

export default function LearnPage() {
  return (
    <>
      {/* Hero Section with Background */}
      <div className="bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950 pt-16">
        <div className="container mx-auto pt-16 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-extrabold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-500 to-slate-800 dark:from-blue-400 dark:to-indigo-400">
              Learn Without Limits
            </h1>
            <p className="text-xl text-slate-700 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Free tutorials, blogs, and videos to help you learn AI, ML, and Cloud technologies.
            </p>
          </div>
        </div>
      </div>
      <UnderConstructionHero/>
    </>
  );
}
