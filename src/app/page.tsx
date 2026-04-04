import Image from "next/image";
import { playfair } from "@/fonts";

export default function HomePage() {
  return (
    <main>
      <section className="relative min-h-55 md:min-h-75 lg:min-h-75">
        <Image
          src="/images/Hero.jpg"
          alt="Travel with Care for the Planet"
          fill
          priority
          className="object-cover opacity-40"
        />

        <div className="absolute inset-0 bg-white/10" />

        <div className="relative z-10 flex min-h-55 items-center justify-center px-4 pt-16 text-center md:min-h-75 lg:min-h-75">
          <h1
            className={`${playfair.className} max-w-180 text-[20px] font-bold leading-5 text-[#101828] md:text-[24px] md:leading-6 lg:text-[48px] lg:leading-12`}
            
          >
            Travel with Care for the Planet
          </h1>
        </div>
      </section>
    </main>
  );
}