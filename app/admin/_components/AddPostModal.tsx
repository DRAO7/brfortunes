"use client";

import { useState } from "react";

interface AddPostModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit?: (data: {
    avatar: string;
    author: string;
    logoUrl: string;
    company: string;
    imageUrl: string;
    text: string;
  }) => void;
}

export default function AddPostModal({ open, onClose, onSubmit }: AddPostModalProps) {
  const [avatar, setAvatar] = useState("");
  const [author, setAuthor] = useState("");
  const [logoUrl, setLogoUrl] = useState("");
  const [company, setCompany] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [text, setText] = useState("");

  if (!open) return null;

  const handlePost = () => {
    const payload = { avatar, author, logoUrl, company, imageUrl, text };
    onSubmit?.(payload);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
      <div className="w-full max-w-[620px] bg-white rounded-[14px] outline outline-1 outline-black/10 shadow-lg p-6 relative flex flex-col gap-4">
        {/* close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-black/50 hover:text-black text-lg leading-none"
        >
          ×
        </button>

        <h2 className="text-lg font-semibold text-black">Novo post</h2>

        {/* avatar */}
        <div className="flex flex-col gap-1">
          <label className="text-xs text-black/70">Avatar (URL)</label>
          <input
            value={avatar}
            onChange={(e) => setAvatar(e.target.value)}
            placeholder="https://..."
            className="w-full rounded-md border border-black/10 bg-gray-50 px-3 py-2 text-sm outline-none focus:border-sky-400"
          />
          <p className="text-[10px] text-black/40">Depois trocamos para upload.</p>
        </div>

        {/* author */}
        <div className="flex flex-col gap-1">
          <label className="text-xs text-black/70">Autor</label>
          <input
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Alceu Elias Feldmann"
            className="w-full rounded-md border border-black/10 bg-gray-50 px-3 py-2 text-sm outline-none focus:border-sky-400"
          />
        </div>

        {/* logoUrl */}
        <div className="flex flex-col gap-1">
          <label className="text-xs text-black/70">Logo (URL)</label>
          <input
            value={logoUrl}
            onChange={(e) => setLogoUrl(e.target.value)}
            placeholder="/sp.png"
            className="w-full rounded-md border border-black/10 bg-gray-50 px-3 py-2 text-sm outline-none focus:border-sky-400"
          />
        </div>

        {/* company */}
        <div className="flex flex-col gap-1">
          <label className="text-xs text-black/70">Empresa</label>
          <input
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="Grupo Fertipar"
            className="w-full rounded-md border border-black/10 bg-gray-50 px-3 py-2 text-sm outline-none focus:border-sky-400"
          />
        </div>

        {/* image */}
        <div className="flex flex-col gap-1">
          <label className="text-xs text-black/70">Imagem do post (URL)</label>
          <input
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="/fertipar.png"
            className="w-full rounded-md border border-black/10 bg-gray-50 px-3 py-2 text-sm outline-none focus:border-sky-400"
          />
        </div>

        {/* text */}
        <div className="flex flex-col gap-1">
          <label className="text-xs text-black/70">Texto do post</label>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows={4}
            className="w-full rounded-md border border-black/10 bg-gray-50 px-3 py-2 text-sm outline-none focus:border-sky-400 resize-none"
            placeholder="“Setembro é soja no chão”..."
          />
        </div>

        {/* actions */}
        <div className="flex justify-end gap-3 pt-2">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-md text-sm text-black/60 hover:text-black"
          >
            Cancelar
          </button>
          <button
            onClick={handlePost}
            className="px-5 py-2 rounded-md bg-sky-400 text-white text-sm font-semibold hover:bg-sky-500"
          >
            Postar
          </button>
        </div>
      </div>
    </div>
  );
}
