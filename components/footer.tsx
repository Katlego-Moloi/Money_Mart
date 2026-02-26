import Image from "next/image";
import Link from "next/link";
import { LinkedinIcon, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-16">
        {/* Top row */}
        <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/logo-negative.png"
              alt="MoneyMart Logo"
              width={200}
              height={87}
              className="h-12 w-auto object-contain"
            />
          </Link>

          {/* Footer Navigation */}
          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap items-center gap-6"
          >
            <Link
              href="#services"
              className="text-sm text-background/70 transition-colors hover:text-background"
            >
              Services
            </Link>
            <Link
              href="#about"
              className="text-sm text-background/70 transition-colors hover:text-background"
            >
              About Us
            </Link>
            <Link
              href="#team"
              className="text-sm text-background/70 transition-colors hover:text-background"
            >
              Team
            </Link>
          </nav>

          {/* Social */}
          <div className="flex items-center gap-3">
            <a
              aria-label="LinkedIn"
              href="#"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-background/10 text-background transition-colors hover:bg-background/20"
            >
              <LinkedinIcon className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Contact info */}
        <div className="mt-8 flex flex-col gap-3 border-t border-background/10 pt-8">
          <div className="text-sm font-semibold text-background">
            Contact us:
          </div>
          <div className="flex flex-col gap-2 text-sm text-background/70">
            <a
              href="mailto:moneymartloansandinvestments@gmail.com"
              className="flex items-center gap-2 transition-colors hover:text-background"
            >
              <Mail className="h-4 w-4" />
              moneymartloansandinvestments@gmail.com
            </a>
            <a
              href="tel:+27686750971"
              className="flex items-center gap-2 transition-colors hover:text-background"
            >
              <Phone className="h-4 w-4" />
              +27 68 675 0971
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 border-t border-background/10 pt-8">
          <p className="text-center text-sm text-background/50">
            &copy; 2025 Money Mart. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
