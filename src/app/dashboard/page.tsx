import Link from "next/link";

// Rendu SSR : les données sont propres à chaque vendeur connecté
export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  // TODO : remplacer par de vraies requêtes Prisma pour le vendeur connecté
  const stats = { articles: 4, contacts: 12 };

  return (
    <main className="min-h-[calc(100vh-8rem)] flex-1 bg-[#F8FAFC] p-4 text-[#0F172A]">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-8 text-4xl font-bold text-[#B91C1C] sm:text-5xl">
          Tableau de bord
        </h1>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="rounded-xl bg-white p-6 shadow">
            <p className="text-sm">Articles publiés</p>
            <p className="text-4xl font-bold text-[#B91C1C]">{stats.articles}</p>
          </div>
          <div className="rounded-xl bg-white p-6 shadow">
            <p className="text-sm">Contacts reçus</p>
            <p className="text-4xl font-bold text-[#B91C1C]">{stats.contacts}</p>
          </div>
        </div>

        <Link
          href="/dashboard/nouveau"
          className="mt-6 inline-block rounded-lg bg-[#B91C1C] px-8 py-4 text-xl font-semibold text-white transition-colors duration-200 hover:bg-[#991B1B]"
        >
          Publier un article
        </Link>
      </div>
    </main>
  );
}