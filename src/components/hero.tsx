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
