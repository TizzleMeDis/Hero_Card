import { useState } from "react";

export default function PowerSelector({ setThisPower }) {
  const [selectedPower, setSelectedPower] = useState();

  const handleChange = (e) => {
    const value = parseInt(e.target.value);
    setSelectedPower(value);
    setThisPower(value);
  };

  return (
    <>
      <form>
        <label htmlFor="power">Choose Power: </label>
        <select id="power" value={selectedPower} onChange={handleChange}>
          <option value={10}>Super Strength</option>
          <option value={20}>Laser Vision</option>
          <option value={30}>Frost Breath</option>
          <option value={40}>Fly With An Umbrella</option>
        </select>
      </form>
    </>
  );
}
