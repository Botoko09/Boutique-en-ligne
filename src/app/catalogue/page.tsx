import Link from "next/link";

export const revalidate = 60;

export default function CataloguePage() {
  return (
    <main className="container page-container">
      <header className="page-intro">
        <span className="eyebrow">La boutique MbokaShop</span>
        <h1>Mode, chaussures et accessoires</h1>
        <p>Explorez les catégories en attendant l’ouverture du catalogue.</p>
      </header>

      <section className="empty-state" aria-labelledby="catalogue-empty-title">
        <h2 id="catalogue-empty-title">Le catalogue arrive bientôt</h2>
        <p>Les chaussures, vêtements et accessoires seront affichés après la connexion de la base de données.</p>
        <Link className="button button-accent" href="/">
          Retour à l’accueil
        </Link>
      </section>
    </main>
  );
}
