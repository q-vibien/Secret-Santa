// Ecran d'accueil de l'application
// Ce composant prend en props une fonction pour démarrer l'application : onStart

export function WelcomeScreen({ onStart }) {
  return (
    <div className="flex flex-col justify-center items-center text-center space-y-6 h-screen">
      <div
        className="bg-white pt-10 pb-10 rounded-3xl max-w-md w-full mx-auto"
        style={{ width: '391px' }} //pour l'ecran PC
      >
        <img src="./Accueil.png" alt="accueil" className="mx-auto max-w-full h-auto mb-4" />
        <h1 className="mb-52 text-4xl font-bold text-primary font-title">Secret Santa</h1>
        <p className="mb-10 text-lg font-text">
          Bienvenue dans l'application Secret Santa ! Organisez facilement votre
          échange de cadeaux entre amis ou collègues.
        </p>
        <button
          onClick={onStart}
          className="button pt-2 pr-16 pb-2 pl-16 text-lg text-white px-8 py-3 font-title bg-primary border rounded-3xl max-w-xs mx-auto"
        >
          Commencer !
        </button>
      </div>
    </div>
  );
}