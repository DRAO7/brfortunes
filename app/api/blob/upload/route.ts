import { NextRequest, NextResponse } from "next/server";
import { put } from "@vercel/blob";

export const runtime = "edge"; // blob works great on edge, optional

export async function POST(req: NextRequest) {
  // we expect a form-data with a file field called "file"
  const formData = await req.formData();
  const file = formData.get("file");

  if (!file || !(file instanceof File)) {
    return NextResponse.json({ error: "No file provided" }, { status: 400 });
  }

  // you can pick your own name, or let it be the original name
  const filename = file.name;

  const blob = await put(filename, file, {
    access: "public",
    token: process.env.BLOB_READ_WRITE_TOKEN, // 👈 important for localhost
    addRandomSuffix: true, // avoids overwrites
  });

  // blob.url is the public URL
  return NextResponse.json({ url: blob.url, pathname: blob.pathname });
}
