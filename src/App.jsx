import { useState } from "react";
import CharacterCard from "./components/characterCard";
import PowerSelector from "./components/CharacterForm";

function App() {
  const [thisPower, setThisPower] = useState(0);

  return (
    <>
      <PowerSelector setThisPower={setThisPower} />
      <CharacterCard name={"Superman"} power={thisPower} />
    </>
  );
}

export default App;
