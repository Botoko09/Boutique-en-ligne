import Image from "next/image";
import Link from "next/link";
import { PhoneCard } from "@/components/phone-card";
import { homePhoneHighlights } from "@/lib/phone-data";

export const dynamic = "force-static";

const categories = [
  { name: "Apple", detail: "iPhone pour tous les usages", brand: "Apple", tone: "category-apple" },
  { name: "Samsung", detail: "La technologie Galaxy", brand: "Samsung", tone: "category-samsung" },
  { name: "Tecno", detail: "L'innovation accessible", brand: "Tecno", tone: "category-tecno" },
  { name: "Xiaomi", detail: "La performance au quotidien", brand: "Xiaomi", tone: "category-xiaomi" },
];

export default function Home() {
  const heroPhone = homePhoneHighlights[0];

  return (
    <>
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-copy">
            <span className="eyebrow">La tech, tout près de vous</span>
            <h1>Le bon téléphone.<br />Le bon choix.</h1>
            <p>
              Découvrez une sélection de smartphones fiables, proposés par des
              vendeurs près de chez vous.
            </p>
            <div className="hero-cta">
              <Link className="button button-accent" href="#telephones">Découvrir la sélection</Link>
              <Link className="button button-ghost" href="#engagements">Nos engagements</Link>
            </div>
            <div className="hero-note">
              <span className="hero-note-mark" aria-hidden="true">✓</span>
              Des annonces vérifiées, un contact direct
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-glow" aria-hidden="true" />
            <div className="hero-product-image">
              <Image
                src={heroPhone.imageUrl}
                alt={heroPhone.imageAlt}
                fill
                priority
                sizes="(max-width: 760px) 72vw, 42vw"
                className="hero-image"
              />
            </div>
            <div className="hero-product-label">
              <span className="eyebrow">Sélection Mboka</span>
              <strong>{heroPhone.name}</strong>
              <span>{heroPhone.price.toLocaleString("fr-FR")} FCFA</span>
            </div>
            <div className="hero-sticker" aria-label="Smartphones sélectionnés avec soin">
              Sélection<br />du moment
            </div>
          </div>
        </div>
      </section>

      <section className="container section category-section" aria-labelledby="categories-title">
        <div className="section-heading">
          <div>
            <span className="eyebrow">À chacun son téléphone</span>
            <h2 id="categories-title">Explorez les marques</h2>
          </div>
          <Link className="text-link" href="#telephones">Voir la sélection <span aria-hidden="true">→</span></Link>
        </div>
        <div className="category-grid">
          {categories.map((category) => (
            <article className={`category-card ${category.tone}`} key={category.brand}>
              <span className="category-orbit" aria-hidden="true" />
              <span className="category-name">{category.name}</span>
              <span className="category-detail">{category.detail}</span>
            </article>
          ))}
        </div>
      </section>

      <section id="telephones" className="section featured-section" aria-labelledby="featured-title">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Choisis pour vous</span>
              <h2 id="featured-title">Nos téléphones du moment</h2>
            </div>
            <span className="featured-note">Notre sélection du moment</span>
          </div>
          <div className="phone-grid">
            {homePhoneHighlights.slice(0, 4).map((phone) => (
              <PhoneCard key={phone.slug} phone={phone} />
            ))}
          </div>
        </div>
      </section>

      <section className="container section">
        <div className="promise-banner">
          <div>
            <span className="eyebrow">Simple et local</span>
            <h2>Un achat plus proche,<br />en toute confiance.</h2>
          </div>
          <p>
            Trouvez le téléphone qu’il vous faut et échangez directement avec
            son vendeur pour convenir des détails.
          </p>
          <Link className="button button-light" href="#telephones">Voir la sélection</Link>
        </div>
      </section>

      <section id="engagements" className="container section benefits" aria-label="Les avantages MbokaShop">
        <article className="benefit">
          <span className="benefit-number">01</span>
          <h3>Des annonces claires</h3>
          <p>Prix, état et caractéristiques affichés simplement pour comparer en un coup d’œil.</p>
        </article>
        <article className="benefit">
          <span className="benefit-number">02</span>
          <h3>Un contact direct</h3>
          <p>Posez vos questions au vendeur et organisez votre achat sans détour.</p>
        </article>
        <article className="benefit">
          <span className="benefit-number">03</span>
          <h3>Des choix pour tous</h3>
          <p>Parcourez des marques et des gammes variées, adaptées à votre budget.</p>
        </article>
      </section>
    </>
  );
}
