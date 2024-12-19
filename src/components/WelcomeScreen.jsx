// Ecran d'accueil de l'application
// Ce composant prend en props une fonction pour démarrer l'application : onStart

export function WelcomeScreen({ onStart }) {
  return (
    <div className="text-center space-y-6">
      <img src="./Accueil.png" alt="accueil" />
      <h1 className="mb-44 text-4xl font-bold text-primary font-title">Secret Santa</h1>
      <p className="mb-10 text-lg">
        Bienvenue dans l'application Secret Santa ! Organisez facilement votre
        échange de cadeaux entre amis ou collègues.
      </p>
      <button onClick={onStart} className="button pt-2 pr-16  pb-2 pl-16 text-lg text-white px-8 py-3 bg-[#DA4646] border rounded-3xl">
        Commencer !
      </button>
    </div>
  );
}
