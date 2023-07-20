import Inicio from "./Components/Inicio";
import PrimerPaso from "./Components/PrimerPaso";
import SegundoPaso from "./Components/SegundoPaso";
import TercerPaso from "./Components/TercerPaso";
import CuartoPaso from "./Components/CuartoPaso";
import QuintoPaso from "./Components/QuintoPaso";
import AppContext from "./context/AppContext";
import { useState } from "react";

function App() {
  const [step, setStep] = useState("inicio");
  return (
    <AppContext.Provider value={{ step, setStep }}>
      <div className="App">
        {step === "inicio" && <Inicio />}
        {step === "primerpaso" && <PrimerPaso />}
        {step === "segundopaso" && <SegundoPaso />}
        {step === "tercerpaso" && <TercerPaso />}
        {step === "cuartopaso" && <CuartoPaso />}
        {step === "quintopaso" && <QuintoPaso />}
        {step === "resultado" && <Resultado />}
      </div>
    </AppContext.Provider>
  );
}

export default App;
