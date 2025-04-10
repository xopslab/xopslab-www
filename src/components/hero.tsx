import {FaDiscord} from "react-icons/fa";
import Link from "next/link";
import {Button} from "@/components/ui/button";

export const Hero5 = () => {
  return (
    <section className="w-full pt-24">
      {" "}
      {/* Added pt-24 for padding top */}
      <div className="container mx-auto">
        <div className="flex gap-8 py-12 items-center justify-center flex-col">
          <div className="flex gap-4 flex-col px-4">
            <h1 className="text-4xl md:text-7xl max-w-5xl text-center font-bold">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-500 to-slate-800">
                Empowering the NextGen of AI & Cloud Native Innovators
              </span>
            </h1>

            <p className="mx-auto text-xl md:text-2xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center mt-6">
              XOps Lab is a global open source community empowering AI & Cloud Native enthusiasts to connect, learn,
              build and grow together.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
            <a
              href="https://discord.gg/Ez4MShHtjF"
              className="inline-flex items-center justify-center h-12 px-6 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-full shadow-lg transition-all text-base">
              <FaDiscord className="mr-2 h-4 w-4" />
              Join Discord
            </a>
            <Link href="/learn">
              <Button
                size="lg"
                className="rounded-full bg-slate-600 hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all h-12 px-6 text-base font-medium">
                Start Learning
                <span className="ml-2 relative inline-flex h-4 w-4">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-white/90"></span>
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
