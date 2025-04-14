import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import {cn} from "@/lib/utils";
import Footer from "@/components/footer";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "XOps Lab",
  description: "A global open source community empowering AI & Cloud Native enthusiasts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={cn(
          inter.className,
          "min-h-screen bg-gradient-to-b from-background to-slate-50 dark:from-background dark:to-slate-900/50"
        )}
        suppressHydrationWarning={true}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
