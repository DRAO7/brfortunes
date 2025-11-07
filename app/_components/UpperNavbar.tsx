"use client";

export default function UpperNavbar() {
  return (
    <header className="relative w-full h-16 px-20 flex items-center justify-between">
      {/* LEFT MENU */}
      <nav className="flex items-center gap-4 shrink-0">
        {["EMPRESAS", "PESSOAS", "RANKINGS", "HISTÓRIAS"].map((item) => (
          <div key={item}>
            <span className="text-black text-sm font-light tracking-[0.35em] leading-5">
              {item}
            </span>
          </div>
        ))}
      </nav>

      {/* CENTER — São Paulo */}
      <div className="absolute left-1/2 -translate-x-[49%] top-1">
        <div className="text-black/80 text-4xl font-normal leading-[1.1] font-montecarlo text-center whitespace-nowrap">
          São Paulo
        </div>
      </div>

      {/* RIGHT MENU */}
      <div className="flex items-center gap-3 shrink-0 pr-1">
        <div className="flex items-center gap-3">
          {["LIFESTYLE", "DFs"].map((item) => (
            <div key={item}>
              <span className="text-black text-sm font-light tracking-[0.35em] leading-5 whitespace-nowrap">
                {item}
              </span>
            </div>
          ))}

          {/* REVISTA + arrow */}
          <div className="flex items-center gap-1">
            <span className="text-black text-sm font-light tracking-[0.35em] leading-5 whitespace-nowrap">
              REVISTA
            </span>
            <span className="w-2 h-2 inline-flex items-center justify-center">
              <span className="w-2 h-2 border-b border-r border-black rotate-45" />
            </span>
          </div>
        </div>

        {/* ACTIONS */}
        <div className="flex items-center gap-2 pl-2 border-l border-black/10">
          <button>
            <span className="text-black text-sm font-semibold underline leading-5 whitespace-nowrap">
              Assinatura
            </span>
          </button>
          <button>
            <span className="text-black text-sm font-semibold leading-5 whitespace-nowrap">
              Entrar
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
