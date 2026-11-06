import { prisma } from "@/lib/prisma";

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const articleId = Number(id);
  if (!Number.isInteger(articleId)) {
    return new Response("Introuvable", { status: 404 });
  }

  const article = await prisma.article.findUnique({
    where: { id: articleId },
    select: { imageUrl: true },
  });

  const correspondance = article?.imageUrl?.match(
    /^data:(image\/jpeg);base64,(.+)$/
  );
  if (!correspondance) {
    return new Response("Introuvable", { status: 404 });
  }

  const octets = new Uint8Array(Buffer.from(correspondance[2], "base64"));
  return new Response(octets, {
    headers: {
      "Content-Type": correspondance[1],
      "Cache-Control": "public, max-age=3600",
    },
  });
}