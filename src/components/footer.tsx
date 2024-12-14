import {FaGithub, FaInstagram, FaLinkedin, FaMailBulk} from "react-icons/fa";
import {Button} from "./ui/button";
import Link from "next/link";
import { FaSquareXTwitter, FaTwitter, FaX } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="px-4 md:container py-12 align-bottom mt-auto" id="footer">
      <ul className="flex flex-wrap gap-4 justify-center">
        <li>
          <Link href="https://www.linkedin.com/in/debjotyms/" target="_blank" rel="noopener noreferrer">
            <Button variant="outline">
              <FaLinkedin className="h-4 w-4 mr-2" />
              @debjotyms
            </Button>
          </Link>
        </li>
        <li>
          <Link href="https://www.instagram.com/debjotyms/" target="_blank" rel="noopener noreferrer">
            <Button variant="outline">
              <FaSquareXTwitter className="h-4 w-4 mr-2" />
              @debjotyms
            </Button>
          </Link>
        </li>
        <li>
          <Link href="https://github.com/debjotyms" target="_blank" rel="noopener noreferrer">
            <Button variant="outline">
              <FaGithub className="h-4 w-4 mr-2" />
              @debjotyms
            </Button>
          </Link>
        </li>
        <li>
          <Link href="https://www.instagram.com/debjotyms/" target="_blank" rel="noopener noreferrer">
            <Button variant="outline">
              <FaInstagram className="h-4 w-4 mr-2" />
              @debjotyms
            </Button>
          </Link>
        </li>
        <li>
          <Link href="mailto:debjotyms@gmail.com">
            <Button variant="outline">
              <FaMailBulk className="h-4 w-4 mr-2" />
              debjotyms@gmail.com
            </Button>
          </Link>
        </li>
      </ul>
    </footer>
  );
}
