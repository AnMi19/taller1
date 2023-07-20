import { useContext } from "react";
import { Form, Field } from "formik";
import AppContext from "../context/AppContext";

const PrimerPaso = () => {
  const { setStep } = useContext(AppContext);

  return (
    <main>
      <div className="card">
        <h3></h3>
        <form autoFocus onSubmit={handleSubmit} autoComplete="off">
          <fieldset>
            <label htmlFor="text">Nombres</label>
            <input
              type="text"
              id="text"
              value={values.text}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <p className="error">Este campo es necesario</p>
          </fieldset>
          <fieldset>
            <label htmlFor="text">Apellidos</label>
            <input type="text" />
            <p className="error">Este campo es necesario</p>
          </fieldset>
          <fieldset>
            <label htmlFor="text">Edad</label>
            <input type="text" />
            <p className="error">Este campo es necesario</p>
          </fieldset>
          <fieldset>
            <label htmlFor="text">Sexo</label>
            <input type="text" />
            <p className="error">Este campo es necesario</p>
          </fieldset>
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
                setStep("segundopaso");
              }}
            ></span>
          </div>
        </form>
      </div>
    </main>
  );
};

export default PrimerPaso;
