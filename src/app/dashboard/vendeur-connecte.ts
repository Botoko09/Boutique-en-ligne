import { prisma } from "@/lib/prisma";

// TODO : remplacer par l'identifiant du vendeur de la session Auth.js (Dreche).
// En attendant, on prend le premier vendeur de la base pour tester.
// NE PAS LAISSER cette version en production : tous les vendeurs verraient les mêmes chiffres.
export async function getVendeurId(): Promise<number | null> {
  const vendeur = await prisma.vendeur.findFirst({ orderBy: { id: "asc" } });
  return vendeur?.id ?? null;
}