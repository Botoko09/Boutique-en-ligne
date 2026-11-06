"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/catalogue", label: "Catalogue" },
  { href: "/#telephones", label: "Les téléphones" },
  { href: "/#engagements", label: "Nos engagements" },
  { href: "/login", label: "Connexion vendeur", className: "nav-login-link" },
];

export function MainNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className={`mobile-menu-toggle${isOpen ? " is-open" : ""}`}
        type="button"
        aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
        aria-expanded={isOpen}
        aria-controls="primary-navigation"
        onClick={() => setIsOpen((open) => !open)}
      >
        <svg
          className="mobile-menu-icon"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path className="menu-icon-top" d="M4 6h16" />
          <path className="menu-icon-middle" d="M4 12h16" />
          <path className="menu-icon-bottom" d="M4 18h16" />
        </svg>
      </button>
      <nav
        className={`main-nav${isOpen ? " is-open" : ""}`}
        id="primary-navigation"
        aria-label="Navigation principale"
      >
        {links.map((link) => (
          <Link
            key={link.href}
            className={link.className}
            href={link.href}
            onClick={() => setIsOpen(false)}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </>
  );
}
