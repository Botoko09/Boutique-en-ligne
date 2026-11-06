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
      </section>
    </main>
  );
}
