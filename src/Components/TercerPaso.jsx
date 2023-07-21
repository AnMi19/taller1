import { useContext } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import AppContext from "../context/AppContext";
import { tercerSchema } from "../schemas/tercerSchema";
const TercerPaso = () => {
  const { setStep, dataT, setDataT } = useContext(AppContext);
  let initialValues = dataT;
  const onSubmit = (fields) => {
    setDataT(fields);
    setStep("cuartopaso");
  };
  return (
    <main>
      <h1>Te gustaria una visitá a tu casa ?</h1>
      <div className="card">
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={tercerSchema}
        >
          <Form autoComplete="off">
            <fieldset>
              <label htmlFor="cnumber">Ingresa tu celular</label>
              <Field type="text" id="cnumber" name="cnumber" autoFocus />
              <ErrorMessage className="error" component="p" name="cnumber" />
            </fieldset>
            <fieldset>
              <label htmlFor="city">Ciudad</label>
              <Field type="text" id="city" name="city" />
              <ErrorMessage className="error" component="p" name="city" />
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
export default TercerPaso;
