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
        <p>Les annonces seront affichées ici dès que le catalogue sera connecté.</p>
      </header>

      <section className="empty-state" aria-labelledby="catalogue-empty-title">
        <h2 id="catalogue-empty-title">Le catalogue arrive bientôt</h2>
        <p>Les téléphones seront disponibles après la mise en place de la base de données.</p>
        <Link className="button button-accent" href="/">
          Retour à l’accueil
        </Link>
      </section>
    </main>
  );
}
