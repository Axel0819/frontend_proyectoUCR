import { TextField } from "@mui/material"
import { FastField } from "formik";

export const InputForm = ({ name, formik, ...rest }) => (
    <FastField name={name} >
        {(field) => {
            const capitalizeFirstLetter = () => name.charAt(0).toUpperCase() + name.slice(1)
            const messageError = () => formik.touched[name] && formik.errors[name] ? formik.errors[name] : ''
            return (
                <TextField
                    fullWidth={true}
                    name={name}
                    label={capitalizeFirstLetter()}
                    value={formik.values[name]}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched[name] && formik.errors[name] ? true : false}
                    helperText={messageError()}
                    {...rest}
                    {...field}
                />
            )
        }}
    </FastField>
)