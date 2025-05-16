import { useState } from "react";

function CharacterCard({ name, power, heal}) {
  const [health, setHealth] = useState(100);
  const [block, setBlock] = useState(false);
  /**
   * randomized attacks
   * 
   * get a random number from 0-1
   * if the number is less than .5 
   * you miss the shot
  */

  const handleAttack = () => {
    if(block) {
      setHealth(health - power/2);
      setBlock(false)
    } else {
      setHealth(health - power);
    }
  };

  const handleHeal = () => {
    if(health+heal > 100) {
      setHealth(100);
    } else {
      setHealth(prevhealth => prevhealth + heal);
    }
  }

  const handleBlock = () => {
    if((Math.floor(Math.random() * 10)) > 5) {
      alert("Blocking")
      setBlock(true)
    } else {
      alert("Hey, you failed!")
    }
  }

  return (
    <div className="card">
      <h2>{name}</h2>
      <p>Power: {power}</p>
      <p>Heal: {heal}</p>
      <p>Health: {health}</p>

      <button onClick={handleAttack} disabled={health === 0}>
        Attack!
      </button>
      <button onClick={handleHeal} disabled={health === 100}>
        Heal!
      </button>
      <button onClick={handleBlock}>
        Block!
      </button>
    </div>
  );
}

export default CharacterCard;
