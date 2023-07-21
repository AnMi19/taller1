import * as Yup from "yup";

export const cuartoSchema  = Yup.object().shape({
   
    p5: Yup.string("Enter a valid text").required("Ingresa un texto valido").min(5,"El texto debe tener minimo 5 letras"),
    p6: Yup.string("Enter a valid text").required("Ingresa un texto valido").min(5,"El texto debe tener minimo 5 letras"),
    p7: Yup.string("Enter a valid text").required("Ingresa un texto valido").min(5,"El texto debe tener minimo 5 letras"),


});