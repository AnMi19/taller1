import { useContext } from "react";
import { Formik, Field, Form } from "formik";
import AppContext from "../context/AppContext";

const TercerPaso = () => {
  const { setStep } = useContext(AppContext);
  const initialValues = {
    text: "",
  };
  return (
    <main>
      <h1>Te gustaria una visitá a tu casa ?</h1>
      <div className="card">
        <Formik initialValues={initialValues}>
          <Form autoComplete="off">
            <fieldset>
              <label htmlFor="texto">Direccion</label>
              <Field type="text" id="text" autoFocus />
              <p className="error">Campo Requerido</p>
            </fieldset>
            <fieldset>
              <label htmlFor="texto">Ciudad</label>
              <Field type="text" id="text" />
              <p className="error">Campo requerido</p>
            </fieldset>
            <fieldset>
              <label htmlFor="texto">Hora de visita</label>
              <Field type="time" id="time" />
              <p className="error">Campo requerido</p>
            </fieldset>
            <fieldset>
              <label htmlFor="texto"></label>
              <Field type="select" id="select" />
              <p className="error">Campo requerido</p>
            </fieldset>
            <div className="buttons">
              <button
                className="lbutton"
                onClick={() => {
                  setStep("segundopaso");
                }}
              >
                Anterior
              </button>
              <button
                className="rbutton"
                onClick={() => {
                  setStep("cuartopaso");
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
export default TercerPaso;
