import Link from "next/link";
import { auth } from "@/auth";
import { MainNavigation } from "@/components/main-navigation";

export async function SiteHeader() {
  const session = await auth();

  return (
    <>
      <div className="topbar">MbokaShop, la tech à portée de main <span aria-hidden="true">·</span> Smartphones en FCFA</div>
      <header className="site-header">
        <div className="container header-inner">
          <Link className="logo" href="/" aria-label="MbokaShop, accueil">Mboka<span>Shop</span></Link>
          <MainNavigation userName={session?.user?.name} />
        </div>
      </header>
    </>
  );
}
