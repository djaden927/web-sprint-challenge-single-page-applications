import * as yup from 'yup'

const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('Username is required')
        .min(2, 'name must be at least 2 characters'),
    specIns: yup
        .string(),
    size: yup
        .string(),
        // .oneOf(['small', 'medium', 'large'], 'Please Choose a size'),
    pepperoni: yup.boolean(),
    jalapenos: yup.boolean(),
    onions: yup.boolean(),
    sausage: yup.boolean(),
})

export default formSchema