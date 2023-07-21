import Inicio from "./Components/Inicio";
import PrimerPaso from "./Components/PrimerPaso";
import SegundoPaso from "./Components/SegundoPaso";
import TercerPaso from "./Components/TercerPaso";
import CuartoPaso from "./Components/CuartoPaso";
import QuintoPaso from "./Components/QuintoPaso";
import Resultado from "./Components/Resultado";
import AppContext from "./context/AppContext";
import { useState } from "react";

function App() {
  const [step, setStep] = useState("inicio");
  const [dataP, setDataP] = useState({
    nombres: "",
    apellidos: "",
    edad: "",
    sexo: "",
  });
  const [dataS, setDataS] = useState({
    p1: "",
    p2: "",
    p3: "",
    p4: "",
  });
  const [dataT, setDataT] = useState({
    cnumber: "",
    city: "",
  });
  const [dataC, setDataC] = useState({
    p5: "",
    p6: "",
    p7: "",
  });
  const [dataQ, setDataQ] = useState({
    meet: "",
    more: "",
    terms: "",
  });
  return (
    <AppContext.Provider
      value={{
        step,
        setStep,
        dataP,
        setDataP,
        dataS,
        setDataS,
        dataT,
        setDataT,
        dataC,
        setDataC,
        dataQ,
        setDataQ,
      }}
    >
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
