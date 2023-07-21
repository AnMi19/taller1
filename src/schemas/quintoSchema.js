import * as Yup from "yup";

export const quintoSchema  = Yup.object().shape({
    meet: Yup.string("Enter a valid text").required("Rellena el campo").min(5,"El texto debe tener minimo 5 numeros"),
    more: Yup.string().oneOf(["si", "no"]).required("Es necesario elegir una opcion"),
    terms: Yup.bool().oneOf([true], "Must accept the terms").required("required"), 

});