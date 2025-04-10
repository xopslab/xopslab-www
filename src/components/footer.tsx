import Link from "next/link";
import {FaDiscord, FaTwitter, FaGithub, FaLinkedin, FaYoutube} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t bg-slate-50/50 dark:bg-slate-950/50">
      <div className="container mx-auto max-w-6xl py-12 px-4">
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 w-full max-w-5xl">
            <div className="space-y-4 md:col-span-6">
              <h3 className="text-lg font-bold">XOps Lab</h3>
              <p className="text-sm text-muted-foreground">
                XOps Lab is a global open source community empowering AI & Cloud Native enthusiasts to connect, learn,
                build and grow together.
              </p>
              <div className="flex space-x-4">
                <a href="https://discord.gg/Ez4MShHtjF" className="text-muted-foreground hover:text-foreground">
                  <FaDiscord size={20} />
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  <FaTwitter size={20} />
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  <FaGithub size={20} />
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  <FaLinkedin size={20} />
                </a>
                <a href="https://www.youtube.com/@debjotyms" className="text-muted-foreground hover:text-foreground">
                  <FaYoutube size={20} />
                </a>
              </div>
            </div>

            <div className="md:col-span-6 grid grid-cols-3 gap-4">
              <div>
                <h3 className="text-lg font-bold mb-4">Resources</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/learn" className="text-sm text-muted-foreground hover:text-foreground">
                      Tutorials
                    </Link>
                  </li>
                  <li>
                    <Link href="/build" className="text-sm text-muted-foreground hover:text-foreground">
                      Projects
                    </Link>
                  </li>
                  <li>
                    <Link href="/learn" className="text-sm text-muted-foreground hover:text-foreground">
                      Courses
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-4">Community</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/community" className="text-sm text-muted-foreground hover:text-foreground">
                      Discord
                    </Link>
                  </li>
                  <li>
                    <Link href="/grow" className="text-sm text-muted-foreground hover:text-foreground">
                      Career Help
                    </Link>
                  </li>
                  <li>
                    <Link href="/community" className="text-sm text-muted-foreground hover:text-foreground">
                      Events
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-4">Legal</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                      Terms of Service
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                      Cookie Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} XOps Lab. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
