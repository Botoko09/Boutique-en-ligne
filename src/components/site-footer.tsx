import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link className="logo logo-light" href="/">Mboka<span>Shop</span></Link>
          <p>Mode, chaussures et accessoires pour tous les jours.</p>
        </div>
        <div>
          <h2>Boutique</h2>
          <ul>
            <li><Link href="/catalogue?categorie=chaussures-homme">Chaussures homme</Link></li>
            <li><Link href="/catalogue?categorie=talons">Talons</Link></li>
            <li><Link href="/catalogue?categorie=vetements">Vêtements</Link></li>
            <li><Link href="/catalogue?categorie=accessoires">Accessoires</Link></li>
          </ul>
        </div>
        <div>
          <h2>MbokaShop</h2>
          <ul>
            <li><Link href="/#engagements">Nos engagements</Link></li>
            <li><Link href="/">Accueil</Link></li>
          </ul>
        </div>
        <p className="footer-note">Projet S22 · Akieni Academy · Groupe 5</p>
      </div>
    </footer>
  );
}
