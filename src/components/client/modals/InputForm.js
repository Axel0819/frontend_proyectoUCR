// import { TextField } from '@material-ui/core'
import { memo } from 'react'
import { TextField } from "@mui/material"


export const InputForm =  memo(({ name, formik, type, ...rest }) => {
    const capitalizeFirstLetter = (name) => name.charAt(0).toUpperCase() + name.slice(1)
    const messageError = (name) => formik.touched[name] && formik.errors[name] ? formik.errors[name] : ''


    return(
        <TextField 
            fullWidth={true}
            name={ name }
            label={ capitalizeFirstLetter(name) }
            value={formik.values[name]}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched[name] && formik.errors[name] ? true : false}
            helperText={messageError(name)}
            type={type}
            {...rest}
        />
    )
})