"use client";

interface AddPostProps {
  onOpenModal?: () => void;
}

export default function AddPost({ onOpenModal }: AddPostProps) {
  return (
    <div className="w-[859px] h-32 px-5 py-4 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-black/20 inline-flex flex-col justify-start items-start gap-3.5 bg-white">
      {/* Input area + icon outside (left side) */}
      <div className="inline-flex justify-start items-center gap-3 w-full">
        {/* Add profile icon (left side) */}
        <button onClick={onOpenModal} className="cursor-pointer">
          <img
            src="/addProfile.svg"
            alt="Adicionar perfil"
            className="w-6 h-6 flex-shrink-0"
          />
        </button>

        {/* text box */}
        <div className="flex-1 p-2.5 bg-gray-100 rounded-[20px] outline outline-1 outline-offset-[-1px] outline-black/20 flex items-center">
          <p className="text-black/70 text-base leading-5 font-normal">
            Escreva sua história aqui. Marque pessoas, empresas, grupos e outras
            histórias com @.
          </p>
        </div>
      </div>

      {/* Attachment */}
      <button className="flex items-center gap-2 text-black/60 text-xs font-normal leading-4 cursor-pointer">
        <span>Adicionar anexo</span>
        <img src="/file.svg" alt="Adicionar arquivo" className="w-4 h-4" />
      </button>
    </div>
  );
}
