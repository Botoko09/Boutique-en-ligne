import Link from "next/link";

export function SiteHeader() {
  return (
    <>
      <div className="topbar">MbokaShop, la tech à portée de main <span aria-hidden="true">·</span> Smartphones en FCFA</div>
      <header className="site-header">
        <div className="container header-inner">
          <Link className="logo" href="/" aria-label="MbokaShop, accueil">Mboka<span>Shop</span></Link>
          <nav className="main-nav" aria-label="Navigation principale">
            <Link href="#telephones">Les téléphones</Link>
            <Link href="#engagements">Nos engagements</Link>
          </nav>
        </div>
      </header>
    </>
  );
}
