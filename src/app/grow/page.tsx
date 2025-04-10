import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {Metadata} from "next";
import Image from "next/image";
import {FileText, Briefcase, Laptop, Users} from "lucide-react";

export const metadata: Metadata = {
  title: "Grow | XOps Lab",
  description: "Resume help, job board, interview preparation and career guidance.",
};

export default function GrowPage() {
  return (
    <>
      {/* Hero Section with Background */}
      <div className="bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950 pt-16">
        <div className="container mx-auto py-16 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-extrabold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-500 to-slate-800 dark:from-blue-400 dark:to-indigo-400">
              Grow Your Career
            </h1>
            <p className="text-xl text-slate-700 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Accelerate your professional journey in AI & Cloud with our specialized career resources
            </p>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="container mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {/* Resume Help Card */}
          <Card className="flex flex-col h-[500px] border-0 bg-gradient-to-b from-slate-100 to-slate-200/50 dark:from-slate-800/40 dark:to-slate-700/20 backdrop-blur-sm hover:translate-y-[-4px] transition-transform duration-300">
            <CardHeader className="pb-2 space-y-2 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center mb-2">
                <FileText className="w-6 h-6 text-slate-600 dark:text-slate-300" />
              </div>
              <CardTitle className="text-2xl font-bold">Resume Help</CardTitle>
              <CardDescription className="text-slate-700 dark:text-slate-300">
                Get expert feedback on your resume
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col flex-grow items-center justify-center text-center px-8">
              <Badge className="mb-6 py-1.5 px-4 bg-slate-500/10 text-slate-700 dark:bg-slate-500/20 dark:text-slate-300 rounded-full font-medium">
                Coming Soon
              </Badge>
              <p className="text-slate-700 dark:text-slate-300">
                Our resume review service will connect you with industry professionals who can help optimize your resume
                for AI, ML, and Cloud positions.
              </p>
            </CardContent>
          </Card>

          {/* Job Board Card */}
          <Card className="flex flex-col h-[500px] border-0 bg-gradient-to-b from-slate-100 to-slate-200/50 dark:from-slate-800/40 dark:to-slate-700/20 backdrop-blur-sm hover:translate-y-[-4px] transition-transform duration-300">
            <CardHeader className="pb-2 space-y-2 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center mb-2">
                <Briefcase className="w-6 h-6 text-slate-600 dark:text-slate-300" />
              </div>
              <CardTitle className="text-2xl font-bold">Job Board</CardTitle>
              <CardDescription className="text-slate-700 dark:text-slate-300">
                Curated job opportunities in tech
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col flex-grow items-center justify-center text-center px-8">
              <Badge className="mb-6 py-1.5 px-4 bg-slate-500/10 text-slate-700 dark:bg-slate-500/20 dark:text-slate-300 rounded-full font-medium">
                Coming Soon
              </Badge>
              <p className="text-slate-700 dark:text-slate-300">
                Our curated job board will feature high-quality positions in AI, ML, and Cloud from companies that value
                technical excellence.
              </p>
            </CardContent>
          </Card>

          {/* Interview Prep Card */}
          <Card className="flex flex-col h-[500px] border-0 bg-gradient-to-b from-slate-100 to-slate-200/50 dark:from-slate-800/40 dark:to-slate-700/20 backdrop-blur-sm hover:translate-y-[-4px] transition-transform duration-300">
            <CardHeader className="pb-2 space-y-2 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center mb-2">
                <Laptop className="w-6 h-6 text-slate-600 dark:text-slate-300" />
              </div>
              <CardTitle className="text-2xl font-bold">Interview Prep</CardTitle>
              <CardDescription className="text-slate-700 dark:text-slate-300">
                Resources to ace your technical interviews
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col flex-grow items-center justify-center text-center px-8">
              <Badge className="mb-6 py-1.5 px-4 bg-slate-500/10 text-slate-700 dark:bg-slate-500/20 dark:text-slate-300 rounded-full font-medium">
                Coming Soon
              </Badge>
              <p className="text-slate-700 dark:text-slate-300">
                Practice with our technical interview preparation resources designed specifically for AI, ML, and Cloud
                roles.
              </p>
            </CardContent>
          </Card>

          {/* Mentorship Card */}
          <Card className="flex flex-col h-[500px] border-0 bg-gradient-to-b from-slate-100 to-slate-200/50 dark:from-slate-800/40 dark:to-slate-700/20 backdrop-blur-sm hover:translate-y-[-4px] transition-transform duration-300">
            <CardHeader className="pb-2 space-y-2 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center mb-2">
                <Users className="w-6 h-6 text-slate-600 dark:text-slate-300" />
              </div>
              <CardTitle className="text-2xl font-bold">Mentorship</CardTitle>
              <CardDescription className="text-slate-700 dark:text-slate-300">
                Connect with experienced professionals
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col flex-grow items-center justify-center text-center px-8">
              <Badge className="mb-6 py-1.5 px-4 bg-slate-500/10 text-slate-700 dark:bg-slate-500/20 dark:text-slate-300 rounded-full font-medium">
                Coming Soon
              </Badge>
              <p className="text-slate-700 dark:text-slate-300">
                Our mentorship program will match you with experienced professionals who can provide guidance on your
                AI, ML, and Cloud career journey.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
