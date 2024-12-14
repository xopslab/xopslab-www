import {FaDiscord} from "react-icons/fa";

export default function Hero() {
  return (
    <section className="mx-auto flex max-w-3xl flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center text-balance leading-tight lg:leading-[1.1]">
        Welcome to XOps Lab
      </h1>
      <p className="text-lg font-light max-w-xl text-center text-foreground">
        XOps Lab is a global community for AI, ML, and Cloud enthusiasts to connect, learn, and grow together.
      </p>
      <div className="flex gap-4 md:pb-10 items-center">
        <a
          href="https://discord.gg/Ez4MShHtjF"
          className="inline-flex items-center mt-7 px-6 py-3 bg-black text-white font-bold rounded-full shadow-lg hover:bg-gray-800 transition relative animate-bounce">
          <FaDiscord className="mr-2" />
          Join Discord
        </a>
      </div>
    </section>
  );
}

import Link from 'next/link';
import {useEffect, useMemo, useState} from "react";

import {motion} from "framer-motion";

import {MoveRight, PhoneCall} from "lucide-react";
import {Button} from "@/components/ui/button";

export const Hero5 = () => {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(() => ["Machine Learning", "AWS", "AZURE", "GitHub", "MLOps", "DevOps"], []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);
  
  return (
    <div className="w-full">
      <div className="container mx-auto">
        <div className="flex gap-8 py-10 items-center justify-center flex-col">
          <div>
            <Link href="https://debjotyms.com" passHref>
              <Button variant="secondary" size="sm" className="gap-4">
                debjotyms.com <MoveRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
          <div className="flex gap-4 flex-col">
            <h1 className="text-5xl md:text-7xl max-w-2xl text-center font-regular">
              <span className="text-spektr-cyan-50 tracking-tighter">XOps Lab</span>
              <span className="relative flex w-full justify-center overflow-hidden text-center text-4xl md:pb-4 md:pt-1">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold"
                    initial={{opacity: 0, y: "-100"}}
                    transition={{type: "spring", stiffness: 50}}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? -150 : 150,
                            opacity: 0,
                          }
                    }>
                    {title}
                  </motion.span>
                ))}
              </span>
            </h1>

            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
              XOps Lab is a global community for AI, ML, and Cloud enthusiasts to connect, learn, and grow together.
            </p>
          </div>
          <div className="flex flex-row gap-3">
            <div className="flex gap-4 md:pb-10 items-center">
              <a
                href="https://discord.gg/Ez4MShHtjF"
                className="inline-flex items-center mt-7 px-6 py-3 bg-black text-white font-bold rounded-full shadow-lg hover:bg-gray-800 transition relative animate-bounce">
                <FaDiscord className="mr-2" />
                Join Discord
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
