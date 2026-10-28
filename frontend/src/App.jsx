import { useState } from "react";
import NameInput from "./components/NameInput";
import NameDisplay from "./components/NameDisplay";

function App() {
  const [name, setName] = useState("Rahul");

  return (
    <main>
      <h1>Lifting State Up</h1>

      <NameInput name={name} setName={setName} />
      <NameDisplay name={name} />
    </main>
  );
}

export default App;
