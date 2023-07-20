import { useState, useContext } from "react";
import { Form, Field, Formik } from "formik";
import AppContext from "../context/AppContext";

const PrimerPaso = () => {
  const { setStep } = useContext(AppContext);
  const initialValues = {
    nombres: "",
    apellidos: "",
    edad: "",
    sexo: "",
  };

  return (
    <main>
      <h3>Ingresa tus datos para contactarte!</h3>
      <div className="card">
        <Formik initialValues={initialValues}>
          <Form autoFocus autoComplete="off">
            <fieldset>
              <label htmlFor="nombres">Nombres</label>
              <Field id="nombres" name="nombres" type="text" autoFocus />
              <p className="error">Campo Requerido</p>
            </fieldset>
            <fieldset>
              <label htmlFor="apellidos">Apellidos</label>
              <Field id="apellidos" name="apellidos" type="text" autoFocus />

              <p className="error">Campo Requerido</p>
            </fieldset>
            <fieldset>
              <label htmlFor="edad">Edad</label>
              <Field id="edad" name="edad" type="number" autoFocus />

              <p className="error">Campo Requerido</p>
            </fieldset>
            <fieldset>
              <label htmlFor="sexo">Sexo</label>
              <Field id="sexo" name="sexo" as="select" autoFocus>
                <option value="">Selecciona tu sexo</option>
                <option value="hombre">Hombre</option>
                <option value="mujer">Mujer</option>
              </Field>

              <p className="error">Campo Requerido</p>
            </fieldset>
            <div className="buttons">
              <button
                className="lbutton"
                onClick={() => {
                  setStep("inicio");
                }}
              >
                Anterior
              </button>
              <button
                className="rbutton"
                onClick={() => {
                  setStep("segundopaso");
                }}
              >
                Siguiente
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </main>
  );
};

export default PrimerPaso;
