import * as Yup from "yup";

export const primerSchema  = Yup.object().shape({
    text: Yup.string("Enter a valid text").required("Text is required"),
});