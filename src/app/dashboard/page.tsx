import Link from "next/link";

// Rendu SSR : les données sont propres à chaque vendeur connecté
export const dynamic = "force-dynamic";

// Ajoute un point tous les 3 chiffres : 3500000 -> 3.500.000
function formaterNombre(n: number) {
  return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
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
  // TODO : remplacer par de vraies requêtes Prisma pour le vendeur connecté
  const stats = {
    articles: 4,
    contacts: 12,
    // TODO : nécessite un champ « vendu » dans le schéma (à demander à Steven)
    vendus: 2,
    contactsSemaine: 5,
    valeurStock: 1250000,
    topArticle: "iPhone 13 (6 contacts)",
  };

  return (
    <main className="min-h-[calc(100vh-8rem)] flex-1 bg-[#F8FAFC] p-4 text-[#0F172A]">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-8 text-4xl font-bold text-[#B91C1C] sm:text-5xl">
          Tableau de bord
        </h1>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Carte titre="Articles publiés" valeur={String(stats.articles)} />
          <Carte titre="Contacts reçus" valeur={String(stats.contacts)} />
          <Carte titre="Articles vendus" valeur={String(stats.vendus)} />
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