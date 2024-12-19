// Il prend en props le tableau d'assignments et une fonction pour réinitialiser l'application
export function AssignmentDisplay({ assignments, onReset }) {
  return (
    <div className="flex flex-col justify-center items-center text-center space-y-6 h-screen">
      <div
        className="bg-white pt-10 pb-10 rounded-3xl max-w-md w-full mx-auto"
        style={{ width: '391px' }} //pour l'ecran PC
      >
        <img src="./Cadeaux.png" alt="Cadeaux" className="mx-auto max-w-full h-auto mb-4" />
        <h1 className="mb-10 text-3xl font-title text-primary">
          Attribution des cadeaux
        </h1>
        <ul className="mb-44 space-y-2">
          {assignments.map((assignment, index) => (
            <li className="flex justify-center items-center gap-8" key={index}>
              <span className="font-text">{assignment.giver}</span>
              <img className="pt-2" src="./offrir.png" alt="cadeau" />
              <span className="font-text">{assignment.receiver}</span>
            </li>
          ))}
        </ul>
        <div className="flex justify-center mt-6">
          <button
            className="button bg-primary font-title text-white pt-2 pr-16 pb-2 pl-16 rounded-3xl"
            onClick={onReset}
          >
            Recommencer
          </button>
        </div>
      </div>
    </div>
  );
}