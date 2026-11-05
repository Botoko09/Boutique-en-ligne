import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function ProductPage() {
  return (
    <main className="container page-container">
      <header className="page-intro">
        <span className="eyebrow">MbokaShop · Mode</span>
        <h1>Fiche produit</h1>
        <p>Cette page sera rendue à chaque requête pour afficher les informations à jour.</p>
      </header>

      <section className="empty-state" aria-labelledby="product-empty-title">
        <h2 id="product-empty-title">Les produits ne sont pas encore disponibles</h2>
        <p>Les détails du produit seront affichés ici dès que la base de données sera connectée.</p>
        <Link className="button button-accent" href="/catalogue">
          Voir la boutique
        </Link>
      </section>
    </main>
  );
}
