import Image from "next/image";
import Link from "next/link";

type ArticleCardProps = {
  article: {
    id: number;
    titre: string;
    marque: string;
    prix: number;
    imageUrl: string | null;
  };
};

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <article className="phone-card">
      <Link
        className="phone-card-image"
        href={`/produit/${article.id}`}
        aria-label={`Voir ${article.titre}`}
      >
        {article.imageUrl ? (
          <Image
            src={article.imageUrl}
            alt={article.titre}
            fill
            unoptimized
            sizes="(max-width: 560px) 46vw, (max-width: 900px) 30vw, 270px"
            className="product-image"
          />
        ) : (
          <span className="article-image-placeholder" aria-hidden="true">
            MbokaShop
          </span>
        )}
      </Link>
      <div className="phone-card-body">
        <span className="product-brand">{article.marque}</span>
        <h2 className="article-card-title">{article.titre}</h2>
        <p className="product-price">
          {article.prix.toLocaleString("fr-FR")} <span>FCFA</span>
        </p>
        <Link className="text-link" href={`/produit/${article.id}`}>
          Voir le téléphone <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}
