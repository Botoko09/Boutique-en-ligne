# Boutique de téléphones en ligne

Application Next.js où des vendeurs publient des téléphones et où les clients les consultent, puis contactent le vendeur sur WhatsApp. Livrable S22 (Akieni Academy), Groupe 5.

## Équipe et répartition

| Membre | Rôle | Responsabilité | Compte(s) Git |
|---|---|---|---|
| Steven BOTOKO | Déploiement + base de données | Vercel, variables d'environnement, Prisma/Neon, README | Botoko09 |
| NDONGALA Dreche | Auth | Auth.js, middleware, protection des routes | À compléter |
| HOLANDAIS MBEMBA Scintillé Grâciel | Features 1 | Catalogue, fiche article, bouton Contacter | À compléter |
| AKIANA Danielle Benicia | Features 2 | Publication d'article, tableau de bord vendeur | akianadanielleb-ops |
| AKOMBO Samuel | Rendu & perf | SSG, ISR, SSR, next/image, audit Lighthouse | samuelakombo0-bit |

## Lancer le projet en local

1. `git clone https://github.com/Botoko09/Boutique-en-ligne.git`
2. `npm install` (génère le client Prisma automatiquement)
3. Créer un fichier `.env` avec `DATABASE_URL` (fournie par Steven, jamais dans le dépôt)
4. `npm run dev`, puis ouvrir http://localhost:3000

## Base de données

Le projet utilise Prisma 7 et PostgreSQL. Le client Prisma est généré depuis `prisma/schema.prisma`; `DATABASE_URL` est lue depuis `.env` par `prisma7.config.ts`.

- `npm run db:generate` : générer le client après une modification du schéma.
- `npm run db:status` : vérifier l’état des migrations sans modifier la base.

La migration initiale crée les tables `Vendeur`, `Article` et `Contact`. La page ISR accède à la base pendant le build et lors de sa revalidation; la base doit donc être joignable dans l’environnement de build et d’exécution. Vérifier l’état avec `npm run db:status` avant toute application de migration.

## Rendu

- **SSG — `/`** : la page d’accueil est pré-rendue statiquement; elle présente une sélection éditoriale.
- **ISR — `/catalogue`** : la page charge les articles depuis PostgreSQL et est revalidée au plus tôt toutes les 60 secondes (`revalidate = 60`). La recherche, le filtre par marque (`?marque=Apple`) et le tri par prix sont disponibles sur le catalogue.
- **SSR — `/produit/[id]`** : la fiche affiche les informations de l’article et son vendeur à chaque requête (`force-dynamic`); le bouton de contact ouvre une conversation WhatsApp avec un message prérempli.
- **Images — `next/image`** : les images des téléphones sont affichées avec des dimensions adaptatives et l’image principale est chargée en priorité.

Pour que le bouton WhatsApp fonctionne, le téléphone du vendeur doit être enregistré au format international, avec `+` ou `00` suivi de l’indicatif pays (par exemple `+243...`).

## Déploiement

À compléter par Steven : URL de production, checklist, noms des variables d'environnement (sans les valeurs).

## Compte de test vendeur

À compléter après l'intégration de l'authentification : e-mail et mot de passe.

## Audit Lighthouse

<<<<<<< HEAD
À compléter par Samuel : 
=======
À compléter par Samuel : <img width="1183" height="840" alt="Capture d&#39;écran 2026-11-06 083126" src="https://github.com/user-attachments/assets/158921c0-58ce-465f-8307-6c085a722655" />
>>>>>>> e6007ba5ed874c2736f85d0bdde873b8da084105
