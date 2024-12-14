// export default function Home() {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-white">
//       <section className="w-full h-screen flex flex-col items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url(/images/hero-bg.jpg)' }}>
//         <div className="p-8 bg-white bg-opacity-90 rounded-3xl text-center">
//           <h1 className="text-4xl font-extrabold text-black mb-4">Welcome to XOps Lab Community</h1>
//           <p className="text-lg text-gray-700">Join us and be a part of an amazing community!</p>
//           <a
//             href="https://discord.gg/Ez4MShHtjF"
//             className="inline-flex items-center mt-7 px-6 py-3 bg-black text-white font-bold rounded-full shadow-lg hover:bg-gray-800 transition relative animate-bounce">
//             <span className="relative flex h-3 w-3 mr-2">
//               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
//               <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
//             </span>
//             Join Discord
//           </a>
//         </div>
//       </section>
//     </div>
//   );
// }
"use client";
import { Case } from "@/components/cases";
import { Hero5 } from "@/components/hero";

export default function Page() {
  return (
    <main className="px-4 flex h-screen items-center flex-col md:container">
      <div className="p-16 md:p-0">
        <Hero5 />
        {/* <Hero /> */}
        <Case />
      </div>
    </main>
  );
}
