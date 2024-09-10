import * as yup from 'yup';

const emailMatches = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

export const loginSchema = yup.object().shape({
  userName: yup.string().required('Please Enter a Name !'),
  userEmail: yup.string().required('Error in Email !').matches(emailMatches, "Please, enter a valid email"),
  password: yup
    .string()
    .min(8, 'At least 8 !')
    .max(16, 'At most 16 !')
    .required('Error in Password !'),
});