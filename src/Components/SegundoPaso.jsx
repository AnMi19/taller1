import { useState, useContext } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import AppContext from "../context/AppContext";

const SegundoPaso = () => {
  const { setStep } = useContext(AppContext);
  const initialValues = {};
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
              <ErrorMessage name="fp" component="p" className="error-message" />
              <p>Este campo es necesario</p>
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
                  setStep("primerpaso");
                }}
              >
                Anterior
              </button>
              <button
                className="rbutton"
                onClick={() => {
                  setStep("tercerpaso");
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

export default SegundoPaso;
