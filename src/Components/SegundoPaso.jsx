import { useContext } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import AppContext from "../context/AppContext";
import { segundoSchema } from "../schemas/segundoSchema";

const SegundoPaso = () => {
  const { setStep, dataS, setDataS } = useContext(AppContext);
  let initialValues = dataS;
  const onSubmit = (fields) => {
    setDataS(fields);
    setStep("tercerpaso");
  };
  return (
    <main>
      <h1>Cursos de la Biblia gratis</h1>
      <h3>Bienvenido!</h3>
      <div className="card">
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={segundoSchema}
        >
          <Form autoComplete="off">
            <fieldset>
              <label htmlFor="p1">Que sabe usted de la biblia?</label>
              <Field type="text" id="p1" name="p1" autoFocus />
              <ErrorMessage name="p1" component="p" className="error" />
            </fieldset>
            <fieldset>
              <label htmlFor="p2">Que opina de la biblia?</label>
              <Field type="text" id="p2" name="p2" />
              <ErrorMessage className="error" component="p" name="p2" />
            </fieldset>
            <fieldset>
              <label htmlFor="p3">Es la biblia un libro confiable?</label>
              <Field type="text" id="text" name="p3" />
              <ErrorMessage className="error" component="p" name="p3" />
            </fieldset>
            <fieldset>
              <label htmlFor="p4" id="p4" name="p4">
                Tenemos razones para creer lo que dice la biblia?
              </label>
              <Field as="select" name="p4" id="select">
                <option value="">Selecciona una opcion</option>
                <option value="si">Si</option>
                <option value="no">No</option>
              </Field>
              <ErrorMessage className="error" component="p" name="p4" />
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
              <button className="rbutton" type="submit">
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
