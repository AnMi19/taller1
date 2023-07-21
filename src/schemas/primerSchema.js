import * as Yup from "yup";

export const primerSchema  = Yup.object().shape({
    nombres: Yup.string("Enter a valid text").required("Ingresa tus nombres").min(5,"El texto debe tener minimo 5 letras"),
    apellidos: Yup.string("Enter a valid text").required("Ingresa tus apellidos").min(5,"El texto debe tener minimo 5 letras"),
    edad: Yup.number("Ingresa una edad valida").required("Ingresa tu edad"),
    sexo: Yup.string().oneOf(["hombre", "mujer"]).required("Es necesario elegir una opcion"),
});