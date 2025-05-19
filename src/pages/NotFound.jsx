export default function NotFound() {
  return (
    <div className="notfound-container">
      <h1 className="notfound-title">Oups ...</h1>
      <p className="notfound-text">Cette page n'existe pas, ou a rencontré un problème</p>
      <button to="/" className="notfound-button">
        Retour à l'accueil
      </button>
    </div>
  );
}
