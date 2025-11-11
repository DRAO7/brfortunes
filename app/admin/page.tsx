// app/admin/page.tsx  (SERVER)
import AdminPageShell from "./_components/AdminPageShell";
import prisma from "@/lib/prisma";

export default async function AdminPage() {
  // fetch what you wanted (post id = 1)
  const dbPost = await prisma.post.findUnique({
    where: { id: 1 },
  });

  // pass it down to the client shell
  return <AdminPageShell dbPost={dbPost} />;
}
