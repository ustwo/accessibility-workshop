import * as Yup from 'yup';

export const schema = Yup.object().shape({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last Name is required'),
  mobilePhone: Yup.string(),
  location: Yup.string().required('Location is required'),
  email: Yup.string().email('Email not valid').required('Email is required'),
  password: Yup.string()
    .min(5, 'Must be 5 to 10 digits')
    .max(10, 'Must be 5 to 10 digits')
    .required('Password is required'),
});

export const initialFormValues = {
  firstName: '',
  lastName: '',
  mobilePhone: '',
  location: '',
  email: '',
  password: '',
};
