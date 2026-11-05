import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const articleId = Number(id);

  if (!Number.isSafeInteger(articleId) || articleId < 1) {
    notFound();
  }

  const article = await prisma.article.findUnique({
    where: { id: articleId },
    select: {
      id: true,
      titre: true,
      marque: true,
      description: true,
      prix: true,
      imageUrl: true,
    },
  });

  if (!article) {
    notFound();
  }

  return (
    <main className="container page-container">
      <nav className="crumbs" aria-label="Fil d’Ariane">
        <Link href="/catalogue">Catalogue</Link>
        <span aria-hidden="true"> / </span>
        <span>{article.titre}</span>
      </nav>
      <article className="db-product">
        <div className="db-product-image">
          {article.imageUrl ? (
            <Image
              src={article.imageUrl}
              alt={article.titre}
              fill
              unoptimized
              sizes="(max-width: 760px) 100vw, 50vw"
              className="product-image"
            />
          ) : (
            <span className="article-image-placeholder" aria-hidden="true">
              MbokaShop
            </span>
          )}
        </div>
        <div className="db-product-details">
          <span className="eyebrow">{article.marque}</span>
          <h1>{article.titre}</h1>
          <p className="product-price">
            {article.prix.toLocaleString("fr-FR")} <span>FCFA</span>
          </p>
          <p>{article.description}</p>
          <Link className="button button-ghost" href="/catalogue">
            Retour au catalogue
          </Link>
        </div>
      </article>
    </main>
  );
}
