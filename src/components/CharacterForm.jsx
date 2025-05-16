import { useState } from "react";
import "../styles/CharacterForm.css";

export default function HeroStats({ setThisPower, setThisHeal }) {
  const [selectedPower, setSelectedPower] = useState(0);
  const [selectedHeal, setSelectedHeal] = useState(0);

  const handleChangePower = (e) => {
    const value = parseInt(e.target.value);
    setSelectedPower(value);
    setThisPower(value);
  };

  const handleChangeHeal = (e) => {
    const value = parseInt(e.target.value);
    setSelectedHeal(value);
    setThisHeal(value);  
  }

  
  return (
    <div className="label">
      <form>
        <label htmlFor="power">Choose Power: </label>
        <select id="power" value={selectedPower} onChange={handleChangePower}>
          <option value={10}>Super Strength</option>
          <option value={20}>Laser Vision</option>
          <option value={30}>Frost Breath</option>
          <option value={40}>Fly With An Umbrella</option>
        </select>

        <label htmlFor="heal">Choose Healing: </label>
        <select id="heal" value={selectedHeal} onChange={handleChangeHeal}>
          <option value={10}>Small Potion</option>
          <option value={20}>Minor Heal</option>
          <option value={30}>Big Potion</option>
          <option value={40}>I'm better now</option>
        </select>
      </form>
    </div>
  );
}
