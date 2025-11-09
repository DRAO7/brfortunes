"use client";

export default function Podcasts() {
  return (
    <div className="w-56 h-80 relative">
      <div className="w-36 h-36 left-[38px] top-[14px] absolute bg-yellow-400 rounded-full" />
      <img
        className="w-56 h-56 left-0 top-[21px] absolute"
        src="/podcastHost.png"
        alt="Podcast cover"
      />
      <div className="left-[28px] top-0 absolute text-black text-xl font-bold leading-6 tracking-wide font-montserrat">
        Podcast
      </div>
      <div className="w-48 left-[17px] top-[247px] absolute text-black text-base font-medium leading-5 tracking-tight font-montserrat">
        Reflexões sobre o mercado de REITs em Miami
      </div>
      <div className="left-[17px] top-[311px] absolute text-black text-sm font-extralight leading-4 tracking-tight font-montserrat">
        POR ALFREDO MASSA
      </div>
    </div>
  );
}
