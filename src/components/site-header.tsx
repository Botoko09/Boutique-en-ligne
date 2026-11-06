import Link from "next/link";
import { MainNavigation } from "@/components/main-navigation";

export function SiteHeader() {
  return (
    <>
      <div className="topbar">MbokaShop, la tech à portée de main <span aria-hidden="true">·</span> Smartphones en FCFA</div>
      <header className="site-header">
        <div className="container header-inner">
          <Link className="logo" href="/" aria-label="MbokaShop, accueil">Mboka<span>Shop</span></Link>
          <MainNavigation />
        </div>
      </header>
    </>
  );
}
