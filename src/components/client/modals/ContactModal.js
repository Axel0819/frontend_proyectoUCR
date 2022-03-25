import { useFormik } from 'formik'
import * as yup from 'yup'
import { InputForm } from './InputForm';   

export function ContactModal({closeModal}) {

    const formik = useFormik({
        initialValues: {
            name: '',
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            message: ''
        },
        validationSchema: yup.object().shape({
            name: yup.string().required('Este campo es requerido').matches(/^[aA-zZ\S]+$/, 'No se aceptan espacios'),
            firstName: yup.string().required('Este campo es requerido').matches(/^[aA-zZ\S]+$/, 'No se aceptan espacios'),
            lastName: yup.string().required('Este campo es requerido').matches(/^[aA-zZ\S]+$/, 'No se aceptan espacios'),
            email: yup.string().email('Formato de email incorrecto').required('Este campo es requerido'),
            phone: yup.string().matches(/^[0-9]+$/, "Formato de número incorrecto").min(8, 'Formato de número incorrecto').max(8, 'Formato de número incorrecto'),
            message: yup.string().required('Este campo es requerido'),
        }),
        onSubmit: (values) => {
            console.log(values);
        }
    })

    return (
        <div className="container__modal__contact">
            <p className="modal__contact__title text-font-abel">!Contactenos!</p>
            <hr className="my-4" />

            <form onSubmit={formik.handleSubmit} autoComplete="off">

                <div className="flex flex-column gap-20">
                    <div className="flex gap-20">
                        <InputForm name="name" formik={formik} />
                        <InputForm name="firstName" formik={formik} />
                        <InputForm name="lastName" formik={formik} />
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
    )
}
