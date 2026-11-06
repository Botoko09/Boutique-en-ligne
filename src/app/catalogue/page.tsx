import Link from "next/link";
import { CatalogueBrowser } from "@/components/catalogue-browser";
import { prisma } from "@/lib/prisma";

export const revalidate = 60;

export default async function CataloguePage() {
  const articles = await prisma.article.findMany({
    select: {
      id: true,
      titre: true,
      marque: true,
      prix: true,
      imageUrl: true,
    },
    orderBy: { createdAt: "desc" },
  });

  return (
    <main className="container page-container">
      <header className="page-intro">
        <span className="eyebrow">La sélection MbokaShop</span>
        <h1>Nos téléphones</h1>
        <p>Découvrez les téléphones proposés par nos vendeurs.</p>
      </header>

      {articles.length > 0 ? (
        <CatalogueBrowser articles={articles} />
      ) : (
        <section className="empty-state" aria-labelledby="catalogue-empty-title">
          <h2 id="catalogue-empty-title">Aucun téléphone disponible pour le moment</h2>
          <p>Revenez bientôt pour découvrir les nouvelles annonces.</p>
          <Link className="button button-accent" href="/">
            Retour à l’accueil
          </Link>
        </section>
      )}
    </main>
  );
}
