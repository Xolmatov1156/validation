import * as yup from 'yup'

export const loginSchema = () => {
    const data = yup.object().shape({
        userName:yup.string().required("Ism xato bor !"),
        userEmail:yup.string().required("Email xato bor !"),
        password:yup.string().min(8, "Eng kami 8 !").max(16, "Eng kopi 16 !").required("Password xato"),
    })
    return data
}