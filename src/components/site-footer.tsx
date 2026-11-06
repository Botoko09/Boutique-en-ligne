import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link className="logo logo-light" href="/">Mboka<span>Shop</span></Link>
          <p>Les bons smartphones, au plus près de vous.</p>
        </div>
        <div>
          <h2>Boutique</h2>
          <ul>
            <li><Link href="/catalogue">Tous les téléphones</Link></li>
            <li><Link href="/catalogue?marque=Apple">iPhone</Link></li>
            <li><Link href="/catalogue?marque=Samsung">Samsung Galaxy</Link></li>
          </ul>
        </div>
        <div>
          <h2>MbokaShop</h2>
          <ul>
            <li><Link href="/dashboard">Espace vendeur</Link></li>
            <li><a href="mailto:contact@mbokashop.cd">Nous contacter</a></li>
          </ul>
        </div>
        <p className="footer-note">Projet S22 · Akieni Academy · Groupe 5</p>
      </div>
    </footer>
  );
}
