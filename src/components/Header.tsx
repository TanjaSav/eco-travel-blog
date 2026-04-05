"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { playfair } from "@/fonts";

// Navigation items used in both desktop and mobile menus
const nav = [
  { href: "/", label: "Home" },
  { href: "/articles", label: "Articles" },
  { href: "/about", label: "About" },
];

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Determine if a navigation link is currently active
  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  // Close mobile menu after clicking a link
  const closeMenu = () => setIsOpen(false);

  return (
    // Sticky header with border and light background
    <header className="relative z-20 border-b border-[#7FA091] bg-[#F5F7F4]">
      <div className="container-main flex h-16 items-center justify-between">

        {/* Logo linking back to homepage */}
        <Link href="/" onClick={closeMenu}>
          <Image
            src="/images/Logo.svg"
            alt="EcoTravelBlog Logo"
            width={181}
            height={30}
            className="h-6 w-auto sm:h-7.5 sm:w-45.25"
          />
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`${playfair.className} text-[16px] leading-5 ${
                isActive(item.href)
                  ? "font-bold text-[#1D604B]"   // Active link styling
                  : "font-medium text-[#171D16]" // Default link styling
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile menu toggle button */}
        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex h-10 w-10 items-center justify-center md:hidden"
        >
          <Image
            src={isOpen ? "/images/Close.svg" : "/images/Menu.svg"}
            alt={isOpen ? "Close menu" : "Open menu"}
            width={24}
            height={24}
            className="h-6 w-6 cursor-pointer"
          />
        </button>
      </div>

      {/* Mobile navigation menu */}
      {isOpen && (
        <div className="border-t border-[#7FA091] bg-[#F5F7F4] md:hidden">
          <nav className="container-main flex flex-col items-center py-4 text-center">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className={`${playfair.className} py-3 text-center text-[16px] leading-5 ${
                  isActive(item.href)
                    ? "font-bold text-[#1D604B]"
                    : "font-medium text-[#171D16]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}