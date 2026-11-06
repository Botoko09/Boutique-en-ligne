"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { getVendeurId } from "../vendeur-connecte";

export async function publierArticle(formData: FormData) {
  const vendeurId = await getVendeurId();
  if (!vendeurId) {
    return { ok: false, erreur: "Aucun vendeur connecté." };
  }

  const titre = String(formData.get("titre") ?? "").trim();
  const marque = String(formData.get("marque") ?? "").trim();
  const description = String(formData.get("description") ?? "").trim();
  const prix = Number(formData.get("prix"));

  if (!titre || !marque || !description || !Number.isInteger(prix) || prix <= 0) {
    return { ok: false, erreur: "Vérifie les champs du formulaire." };
  }

  await prisma.article.create({
    data: { titre, marque, description, prix, vendeurId },
  });

  revalidatePath("/dashboard");
  return { ok: true, erreur: "" };
}