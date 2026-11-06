import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

// Renvoie l'id du vendeur connecté (session Auth.js), ou null s'il n'y en a pas.
export async function getVendeurId(): Promise<number | null> {
  const session = await auth();
  const user = session?.user;
  if (!user) return null;

  // 1) L'id est directement dans la session
  const id = Number((user as { id?: string | number }).id);
  if (Number.isInteger(id) && id > 0) return id;

  // 2) Sinon, on retrouve le vendeur grâce à son e-mail
  if (user.email) {
    const vendeur = await prisma.vendeur.findUnique({
      where: { email: user.email },
      select: { id: true },
    });
    return vendeur?.id ?? null;
  }

  return null;
}