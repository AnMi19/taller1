import { useContext } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import AppContext from "../context/AppContext";
import { cuartoSchema } from "../schemas/cuartoSchema";
const CuartoPaso = () => {
  const { setStep, dataC, setDataC } = useContext(AppContext);
  let initialValues = dataC;
  const onSubmit = (fields) => {
    setDataC(fields);
    setStep("quintopaso");
  };
  return (
    <main>
      <h3>¿Por que estudiar la biblia?</h3>
      <div className="card">
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={cuartoSchema}
        >
          <Form autoComplete="off">
            <fieldset>
              <label htmlFor="p5" id="p5" name="p5">
                Que metodo de enseñanza prefieres ?
              </label>
              <Field type="text" id="p5" name="p5" autoFocus />
              <ErrorMessage className="error" component="p" name="p5" />
            </fieldset>
            <fieldset>
              <label htmlFor="p6" id="p6" name="p6">
                Tienes preguntas sobrela biblia ?
              </label>
              <Field type="text" id="p6" name="p6" />
              <ErrorMessage className="error" component="p" name="p6" />
            </fieldset>
            <fieldset>
              <label htmlFor="texto" id="p7" name="p7">
                En que situaciones nos ayuda la biblia?
              </label>
              <Field type="text" id="p7" name="p7" />
              <ErrorMessage className="error" component="p" name="p7" />
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
export default CuartoPaso;
