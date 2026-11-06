"use client";

import { useState } from "react";

// Ajoute un point tous les 3 chiffres : 33000 -> 33.000
function formaterPrix(valeur: string) {
  const chiffres = valeur.replace(/\D/g, "");
  return chiffres.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

export default function NouvelArticlePage() {
  const [message, setMessage] = useState("");
  const [apercu, setApercu] = useState<string | null>(null);
  const [prix, setPrix] = useState("");

  function handlePhoto(e: React.ChangeEvent<HTMLInputElement>) {
    const fichier = e.target.files?.[0];
    if (apercu) URL.revokeObjectURL(apercu);
    setApercu(fichier ? URL.createObjectURL(fichier) : null);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    // TODO : remplacer par une Server Action Prisma (création de l'Article)
    console.log("Article à publier :", data);
    setMessage("Article enregistré (données factices).");
    e.currentTarget.reset();
    setApercu(null);
    setPrix("");
  }

  const champ =
    "w-full rounded-lg border border-slate-300 bg-white p-3 text-[#0F172A]";

  return (
    <main className="min-h-[calc(100vh-8rem)] flex-1 bg-[#F8FAFC] p-4 text-[#0F172A]">
      <div className="mx-auto max-w-xl">
        <h1 className="mb-8 text-4xl font-bold text-[#B91C1C] sm:text-5xl">
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
            <label htmlFor="prix" className="mb-1 block">Prix</label>
            <div className="relative">
              <input
                id="prix"
                type="text"
                inputMode="numeric"
                placeholder="ex. 150.000"
                required
                value={prix}
                onChange={(e) => setPrix(formaterPrix(e.target.value))}
                className={`${champ} pr-20`}
              />
              <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 font-semibold text-[#B91C1C]">
                FCFA
              </span>
            </div>
            {/* Valeur brute, sans points, pour la base de données */}
            <input type="hidden" name="prix" value={prix.replace(/\./g, "")} />
          </div>
          <div>
            <label htmlFor="photo" className="mb-1 block">Photo de l&apos;article</label>
            <input
              id="photo"
              name="photo"
              type="file"
              accept="image/*"
              onChange={handlePhoto}
              className={champ}
            />
            {apercu && (
              <div className="mt-3 flex aspect-[4/3] w-full max-w-sm items-center justify-center overflow-hidden rounded-lg border border-slate-300 bg-white">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={apercu}
                  alt="Aperçu de la photo choisie"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            )}
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-[#B91C1C] px-6 py-4 text-lg font-semibold text-white transition-colors duration-200 hover:bg-[#991B1B]"
          >
            Publier
          </button>
          {message && <p role="status">{message}</p>}
        </form>
      </div>
    </main>
  );
}