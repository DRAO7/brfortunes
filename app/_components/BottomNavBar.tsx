"use client";

const items = [
  { label: "FOR YOU", active: true },
  { label: "RECENTES", active: false },
  { label: "SETOR", active: false },
  { label: "UF", active: false },
  { label: "CLASSE", active: false },
  { label: "GRINGA", active: false },
  { label: "QUENTES", active: false },
  { label: "LOVE", active: false },
];

export default function BottomNavBar() {
  return (
    <div className="w-full px-20 flex justify-center">
      <div className="w-full max-w-[1349px] border-t border-b border-black flex items-center justify-between">
        {/* left empty spacer like figma */}
        <div className="p-2.5">
          <span className="text-black/0 text-xl font-bold leading-6 tracking-tight">
            LINK5
          </span>
        </div>

        {/* main items */}
        <div className="flex items-center gap-0">
          {items.map((item, idx) => (
            <div key={item.label} className="flex items-center gap-0">
              <button
                className={`p-2.5 flex items-center justify-center ${
                  item.active ? "text-black" : "text-black"
                }`}
              >
                <span
                  className={`text-xl font-bold leading-6 tracking-tight ${
                    item.active ? "" : ""
                  }`}
                >
                  {item.label}
                </span>
              </button>

              {/* separator, but not after last */}
              {idx < items.length - 1 && (
                <div className="w-5 h-0 rotate-[-90deg] border border-black"></div>
              )}
            </div>
          ))}
        </div>

        {/* right empty spacer like figma */}
        <div className="p-2.5">
          <span className="text-black/0 text-xl font-bold leading-6 tracking-tight">
            LINK5
          </span>
        </div>
      </div>
    </div>
  );
}
