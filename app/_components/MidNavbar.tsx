"use client";

import Image from "next/image";

export default function MidNavBar() {
  return (
    <section className="w-full max-w-[1440px] px-20 py-11 mx-auto flex justify-between items-center">
      {/* LEFT SECTION */}
      <div className="w-72 py-5 flex items-center gap-8">
        {/* Options icon (bigger) */}
        <div className="p-2.5">
          <Image
            src="/Options.svg"
            alt="Options icon"
            width={80}
            height={80}
            priority
          />
        </div>

        {/* Left text stack */}
        <div className="flex flex-col items-center text-center">
          <span className="text-stone-600 text-base font-normal leading-5 whitespace-nowrap">
            Carlos Sicupira
          </span>

          {/* Separator */}
          <div className="my-3 h-[1px] w-[50px] bg-sky-500" />

          <span className="text-stone-600 text-base font-normal leading-5 whitespace-nowrap">
            Sinop MT - Saga da Soja
          </span>

          {/* Separator */}
          <div className="my-3 h-[1px] w-[50px] bg-sky-500" />

          <span className="text-stone-600 text-base font-normal leading-5 whitespace-nowrap">
            M&A
          </span>
        </div>
      </div>

      {/* CENTER LOGO */}
      <div className="flex flex-col items-center justify-center text-center">
        <Image
          src="/BigLogo.png"
          alt="BR Fortunes Logo"
          width={400}
          height={140}
          priority
        />
      </div>

      {/* RIGHT SECTION */}
      <div className="w-72 py-5 flex items-center gap-8 justify-end">
        {/* Right text stack */}
        <div className="flex flex-col items-center text-center">
          <span className="text-stone-600 text-base font-normal leading-5 whitespace-nowrap">
            Porsche Cup
          </span>

          {/* Separator */}
          <div className="my-3 h-[1px] w-[50px] bg-sky-500" />

          <span className="text-stone-600 text-base font-normal leading-5 whitespace-nowrap">
            BSB
          </span>

          {/* Separator */}
          <div className="my-3 h-[1px] w-[50px] bg-sky-500" />

          <span className="text-stone-600 text-base font-normal leading-5 whitespace-nowrap">
            Thiago do Kabum
          </span>
        </div>

        {/* Search icon (bigger) */}
        <div className="p-2.5 flex flex-col justify-center items-end">
          <Image
            src="/Search.svg"
            alt="Search icon"
            width={56}
            height={56}
            priority
          />
        </div>
      </div>
    </section>
  );
}
