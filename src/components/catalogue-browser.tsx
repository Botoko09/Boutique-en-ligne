"use client";

import { useMemo, useState, useSyncExternalStore } from "react";
import { ArticleCard } from "@/components/article-card";

type CatalogueArticle = {
  id: number;
  titre: string;
  marque: string;
  prix: number;
  imageUrl: string | null;
};

type SortOrder = "recent" | "price-asc" | "price-desc";

function subscribeToLocation(onChange: () => void) {
  window.addEventListener("popstate", onChange);
  window.addEventListener("catalogue:locationchange", onChange);

  return () => {
    window.removeEventListener("popstate", onChange);
    window.removeEventListener("catalogue:locationchange", onChange);
  };
}

function getLocationSearch() {
  return window.location.search;
}

export function CatalogueBrowser({
  articles,
}: {
  articles: CatalogueArticle[];
}) {
  const [query, setQuery] = useState("");
  const [sortOrder, setSortOrder] = useState<SortOrder>("recent");
  const search = useSyncExternalStore(subscribeToLocation, getLocationSearch, () => "");

  const brands = useMemo(
    () =>
      Array.from(new Set(articles.map((article) => article.marque))).sort(
        (first, second) => first.localeCompare(second, "fr"),
      ),
    [articles],
  );

  const requestedBrand = new URLSearchParams(search).get("marque");
  const brand =
    brands.find(
      (availableBrand) =>
        availableBrand.toLocaleLowerCase("fr") === requestedBrand?.trim().toLocaleLowerCase("fr"),
    ) ?? "";

  const visibleArticles = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase("fr");
    const matchingArticles = articles.filter((article) => {
      const matchesQuery =
        normalizedQuery.length === 0 ||
        `${article.titre} ${article.marque}`.toLocaleLowerCase("fr").includes(normalizedQuery);
      const matchesBrand = brand.length === 0 || article.marque === brand;

      return matchesQuery && matchesBrand;
    });

    if (sortOrder === "price-asc") {
      return matchingArticles.sort((first, second) => first.prix - second.prix);
    }

    if (sortOrder === "price-desc") {
      return matchingArticles.sort((first, second) => second.prix - first.prix);
    }

    return matchingArticles;
  }, [articles, brand, query, sortOrder]);

  function updateBrand(nextBrand: string) {
    const url = new URL(window.location.href);
    if (nextBrand) {
      url.searchParams.set("marque", nextBrand);
    } else {
      url.searchParams.delete("marque");
    }
    window.history.replaceState(null, "", `${url.pathname}${url.search}${url.hash}`);
    window.dispatchEvent(new Event("catalogue:locationchange"));
  }

  function updateSortOrder(value: string) {
    if (value === "recent" || value === "price-asc" || value === "price-desc") {
      setSortOrder(value);
    }
  }

  function clearFilters() {
    setQuery("");
    updateBrand("");
    setSortOrder("recent");
  }

  return (
    <>
      <div className="catalogue-toolbar">
        <p className="result-count" aria-live="polite">
          {visibleArticles.length} téléphone{visibleArticles.length === 1 ? "" : "s"}
        </p>
        <div className="catalogue-controls">
          <label>
            <span className="sr-only">Rechercher un téléphone</span>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Rechercher une marque ou un modèle"
            />
          </label>
          <label>
            <span className="sr-only">Filtrer par marque</span>
            <select value={brand} onChange={(event) => updateBrand(event.target.value)}>
              <option value="">Toutes les marques</option>
              {brands.map((availableBrand) => (
                <option key={availableBrand} value={availableBrand}>
                  {availableBrand}
                </option>
              ))}
            </select>
          </label>
          <label>
            <span className="sr-only">Trier les téléphones</span>
            <select
              value={sortOrder}
              onChange={(event) => updateSortOrder(event.target.value)}
            >
              <option value="recent">Plus récents</option>
              <option value="price-asc">Prix croissant</option>
              <option value="price-desc">Prix décroissant</option>
            </select>
          </label>
        </div>
      </div>

      {visibleArticles.length > 0 ? (
        <div className="phone-grid catalogue-grid" aria-label="Téléphones disponibles">
          {visibleArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      ) : (
        <section className="empty-state" aria-labelledby="catalogue-filter-empty-title">
          <h2 id="catalogue-filter-empty-title">Aucun téléphone ne correspond</h2>
          <p>Essayez une autre recherche ou choisissez une autre marque.</p>
          <button className="button button-ghost" type="button" onClick={clearFilters}>
            Effacer les filtres
          </button>
        </section>
      )}
    </>
  );
}
