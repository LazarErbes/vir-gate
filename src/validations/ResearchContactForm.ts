import * as Yup from 'yup';

export const ResearchContactFormValidationSchema = Yup.object().shape({
    email: Yup.string().email('f:validation:emailAddress').required('f:validation.required'),
    firstName: Yup.string().required('f:validation.required'),
    lastName: Yup.string().required('f:validation.required'),
});
