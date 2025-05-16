import { useState } from "react";
import CharacterCard from "./components/characterCard";
import HeroStats from "./components/CharacterForm";
import './App.css'

function App() {

  const [thisPower, setThisPower] = useState(0);
  const [thisHeal, setThisHeal] = useState(0);

  return (
    <>
      <HeroStats setThisPower={setThisPower} setThisHeal={setThisHeal}  />
      <CharacterCard name={"Superman"} power={thisPower} heal={thisHeal}  />
    </>
  );
}

export default App;
