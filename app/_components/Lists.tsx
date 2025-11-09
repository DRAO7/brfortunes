"use client";

export default function Lists() {
  return (
    <div className="w-52 h-[627px] relative flex flex-col items-center">
      {/* Ícone no topo */}
      <img
        src="/listIcon.svg"
        alt="List Icon"
        className="w-12 h-12 mt-4 mb-6 object-contain"
      />

      {/* Conteúdo das listas */}
      <div className="w-full flex flex-col items-center gap-7 px-5">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="w-full flex flex-col items-center gap-2">
            <div className="text-center text-black text-base font-bold leading-5 tracking-tight font-montserrat">
              List Item FOR YOU
            </div>
            <div className="w-24 h-0 outline outline-2 outline-offset-[-1px] outline-sky-500" />
          </div>
        ))}
      </div>
    </div>
  );
}
