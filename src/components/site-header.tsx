import Link from "next/link";

export function SiteHeader() {
  return (
    <>
      <div className="topbar">MbokaShop · Mode, chaussures et accessoires</div>
      <header className="site-header">
        <div className="container header-inner">
          <Link className="logo" href="/" aria-label="MbokaShop, accueil">Mboka<span>Shop</span></Link>
          <nav className="main-nav" aria-label="Navigation principale">
            <Link href="/catalogue">La boutique</Link>
            <Link href="/catalogue?categorie=vetements">Vêtements</Link>
            <Link href="/catalogue?categorie=chaussures-homme">Chaussures</Link>
            <Link href="/#engagements">Nos engagements</Link>
          </nav>
        </div>
      </header>
    </>
  );
}
