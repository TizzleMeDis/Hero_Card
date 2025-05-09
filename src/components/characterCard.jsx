import { useState } from "react";

function CharacterCard({ name, power }) {
  const [health, setHealth] = useState(100);
  const handleAttack = () => {
    setHealth(health - power);
  };

  return (
    <div className="card">
      <h2>{name}</h2>
      <p>Power: {power}</p>
      <p>Health: {health}</p>
      <button onClick={handleAttack} disabled={health === 0}>
        Attack!
      </button>
    </div>
  );
}

export default CharacterCard;
