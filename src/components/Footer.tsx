"use client";

import Link from "next/link";
import Image from "next/image";
import { playfair, inter } from "@/fonts";

export function Footer() {
  return (
    <footer className="bg-[#1D604B] text-white">
      <div className="container-main">
        <div className="grid grid-cols-1 gap-8 py-4 text-center md:grid-cols-3 md:py-5 md:text-left">
          <div className="flex flex-col items-center gap-4 md:items-start">
            <h3
              className={`${playfair.className} text-[14px] leading-4.5 md:text-[18px] md:leading-5.5`}
            >
              Follow us
            </h3>

            <div className="flex items-center justify-center gap-4 md:justify-start">
              <Link href="https://x.com" aria-label="X">
                <Image
                  src="/images/X.svg"
                  alt="X"
                  width={20}
                  height={20}
                  className="h-4.5 w-4.5 md:h-5 md:w-5"
                />
              </Link>

              <Link href="https://instagram.com" aria-label="Instagram">
                <Image
                  src="/images/Instagram.svg"
                  alt="Instagram"
                  width={20}
                  height={20}
                  className="h-4.5 w-4.5 md:h-5 md:w-5"
                />
              </Link>

              <Link href="https://facebook.com" aria-label="Facebook">
                <Image
                  src="/images/Facebook.svg"
                  alt="Facebook"
                  width={20}
                  height={20}
                  className="h-4.5 w-4.5 md:h-5 md:w-5"
                />
              </Link>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 md:items-center">
            <h3
              className={`${playfair.className} text-[14px] leading-4.5 md:text-[18px] md:leading-5.5`}
            >
              Contact Us
            </h3>

            <p
              className={`${inter.className} text-[12px] font-light  md:text-[14px]`}
            >
              ecotravelblog@gmail.com
            </p>
          </div>

          <div className="flex flex-col items-center gap-4 md:items-end">
            <Link
              href="/about"
              className={`${playfair.className} text-[14px] leading-4.5  md:text-[18px] md:leading-5.5`}
            >
              About
            </Link>

            <Link
              href="/faq"
              className={`${playfair.className} text-[14px] leading-4.5 md:text-[18px] md:leading-5.5`}
            >
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}