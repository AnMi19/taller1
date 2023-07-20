import { useContext } from "react";
import { useFormik } from "formik";
import AppContext from "../context/AppContext";

const Inicio = () => {
  const { setStep } = useContext(AppContext);
  return (
    <main>
      <div className="App">
        <h1>Taller React</h1>
        <h4>Profesor</h4>
        <h3>Jhon Cardozo </h3>
        <h4>Estudiante</h4>
        <h5>Andrés Miranda</h5>
        <div className="directions">
          <span
            className="l-arrow"
            onClick={() => {
              setStep("inicio");
            }}
          ></span>
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
