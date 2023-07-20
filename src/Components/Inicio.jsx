import { useContext } from "react";
import AppContext from "../context/AppContext";

const Inicio = () => {
  const { setStep } = useContext(AppContext);
  return (
    <main>
      <div className="container">
        <h1>¿Quieres asegurar tu futuro?</h1>
        <div className="directions">
          <span
            className="r-arrow"
            onClick={() => {
              setStep("primerpaso");
            }}
          ></span>
        </div>
      </div>
    </main>
  );
};

export default Inicio;
