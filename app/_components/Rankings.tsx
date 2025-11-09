"use client";

const rankingItems = [
  {
    name: "Alceu Feldmann",
    position: "#16",
    avatar: "/alceu.png",
  },
  {
    name: "Thiago Camargo Ramos",
    position: "#86",
    avatar: "/tiagoCamargo.png",
  },
  {
    name: "Leandro Ramos",
    position: "#87",
    avatar: "/leandroRamos.jpeg",
  },
];

export default function Rankings() {
  return (
    <div className="w-52 h-96 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-black/10 inline-flex flex-col bg-white">
      <div className="self-stretch p-2.5 inline-flex justify-center items-start">
        <div className="text-center text-black text-sm leading-4 tracking-wide">
          FOR YOU
          <br />
          Ranking
        </div>
      </div>

      {rankingItems.map((item) => (
        <div
          key={item.name}
          className="self-stretch h-24 py-2.5 border-t border-b border-black/10 flex flex-col justify-center items-center"
        >
          <div className="self-stretch inline-flex justify-center items-center gap-2">
            <div className="w-16 h-16 p-2.5 rounded-[10px] flex justify-center items-center">
              <img
                className="w-12 h-12 rounded-full object-cover"
                src={item.avatar}
                alt={item.name}
              />
            </div>
            <div className="text-center text-sky-500 text-3xl font-bold leading-10 tracking-widest">
              {item.position}
            </div>
          </div>
          <div className="self-stretch text-center text-black/60 text-sm leading-4 tracking-wide mt-1">
            {item.name}
          </div>
        </div>
      ))}

      <div className="w-36 h-6" />
    </div>
  );
}
