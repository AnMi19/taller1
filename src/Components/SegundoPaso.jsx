import { useContext } from "react";
import { useFormik } from "formik";
import AppContext from "../context/AppContext";

const SegundoPaso = () => {
  const { setStep } = useContext(AppContext);
  return (
    <main>
      <h1>Cursos de la Biblia gratis</h1>
      <h3>Bienvenido!</h3>
      <div className="card">
        <form autoComplete="off">
          <fieldset>
            <label htmlFor="texto">Que sabe usted de la biblia?</label>
            <input type="text" id="text" autoFocus />
            <p className="error">Este campo es necesario</p>
          </fieldset>
          <fieldset>
            <label htmlFor="texto">Que opina de la biblia?</label>
            <input type="text" id="text" />
            <p className="error">Este campo es necesario</p>
          </fieldset>
          <fieldset>
            <label htmlFor="texto">Es la biblia un libro confiable?</label>
            <input type="text" id="text" />
            <p className="error">Este campo es necesario</p>
          </fieldset>
          <fieldset>
            <label htmlFor="texto">
              Tenemos razones para creer lo que dice la biblia?
            </label>
            <input type="select" id="select" />
            <p className="error">Este campo es necesario</p>
          </fieldset>
          <button type="submit">Submit</button>
        </form>
        <div className="directions">
          <span
            className="l-arrow"
            onClick={() => {
              setStep("primerpaso");
            }}
          ></span>
          <span
            className="r-arrow"
            onClick={() => {
              setStep("tercerpaso");
            }}
          ></span>
        </div>
      </div>
    </main>
  );
};

export default SegundoPaso;
