import { Room } from "@/components/liveblocks/Room";

type ParamsType = Promise<{ id: string }>;

export default async function Page({ params }: { params: ParamsType }) {
  const { id } = await params;

  return (
    <Room roomId={"room" + id}>
      <p>Hello</p>
      {/* <Canvas></Canvas> */}
    </Room>
  );
}
