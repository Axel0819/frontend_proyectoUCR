import { useFormik, FormikProvider } from 'formik'
import { useEffect, useState } from 'react';
import * as yup from 'yup'
import { fetchApp } from '../../../helpers/fetch';
import { AlertSuccess } from '../ui/AlertSuccess';
import { InputForm } from './InputForm';

export const ContactModal = ({ closeModal }) => {
    const [open, setOpen] = useState(false)

    const timeoutAlert = setTimeout(() => {
        if (open) setOpen(false)
    }, 4000);

    const triggerTimeout = () => timeoutAlert

    const formik = useFormik({
        initialValues: {
            name: '',
            firstSurname: '',
            secondSurname: '',
            email: '',
            phone: '',
            message: ''
        },
        validationSchema: yup.object().shape({
            name: yup.string().required('Este campo es requerido').matches(/^[aA-zZ\S]+$/, 'No se aceptan espacios'),
            firstSurname: yup.string().required('Este campo es requerido').matches(/^[aA-zZ\S]+$/, 'No se aceptan espacios'),
            secondSurname: yup.string().required('Este campo es requerido').matches(/^[aA-zZ\S]+$/, 'No se aceptan espacios'),
            email: yup.string().email('Formato de email incorrecto').required('Este campo es requerido'),
            phone: yup.string().matches(/^[0-9]+$/, "Formato de número incorrecto").min(8, 'Formato de número incorrecto').max(8, 'Formato de número incorrecto'),
            message: yup.string().required('Este campo es requerido'),
        }),
        onSubmit: async (values, actions) => {
            console.log(values);

            const resp = await fetchApp('contact', values, 'POST')
            const data = await resp.json()

            // si todo va bien, se muestra la alerta se success
            console.log(data)

            setOpen(true)
            triggerTimeout()
            actions.resetForm()
        }
    })

    useEffect(() => {
        return () => clearTimeout(timeoutAlert)
    }, [timeoutAlert])

    return (
        <FormikProvider value={formik}>
            <div className="container__modal__contact">
                <p className="modal__contact__title text-font-abel">¡Contactenos!</p>
                <hr className="my-4" />

                <form onSubmit={formik.handleSubmit} autoComplete="off">

                    <div className="flex flex-column gap-20">
                        <AlertSuccess open={open} setOpen={setOpen} />
                        <div className="flex gap-20">
                            <InputForm name="name" formik={formik} />
                            <InputForm name="firstSurname" formik={formik} />
                            <InputForm name="secondSurname" formik={formik} />
                        </div>

                        <div>
                            <InputForm name="email" formik={formik} />
                        </div>

                        <div>
                            <InputForm name="phone" formik={formik} />
                        </div>

                        <div>
                            <InputForm name="message" formik={formik} multiline rows={6} />
                        </div>

                        <div className="flex justify-content-end">
                            <div className="flex gap-20">
                                <button className="btn btn-cancel" type="button" onClick={closeModal}>Cancelar</button>
                                <button className="btn btn-primary" type="submit" onClick={formik.handleSubmit}>Enviar</button>
                            </div>
                        </div>

                    </div>


                </form>
            </div>
        </FormikProvider>
    )
}
