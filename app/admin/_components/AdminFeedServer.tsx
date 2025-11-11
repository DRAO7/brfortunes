// app/admin/_components/AdminFeedServer.tsx
import prisma from "@/lib/prisma";
import AdminFeed from "./AdminFeed";

export default async function AdminFeedServer() {
  // fetch post with id = 1
  const dbPost = await prisma.post.findUnique({
    where: { id: 1 },
  });

  return <AdminFeed dbPost={dbPost} />;
}
