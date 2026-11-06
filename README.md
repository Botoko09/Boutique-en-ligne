# Boutique de téléphones en ligne

Application Next.js où des vendeurs publient des téléphones et où les clients les consultent, puis contactent le vendeur sur WhatsApp. Livrable S22 (Akieni Academy), Groupe 5.

## Équipe et répartition

| Membre | Rôle | Responsabilité | Compte(s) Git |
|---|---|---|---|
| Steven BOTOKO | Déploiement + base de données | Vercel, variables d'environnement, Prisma/Neon, README | Botoko09 |
| NDONGALA Dreche | Auth | Auth.js, middleware, protection des routes | À compléter |
| HOLANDAIS MBEMBA Scintillé Grâciel | Features 1 | Catalogue, fiche article, bouton Contacter | À compléter |
| AKIANA Danielle Benicia | Features 2 | Publication d'article, tableau de bord vendeur | akianadanielleb-ops |
| AKOMBO Samuel | Rendu & perf | SSG, ISR, SSR, next/image, audit Lighthouse | À compléter |

## Lancer le projet en local

1. `git clone https://github.com/Botoko09/Boutique-en-ligne.git`
2. `npm install`
3. Créer un fichier `.env` avec `DATABASE_URL` (fournie par Steven, jamais dans le dépôt)
4. `npm run dev`, puis ouvrir http://localhost:3000

## Rendu

- **SSG — `/`** : la page d’accueil est pré-rendue statiquement; son contenu actuel est une sélection éditoriale.
- **ISR — `/catalogue`** : la page est revalidée au plus tôt toutes les 60 secondes (`revalidate = 60`). Le catalogue reste vide jusqu’à la connexion de la base de données.
- **SSR — `/produit/[slug]`** : `force-dynamic` demande un rendu serveur à chaque requête. La fiche reste vide tant que les annonces ne peuvent pas être chargées depuis la base.
- **Images — `next/image`** : les images des téléphones sont affichées avec des dimensions adaptatives et l’image principale est chargée en priorité.

Les pages ISR et SSR illustrent leur stratégie de rendu, mais leur contenu métier reste à raccorder lorsque la base de données sera disponible.

## Déploiement

À compléter par Steven : URL de production, checklist, noms des variables d'environnement (sans les valeurs).

## Compte de test vendeur

À compléter après l'intégration de l'authentification : e-mail et mot de passe.

## Audit Lighthouse

À compléter par Samuel : scores mobile et capture.