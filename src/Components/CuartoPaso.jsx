import { useContext } from "react";
import { Formik, Field, Form } from "formik";
import AppContext from "../context/AppContext";
const CuartoPaso = () => {
  const { setStep } = useContext(AppContext);
  const initialValues = {
    text: "",
  };
  return (
    <main>
      <h1>Cursos de la Biblia gratis</h1>
      <h3>Bienvenido!</h3>
      <div className="card">
        <Formik initialValues={initialValues}>
          <Form autoComplete="off">
            <fieldset>
              <label htmlFor="texto">Que sabe usted de la biblia?</label>
              <Field type="text" id="text" autoFocus />
              <p className="error">Este campo es necesario</p>
            </fieldset>
            <fieldset>
              <label htmlFor="texto">Que opina de la biblia?</label>
              <Field type="text" id="text" />
              <p className="error">Este campo es necesario</p>
            </fieldset>
            <fieldset>
              <label htmlFor="texto">Es la biblia un libro confiable?</label>
              <Field type="text" id="text" />
              <p className="error">Este campo es necesario</p>
            </fieldset>
            <fieldset>
              <label htmlFor="texto">
                Tenemos razones para creer lo que dice la biblia?
              </label>
              <Field type="select" id="select" />
              <p className="error">Este campo es necesario</p>
            </fieldset>
            <div className="buttons">
              <button
                className="lbutton"
                onClick={() => {
                  setStep("tercerpaso");
                }}
              >
                Anterior
              </button>
              <button
                className="rbutton"
                onClick={() => {
                  setStep("quintopaso");
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
export default CuartoPaso;
