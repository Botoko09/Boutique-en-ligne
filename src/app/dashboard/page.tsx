import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { getVendeurId } from "./vendeur-connecte";

// Rendu SSR : les données sont propres à chaque vendeur connecté
export const dynamic = "force-dynamic";

function formaterNombre(n: number) {
  return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

async function chargerStats(vendeurId: number) {
  const ilYaSeptJours = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);

  const [articles, contacts, contactsSemaine, stock, top] = await Promise.all([
    prisma.article.count({ where: { vendeurId } }),
    prisma.contact.count({ where: { vendeurId } }),
    prisma.contact.count({
      where: { vendeurId, createdAt: { gte: ilYaSeptJours } },
    }),
    prisma.article.aggregate({ where: { vendeurId }, _sum: { prix: true } }),
    prisma.contact.groupBy({
      by: ["articleId"],
      where: { vendeurId },
      _count: { articleId: true },
      orderBy: { _count: { articleId: "desc" } },
      take: 1,
    }),
  ]);

  let topArticle = "Aucun contact";
  if (top.length > 0) {
    const article = await prisma.article.findUnique({
      where: { id: top[0].articleId },
    });
    if (article) {
      topArticle = `${article.titre} (${top[0]._count.articleId} contacts)`;
    }
  }

  return {
    articles,
    contacts,
    contactsSemaine,
    valeurStock: stock._sum.prix ?? 0,
    topArticle,
  };
}

function Carte({
  titre,
  valeur,
  detail,
}: {
  titre: string;
  valeur: string;
  detail?: string;
}) {
  return (
    <div className="rounded-xl bg-white p-6 shadow">
      <p className="text-sm">{titre}</p>
      <p className="mt-1 text-3xl font-bold text-[#B91C1C] sm:text-4xl">
        {valeur}
      </p>
      {detail && <p className="mt-1 text-sm text-slate-500">{detail}</p>}
    </div>
  );
}

export default async function DashboardPage() {
  const vendeurId = await getVendeurId();

  if (!vendeurId) {
    return (
      <main className="min-h-[calc(100vh-8rem)] flex-1 bg-[#F8FAFC] p-4 text-[#0F172A]">
        <p className="mx-auto max-w-3xl">Aucun vendeur trouvé.</p>
      </main>
    );
  }

  const stats = await chargerStats(vendeurId);

  return (
    <main className="min-h-[calc(100vh-8rem)] flex-1 bg-[#F8FAFC] p-4 text-[#0F172A]">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-8 text-4xl font-bold text-[#B91C1C] sm:text-5xl">
          Tableau de bord
        </h1>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Carte titre="Articles publiés" valeur={String(stats.articles)} />
          <Carte titre="Contacts reçus" valeur={String(stats.contacts)} />
          <Carte
            titre="Contacts cette semaine"
            valeur={String(stats.contactsSemaine)}
            detail="7 derniers jours"
          />
          <Carte
            titre="Valeur du stock"
            valeur={`${formaterNombre(stats.valeurStock)} FCFA`}
            detail="Total des prix publiés"
          />
          <Carte titre="Article le plus contacté" valeur={stats.topArticle} />
        </div>

        <Link
          href="/dashboard/nouveau"
          className="mt-8 inline-block rounded-lg bg-[#B91C1C] px-8 py-4 text-xl font-semibold text-white transition-colors duration-200 hover:bg-[#991B1B]"
        >
          Publier un article
        </Link>
      </div>
    </main>
  );
}