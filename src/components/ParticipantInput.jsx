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
    <div className="flex flex-col justify-center items-center space-y-4">
      <img src="./Accueil.png" alt="accueil" />

      <h1 className="flex justify-center items-center mb-10 text-3xl font-title text-primary">
        Distribuer vos cadeaux
      </h1>
      <div className="flex flex-col justify-center items-center bg-primary p-4 mb-4 space-x-2 rounded-3xl max-w-md mx-auto">
        <div className="flex flex-col justify-center items-center">
          <h2 className="mb-4 text-2xl text-white font-title">À vous de jouer !</h2>
          <input
            type="text"
            className="input flex-grow mb-8 pt-1 pr-4 pb-1 pl-4 bg-white font-text border rounded-3xl"
            placeholder="Ecrire le nom d'une personne"
            value={currentName}
            onChange={(e) => setCurrentName(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && addParticipant()}
          />
        </div>
        <div className="w-full">
          <ul className=" mb-28 space-y-2 rounded-3xl w-full">
            {participants.map((name, index) => (
              <li key={index} className="flex justify-between items-center gap-2">
                <span className="w-full bg-white text-lg py-2 pl-6 font-text rounded-3xl flex items-center">{name}</span>
                <button
                  className=" text-primary p-4 bg-white rounded-3xl"
                  onClick={() => onRemoveParticipant(index)}
                >
                  <img src="supp.png" alt="supprimer" />
                </button>
              </li>
            ))}
          </ul>
          <div className="flex justify-center">
            <button
              className="button font-title pt-2 pr-20 pb-2 pl-20 text-lg bg-white px-8 py-3 text-primary rounded-3xl"
              onClick={addParticipant}
            >
              Ajouter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 