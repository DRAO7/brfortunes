"use server";

import { put } from "@vercel/blob";
import prisma from "@/lib/prisma";

async function uploadIfFile(
  file: File | null,
  prefix: string
): Promise<string | null> {
  if (!file || file.size === 0) return null;

  const blob = await put(`${prefix}-${Date.now()}-${file.name}`, file, {
    access: "public",
    token: process.env.BLOB_READ_WRITE_TOKEN, // must be set in .env.local
    addRandomSuffix: true,
  });

  return blob.url;
}

export async function createAdminPost(formData: FormData) {
  const title = (formData.get("title") as string) ?? "";
  const content = (formData.get("content") as string) ?? "";

  // files
  const avatarFile = formData.get("avatar") as File | null;
  const logoFile = formData.get("logo") as File | null;
  const imageFile = formData.get("image") as File | null;

  // upload to blob (only the ones the user sent)
  const [avatarUrl, logoUrl, imageUrl] = await Promise.all([
    uploadIfFile(avatarFile, "avatars"),
    uploadIfFile(logoFile, "logos"),
    uploadIfFile(imageFile, "posts"),
  ]);

  // for now: published = true, authorId = null
  const post = await prisma.post.create({
    data: {
      title,
      content,
      avatarUrl,
      logoUrl,
      imageUrl,
      published: true,
    },
  });

  // you can return this to revalidate / redirect from client
  return post;
}
