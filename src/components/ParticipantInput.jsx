  // Ce composant affiche la liste des participants
  // Il prend en props le tableau de participants : participants
  // Il prend en props une fonction pour ajouter un participant : onAddParticipant
  // Il prend en props une fonction pour supprimer un participant : onRemoveParticipant

  import { useState } from "react";

  export function ParticipantInput({
    participants,
    onAddParticipant,
    onRemoveParticipant,
  }) {
    const [currentName, setCurrentName] = useState("");

    const addParticipant = () => {
      // On ajoute le participant seulement si le currentName n'est pas vide
      if (currentName !== "") {
        // Appel de la fonction onAddParticipant avec le nom courant
        onAddParticipant(currentName);
        // Reset du currentName
        setCurrentName("");
      }
    };

    return (
      <div className="flex flex-col justify-center space-y-4">
        <img src="./Accueil.png" alt="accueil" />

        <h1 className="flex justify-center items-center mb-10 text-3xl font-bold text-primary">
          Distribuer vos cadeaux
        </h1>
        <div className="flex flex-col justify-center items-center bg-primary p-4 space-x-2">
          <div className="flex flex-col justify-center items-center">
            <h2 className="mb-4">À vous de jouer !</h2>
            <input
              type="text"
              className="input flex-grow mb-2 pt-1 pr-4 pb-1 pl-4 bg-white border rounded-3xl"
              placeholder="Ecrire le nom d'une personne"
              value={currentName}
              onChange={(e) => setCurrentName(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && addParticipant()}
            />
          </div>
          <div>
            <ul className=" pt-1 pr-4 pb-1 pl-4 space-y-2 rounded-3xl">
              {participants.map((name, index) => (
                <li key={index} className="flex justify-between items-center bg-white list-item">
                  <span>{name}</span>
                  <button
                    className="ml-4 text-red-500 bg-white"
                    onClick={() => onRemoveParticipant(index)}
                  >
                    Supprimer
                  </button>
                </li>
              ))}
            </ul>
            <button
              className="button pt-2 pr-20 pb-2 pl-20 text-lg bg-white px-8 py-3 text-[#DA4646] border rounded-3xl"
              onClick={addParticipant}
            >
              Ajouter
            </button>
            
          </div>
        </div>
      </div>
    );
  }