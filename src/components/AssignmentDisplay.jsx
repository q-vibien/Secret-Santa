// Il prend en props le tableau d'assignments
export function AssignmentDisplay({ assignments }) {
  return (
    <div className="flex flex-col justify-center items-center space-y-4">
      <img src="./Cadeaux.png" alt="Cadeaux" />
      <h1 className="flex justify-center items-center mb-14  text-3xl font-title text-primary">
        Attribution des cadeaux
      </h1>
      <ul className="mb-44 space-y-2">
        {assignments.map((assignment, index) => (
          <li className="flex justify-center items-center gap-8" key={index}>
            <span className="font-text ">{assignment.giver}</span> <img className="pt-2" src="./offrir.png" alt="cadeau" />{" "}
            <span className="font-text ">{assignment.receiver}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
