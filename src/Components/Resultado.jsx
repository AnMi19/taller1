import { useContext } from "react";
import AppContext from "../context/AppContext";

const Resultado = () => {
  const { setStep, dataP, dataS, dataT, dataC, dataQ } = useContext(AppContext);
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <main>
      <div className="card">
        <div>{dataP.nombres}</div>
        <div>{dataP.apellidos}</div>
        <div>{dataP.edad}</div>
        <div>{dataP.sexo}</div>
        <div>{dataS.p1}</div>
        <div>{dataS.p2}</div>
        <div>{dataS.p3}</div>
        <div>{dataS.p4}</div>
        <div>{dataT.cnumber}</div>
        <div>{dataT.city}</div>
        <div>{dataC.p5}</div>
        <div>{dataC.p6}</div>
        <div>{dataC.p7}</div>
        <div>{dataQ.meet}</div>
        <div>{dataQ.more}</div>
        <div>{dataQ.terms}</div>
      </div>
      <div className="buttons">
        <button
          className="rbutton"
          onClick={() => {
            setStep("inicio");
          }}
        >
          Volver
        </button>
        <button className="lbutton" onSubmit={handleSubmit}>
          Submit
        </button>
      </div>
    </main>
  );
};
export default Resultado;
