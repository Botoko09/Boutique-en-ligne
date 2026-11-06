import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

function getWhatsAppUrl(phone: string, title: string) {
  const trimmedPhone = phone.trim();
  const hasPlusPrefix = trimmedPhone.startsWith("+");
  const hasInternationalDialPrefix = trimmedPhone.startsWith("00");
  const digits = trimmedPhone.replace(/\D/g, "");
  const internationalNumber = hasInternationalDialPrefix ? digits.slice(2) : digits;

  if (
    (!hasPlusPrefix && !hasInternationalDialPrefix) ||
    !/^[1-9]\d{6,14}$/.test(internationalNumber)
  ) {
    return null;
  }

  const message = `Bonjour, je suis intéressé(e) par le téléphone « ${title} ». Est-il toujours disponible ?`;
  return `https://wa.me/${internationalNumber}?text=${encodeURIComponent(message)}`;
}

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
      vendeur: {
        select: {
          nom: true,
          telephone: true,
        },
      },
    },
  });

  if (!article) {
    notFound();
  }

  const whatsappUrl = getWhatsAppUrl(article.vendeur.telephone, article.titre);

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
          <div className="product-actions">
            {whatsappUrl ? (
              <a
                className="button button-accent"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Contacter ${article.vendeur.nom} sur WhatsApp (ouvre un nouvel onglet)`}
              >
                Contacter {article.vendeur.nom} sur WhatsApp
              </a>
            ) : (
              <p className="contact-unavailable">
                Le contact WhatsApp du vendeur n’est pas disponible pour le moment.
              </p>
            )}
            <Link className="button button-ghost" href="/catalogue">
              Retour au catalogue
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
