import Image from "next/image";
import type { HomepagePhone } from "@/lib/phone-data";

export function PhoneCard({ phone }: { phone: HomepagePhone }) {
  return (
    <article className="phone-card">
      <div className="phone-card-image">
        <Image
          src={phone.imageUrl}
          alt={phone.imageAlt}
          fill
          sizes="(max-width: 560px) 46vw, (max-width: 900px) 30vw, 270px"
          className="product-image"
        />
        <span className="condition-tag">{phone.condition}</span>
      </div>
      <div className="phone-card-body">
        <span className="product-brand">{phone.brand} <span aria-hidden="true">·</span> {phone.storage}</span>
        <h3>{phone.name}</h3>
        <div className="phone-card-footer">
          <p className="product-price">{phone.price.toLocaleString("fr-FR")} <span>FCFA</span></p>
        </div>
      </div>
    </article>
  );
}
