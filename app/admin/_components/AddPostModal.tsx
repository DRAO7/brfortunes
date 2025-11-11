"use client";

import { createAdminPost } from "@/app/actions/sender";
import { useState } from "react";


interface AddPostModalProps {
  open: boolean;
  onClose: () => void;
}

export default function AddPostModal({ open, onClose }: AddPostModalProps) {
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);
  const [logoPreview, setLogoPreview] = useState<string | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!open) return null;

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true);
    try {
      await createAdminPost(formData);
      onClose();
    } catch (err) {
      console.error("failed to create post", err);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
      <form
        action={handleSubmit}
        className="w-full max-w-[620px] max-h-[90vh] bg-white rounded-[14px] outline outline-1 outline-black/10 shadow-lg relative flex flex-col"
      >
        {/* close button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 text-black/50 hover:text-black text-lg leading-none z-10"
        >
          ×
        </button>

        {/* scrollable content */}
        <div className="overflow-y-auto p-6 flex flex-col gap-4">
          <h2 className="text-lg font-semibold text-black">Novo post</h2>

          {/* título */}
          <div className="flex flex-col gap-1">
            <label className="text-xs text-black/80">Título</label>
            <input
              name="title"
              required
              placeholder="Título do post"
              className="w-full rounded-md border border-black/10 bg-gray-50 px-3 py-2 text-sm text-black placeholder:text-black/50 outline-none focus:border-sky-400"
            />
          </div>

          {/* autor */}
          <div className="flex flex-col gap-1">
            <label className="text-xs text-black/80">Autor</label>
            <input
              name="author"
              placeholder="Alceu Elias Feldmann"
              className="w-full rounded-md border border-black/10 bg-gray-50 px-3 py-2 text-sm text-black placeholder:text-black/50 outline-none focus:border-sky-400"
            />
          </div>

          {/* empresa */}
          <div className="flex flex-col gap-1">
            <label className="text-xs text-black/80">Empresa</label>
            <input
              name="company"
              placeholder="Grupo Fertipar"
              className="w-full rounded-md border border-black/10 bg-gray-50 px-3 py-2 text-sm text-black placeholder:text-black/50 outline-none focus:border-sky-400"
            />
          </div>

          {/* avatar upload */}
          <div className="flex flex-col gap-1">
            <label className="text-xs text-black/80">Avatar</label>
            <input
              type="file"
              name="avatar"
              accept="image/*"
              className="text-sm text-black file:text-black file:bg-gray-200 file:border-0 file:px-3 file:py-1 file:rounded-md hover:file:bg-gray-300 cursor-pointer"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) setAvatarPreview(URL.createObjectURL(file));
                else setAvatarPreview(null);
              }}
            />
            {avatarPreview && (
              <img
                src={avatarPreview}
                alt="avatar preview"
                className="mt-2 w-12 h-12 rounded-full object-cover"
              />
            )}
          </div>

          {/* logo upload */}
          <div className="flex flex-col gap-1">
            <label className="text-xs text-black/80">Logo</label>
            <input
              type="file"
              name="logo"
              accept="image/*"
              className="text-sm text-black file:text-black file:bg-gray-200 file:border-0 file:px-3 file:py-1 file:rounded-md hover:file:bg-gray-300 cursor-pointer"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) setLogoPreview(URL.createObjectURL(file));
                else setLogoPreview(null);
              }}
            />
            {logoPreview && (
              <img
                src={logoPreview}
                alt="logo preview"
                className="mt-2 w-16 h-10 object-contain bg-gray-50 rounded"
              />
            )}
          </div>

          {/* imagem do post */}
          <div className="flex flex-col gap-1">
            <label className="text-xs text-black/80">Imagem do post</label>
            <input
              type="file"
              name="image"
              accept="image/*"
              className="text-sm text-black file:text-black file:bg-gray-200 file:border-0 file:px-3 file:py-1 file:rounded-md hover:file:bg-gray-300 cursor-pointer"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) setImagePreview(URL.createObjectURL(file));
                else setImagePreview(null);
              }}
            />
            {imagePreview && (
              <img
                src={imagePreview}
                alt="post image preview"
                className="mt-2 w-32 h-20 object-cover rounded"
              />
            )}
          </div>

          {/* texto do post */}
          <div className="flex flex-col gap-1">
            <label className="text-xs text-black/80">Texto do post</label>
            <textarea
              name="content"
              rows={4}
              className="w-full rounded-md border border-black/10 bg-gray-50 px-3 py-2 text-sm text-black placeholder:text-black/50 outline-none focus:border-sky-400 resize-none"
              placeholder="“Setembro é soja no chão”..."
            />
          </div>
        </div>

        {/* fixed footer (stays visible) */}
        <div className="flex justify-end gap-3 border-t border-black/10 p-4 bg-white rounded-b-[14px]">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-md text-sm text-black/60 hover:text-black"
          >
            Cancelar
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-5 py-2 rounded-md bg-sky-400 text-white text-sm font-semibold hover:bg-sky-500 disabled:opacity-50"
          >
            {isSubmitting ? "Postando..." : "Postar"}
          </button>
        </div>
      </form>
    </div>
  );
}
