import { useContext } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import AppContext from "../context/AppContext";
import { quintoSchema } from "../schemas/quintoSchema";

const QuintoPaso = () => {
  const { setStep, dataQ, setDataQ } = useContext(AppContext);
  let initialValues = dataQ;
  const onSubmit = (fields) => {
    setDataQ(fields);
    setStep("resultado");
  };
  return (
    <main>
      <h1>Estudia con los testigos de Jehová</h1>
      <div className="card">
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={quintoSchema}
        >
          <Form autoComplete="off">
            <fieldset>
              <label htmlFor="meet">
                ¿Le gustaria asistir a nuestras reuniones?
              </label>
              <Field type="text" id="meet" name="meet" autoFocus />
              <ErrorMessage className="error" component="p" name="meet" />
            </fieldset>
            <fieldset>
              <label htmlFor="more">Quiere saber mas?</label>
              <Field as="select" id="select" name="more">
                <option value="">selecione una opcion</option>
                <option value="si">Si</option>
                <option value="no">No</option>
              </Field>
              <ErrorMessage className="error" component="p" name="more" />
            </fieldset>

            <fieldset>
              <label htmlFor="terms">
                <Field type="checkbox" id="terms" name="terms" />
                Accept terms
              </label>
              <ErrorMessage className="error" component="p" name="terms" />
            </fieldset>
            <fieldset>
              <label htmlFor="mas">Para mas informacion entre a JW.ORG</label>
            </fieldset>
            <div className="buttons">
              <button
                className="lbutton"
                onClick={() => {
                  setStep("cuartopaso");
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
export default QuintoPaso;
