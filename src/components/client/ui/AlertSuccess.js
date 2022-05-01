import {Alert, IconButton, Collapse} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';

export const AlertSuccess = ({ open, setOpen }) => {
    return (
        <Collapse in={open}>
            <Alert
                action={
                    <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"
                        onClick={() => {
                            setOpen(false);
                        }}
                    >
                        <CloseIcon fontSize="inherit" />
                    </IconButton>
                }
                sx={{ mb: 2 }}
            >
                ¡Consulta realizada correctamente!
            </Alert>
        </Collapse>
    )
}
