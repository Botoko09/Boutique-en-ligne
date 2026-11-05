import Link from "next/link";

// Rendu SSR : les données sont propres à chaque vendeur connecté
export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  // TODO : remplacer par de vraies requêtes Prisma pour le vendeur connecté
  const stats = { articles: 4, contacts: 12 };

  return (
    <main className="mx-auto max-w-3xl p-4 text-[#0F172A]">
      <h1 className="mb-6 text-2xl font-bold text-[#1D4ED8]">
        Tableau de bord
      </h1>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="rounded-xl bg-white p-6 shadow">
          <p className="text-sm">Articles publiés</p>
          <p className="text-4xl font-bold text-[#1D4ED8]">{stats.articles}</p>
        </div>
        <div className="rounded-xl bg-white p-6 shadow">
          <p className="text-sm">Contacts reçus</p>
          <p className="text-4xl font-bold text-[#1D4ED8]">{stats.contacts}</p>
        </div>
      </div>

      <Link
        href="/dashboard/nouveau"
        className="mt-6 inline-block rounded-lg bg-[#1D4ED8] px-6 py-3 text-white"
      >
        Publier un article
      </Link>
    </main>
  );
}