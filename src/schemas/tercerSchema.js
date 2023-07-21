import * as Yup from "yup";

export const tercerSchema  = Yup.object().shape({
    cnumber: Yup.number("Enter a valid text").required("Ingresa tu numero").min(5,"El texto debe tener minimo 5 numeros"),
    city: Yup.string("Enter a valid text").required("Ingresa tu ciudad").min(5,"El texto debe tener minimo 5 letras"),


});