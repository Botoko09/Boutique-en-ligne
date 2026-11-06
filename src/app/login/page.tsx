<<<<<<< HEAD
export default function LoginPage() {
  return (
    <main className="container page-container">
      <header className="page-intro">
        <span className="eyebrow">Espace vendeur</span>
        <h1>Connexion vendeur</h1>
      </header>
      <section className="empty-state" aria-labelledby="login-placeholder-title">
        <h2 id="login-placeholder-title">La connexion arrive bientôt</h2>
        <p>
          L’authentification vendeur n’est pas encore disponible. Réessayez
          après son intégration.
        </p>
=======

"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      const result = await signIn("credentials", {
        identifier: identifier.trim(),
        password,
        redirect: false,
      });

      if (!result || result.error) {
        setError("Identifiants incorrects. Vérifie tes informations.");
        return;
      }

      window.location.href = "/dashboard";
    } catch {
      setError("Une erreur est survenue. Réessaie.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="flex min-h-screen bg-white">
      {/* Partie gauche : image */}
      <section className="relative hidden w-1/2 overflow-hidden bg-emerald-950 lg:flex">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1600')",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/90 via-emerald-950/60 to-black/40" />

        <div className="relative z-10 flex w-full flex-col justify-between p-14 text-white">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-emerald-900">
                <span className="text-2xl font-bold">E</span>
              </div>
              <span className="text-xl font-bold tracking-wide">
                E-SHOP
              </span>
            </div>
          </div>

          <div className="max-w-lg">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">
              Espace vendeur
            </p>

            <h1 className="mb-6 text-5xl font-bold leading-tight">
              Gérez votre boutique en toute simplicité.
            </h1>

            <p className="max-w-md text-lg leading-8 text-white/75">
              Retrouvez vos articles, gérez vos activités et
              développez votre boutique depuis un seul espace.
            </p>
          </div>

          <p className="text-sm text-white/60">
            © {new Date().getFullYear()} E-Shop. Tous droits réservés.
          </p>
        </div>
      </section>

      {/* Partie droite : formulaire */}
      <section className="flex min-h-screen w-full items-center justify-center px-6 py-12 lg:w-1/2">
        <div className="w-full max-w-md">
          <div className="mb-10 lg:hidden">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-900 text-white">
                <span className="text-xl font-bold">E</span>
              </div>
              <span className="text-xl font-bold text-gray-900">
                E-SHOP
              </span>
            </div>
          </div>

          <div className="mb-8">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-emerald-700">
              Bienvenue
            </p>

            <h2 className="text-3xl font-bold text-gray-900">
              Connectez-vous
            </h2>

            <p className="mt-3 text-gray-500">
              Accédez à votre espace vendeur.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="identifier"
                className="mb-2 block text-sm font-semibold text-gray-700"
              >
                E-mail ou téléphone
              </label>

              <input
                id="identifier"
                type="text"
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                placeholder="Ex. vendeur@email.com"
                autoComplete="username"
                required
                className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3.5 text-gray-900 outline-none transition focus:border-emerald-700 focus:bg-white focus:ring-2 focus:ring-emerald-100"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-semibold text-gray-700"
              >
                Mot de passe
              </label>

              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Saisis ton mot de passe"
                autoComplete="current-password"
                required
                className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3.5 text-gray-900 outline-none transition focus:border-emerald-700 focus:bg-white focus:ring-2 focus:ring-emerald-100"
              />
            </div>

            {error && (
              <div className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-emerald-900 px-5 py-4 font-semibold text-white transition hover:bg-emerald-800 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Connexion en cours..." : "Se connecter"}
            </button>
          </form>

          <p className="mt-8 text-center text-sm text-gray-400">
            Accès réservé aux vendeurs autorisés.
          </p>
        </div>
>>>>>>> e6007ba5ed874c2736f85d0bdde873b8da084105
      </section>
    </main>
  );
}
