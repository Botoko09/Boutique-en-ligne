
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Credentials({
      name: "Connexion vendeur",

      credentials: {
        identifier: {
          label: "Email ou téléphone",
          type: "text",
        },
        password: {
          label: "Mot de passe",
          type: "password",
        },
      },

      async authorize(credentials) {
        const identifier = credentials?.identifier;
        const password = credentials?.password;

        if (
          typeof identifier !== "string" ||
          typeof password !== "string" ||
          !identifier.trim() ||
          !password
        ) {
          return null;
        }

        try {
          const vendeur = await prisma.vendeur.findFirst({
            where: {
              OR: [
                { email: identifier.trim() },
                { telephone: identifier.trim() },
              ],
            },
          });

          if (!vendeur) {
            return null;
          }

          const passwordValid = await bcrypt.compare(
            password,
            vendeur.motDePasse
          );

          if (!passwordValid) {
            return null;
          }

          return {
            id: String(vendeur.id),
            name: vendeur.nom,
            email: vendeur.email,
          };
        } catch (error) {
          console.error("Erreur authentification :", error);
          return null;
        }
      },
    }),
  ],

  session: {
    strategy: "jwt",
  },

  pages: {
    signIn: "/login",
  },
});
