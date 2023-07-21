import { useContext } from "react";
import { Form, Field, Formik, ErrorMessage } from "formik";
import AppContext from "../context/AppContext";
import { primerSchema } from "../schemas/primerSchema";

const PrimerPaso = () => {
  const { setStep, dataP, setDataP } = useContext(AppContext);
  let initialValues = dataP;
  const onSubmit = (fields) => {
    setDataP(fields);
    setStep("segundopaso");
  };

  return (
    <main>
      <h3>Ingresa tus datos para contactarte!</h3>
      <div className="card">
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={primerSchema}
        >
          <Form autoFocus autoComplete="off">
            <fieldset>
              <label htmlFor="nombres">Nombres</label>
              <Field id="nombres" name="nombres" type="text" autoFocus />
              <ErrorMessage name="nombres" className="error" component="p" />
            </fieldset>
            <fieldset>
              <label htmlFor="apellidos">Apellidos</label>
              <Field id="apellidos" name="apellidos" type="text" autoFocus />

              <ErrorMessage name="apellidos" className="error" component="p" />
            </fieldset>
            <fieldset>
              <label htmlFor="edad">Edad</label>
              <Field id="edad" name="edad" type="number" autoFocus />

              <ErrorMessage name="edad" className="error" component="p" />
            </fieldset>
            <fieldset>
              <label htmlFor="sexo">Sexo</label>
              <Field id="sexo" name="sexo" as="select" autoFocus>
                <option value="">Selecciona tu sexo</option>
                <option value="hombre">Hombre</option>
                <option value="mujer">Mujer</option>
              </Field>
              <ErrorMessage name="sexo" className="error" component="p" />
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
              <button type="submit" className="rbutton">
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
