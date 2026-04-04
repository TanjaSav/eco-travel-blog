"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { playfair } from "@/fonts";

const nav = [
  { href: "/", label: "Home" },
  { href: "/articles", label: "Articles" },
  { href: "/about", label: "About" },
];

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const isHomePage = pathname === "/";

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={
        isHomePage
          ? "absolute left-0 top-0 z-20 w-full border-b border-[#7FA091] bg-transparent"
          : "relative z-20 border-b border-[#7FA091] bg-[#F5F7F4]"
      }
    >
      <div className="container-main flex h-16 items-center justify-between">
        <Link href="/" onClick={closeMenu}>
          <Image
            src="/images/Logo.svg"
            alt="EcoTravelBlog Logo"
            width={160}
            height={28}
            className="h-4.5 w-auto md:h-5.25 md:w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`${playfair.className} text-[16px] leading-5 ${
                isActive(item.href)
                  ? "font-bold text-[#1D604B]"
                  : "font-medium text-[#171D16]"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

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

      {isOpen && (
        <div className="border-t border-[#7FA091] bg-[#F5F7F4] md:hidden">
          <nav className="container-main flex flex-col items-center text-center py-4">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className={`${playfair.className} py-3 text-[16px] text-center leading-5 ${
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