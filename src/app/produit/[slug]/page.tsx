import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function ProductPage() {
  return (
    <main className="container page-container">
      <header className="page-intro">
        <span className="eyebrow">Annonce MbokaShop</span>
        <h1>Fiche du téléphone</h1>
        <p>Cette page sera rendue à chaque requête pour afficher les informations à jour.</p>
      </header>

      <section className="empty-state" aria-labelledby="product-empty-title">
        <h2 id="product-empty-title">Les annonces ne sont pas encore disponibles</h2>
        <p>La fiche sera affichée dès que les annonces pourront être chargées depuis la base de données.</p>
        <Link className="button button-accent" href="/catalogue">
          Voir le catalogue
        </Link>
      </section>
    </main>
  );
}
