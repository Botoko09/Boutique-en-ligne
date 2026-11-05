import Image from "next/image";
import Link from "next/link";

export const dynamic = "force-static";

const categories = [
  { name: "Chaussures homme", detail: "Des modèles pour chaque occasion", category: "chaussures-homme", tone: "category-shoes" },
  { name: "Talons", detail: "Élégance au quotidien et en soirée", category: "talons", tone: "category-heels" },
  { name: "Vêtements", detail: "Des pièces pour composer votre style", category: "vetements", tone: "category-clothing" },
  { name: "Accessoires", detail: "La touche finale de votre tenue", category: "accessoires", tone: "category-accessories" },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-copy">
            <span className="eyebrow">MbokaShop · Mode & accessoires</span>
            <h1>Le style qui<br />vous ressemble.</h1>
            <p>
              Découvrez bientôt notre sélection de vêtements, chaussures et
              accessoires pour toutes vos envies.
            </p>
            <div className="hero-cta">
              <Link className="button button-accent" href="/catalogue">Explorer la boutique</Link>
              <Link className="button button-ghost" href="#categories">Nos catégories</Link>
            </div>
            <div className="hero-note">
              <span className="hero-note-mark" aria-hidden="true">✓</span>
              Une boutique pensée pour votre style
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-glow" aria-hidden="true" />
            <div className="hero-fashion-image">
              <Image
                src="/fashion-editorial.svg"
                alt="Illustration de vêtements, chaussures et accessoires de mode"
                fill
                priority
                sizes="(max-width: 760px) 90vw, 42vw"
                className="hero-image"
              />
            </div>
            <div className="hero-product-label">
              <span className="eyebrow">Bientôt chez MbokaShop</span>
              <strong>Mode, chaussures & accessoires</strong>
            </div>
            <div className="hero-sticker" aria-label="Une sélection de mode">
              Votre<br />style
            </div>
          </div>
        </div>
      </section>

      <section id="categories" className="container section category-section" aria-labelledby="categories-title">
        <div className="section-heading">
          <div>
            <span className="eyebrow">À chacun son style</span>
            <h2 id="categories-title">Explorez nos catégories</h2>
          </div>
          <Link className="text-link" href="/catalogue">Voir la boutique <span aria-hidden="true">→</span></Link>
        </div>
        <div className="category-grid">
          {categories.map(({ name, detail, category, tone }) => (
            <Link
              className={`category-card ${tone}`}
              href={`/catalogue?categorie=${category}`}
              key={category}
            >
              <span className="category-orbit" aria-hidden="true" />
              <span className="category-name">{name}</span>
              <span className="category-detail">{detail}</span>
              <span className="category-arrow" aria-hidden="true">→</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="container section" aria-labelledby="catalogue-empty-title">
        <div className="empty-state">
          <span className="eyebrow">La boutique se prépare</span>
          <h2 id="catalogue-empty-title">Notre sélection arrive bientôt</h2>
          <p>Les articles seront publiés ici dès que le catalogue sera connecté.</p>
          <Link className="button button-accent" href="/catalogue">Découvrir la boutique</Link>
        </div>
      </section>

      <section className="container section">
        <div className="promise-banner">
          <div>
            <span className="eyebrow">La mode au quotidien</span>
            <h2>Composez un style<br />qui vous ressemble.</h2>
          </div>
          <p>
            Des chaussures aux accessoires, MbokaShop réunira les pièces
            essentielles pour vos tenues.
          </p>
          <Link className="button button-light" href="/catalogue">Voir les catégories</Link>
        </div>
      </section>

      <section id="engagements" className="container section benefits" aria-label="Les atouts MbokaShop">
        <article className="benefit">
          <span className="benefit-number">01</span>
          <h3>Des styles variés</h3>
          <p>Vêtements, chaussures et accessoires réunis dans une même boutique.</p>
        </article>
        <article className="benefit">
          <span className="benefit-number">02</span>
          <h3>Des détails utiles</h3>
          <p>Les tailles, les prix et les informations des articles seront présentés clairement.</p>
        </article>
        <article className="benefit">
          <span className="benefit-number">03</span>
          <h3>Une sélection pour vous</h3>
          <p>Retrouvez des pièces pour compléter vos tenues au fil des nouveautés.</p>
        </article>
      </section>
    </>
  );
}
