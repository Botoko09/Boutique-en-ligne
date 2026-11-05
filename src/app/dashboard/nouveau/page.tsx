"use client";

import { useState } from "react";

export default function NouvelArticlePage() {
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    // TODO : remplacer par une Server Action Prisma (création de l'Article)
    console.log("Article à publier :", data);
    setMessage("Article enregistré (données factices).");
    e.currentTarget.reset();
  }

  const champ =
    "w-full rounded-lg border border-slate-300 bg-white p-3 text-[#0F172A]";

  return (
    <main className="mx-auto max-w-xl p-4 text-[#0F172A]">
      <h1 className="mb-6 text-2xl font-bold text-[#1D4ED8]">
        Publier un article
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="titre" className="mb-1 block">Titre</label>
          <input id="titre" name="titre" required className={champ} />
        </div>
        <div>
          <label htmlFor="marque" className="mb-1 block">Marque</label>
          <input id="marque" name="marque" required className={champ} />
        </div>
        <div>
          <label htmlFor="description" className="mb-1 block">Description</label>
          <textarea id="description" name="description" rows={4} required className={champ} />
        </div>
        <div>
          <label htmlFor="prix" className="mb-1 block">Prix (FCFA)</label>
          <input id="prix" name="prix" type="number" min="0" required className={champ} />
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-[#1D4ED8] px-6 py-3 text-white"
        >
          Publier
        </button>
        {message && <p role="status">{message}</p>}
      </form>
    </main>
  );
}