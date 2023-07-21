import * as Yup from "yup";

export const segundoSchema  = Yup.object().shape({
    p1: Yup.string("Ingresa un texto valido").required("Texto requerido").min(8,"El texto debe tener minimo 8 letras"),
    p2: Yup.string("Enter a valid text").required("Texto requerido").min(8,"El texto debe tener minimo 8 letras"),
    p3: Yup.string("Enter a valid text").required("Text requerido").min(8,"El texto debe tener minimo 8 letras"),
    p4: Yup.string().oneOf(["si", "no"]).required("Es necesario elegir una opcion"),
});
