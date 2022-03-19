import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import ChipsArray from './ChipsArray';

import { types } from '../../../types/types';
import { useFilterCheckbox } from '../../../hooks/useFilterCheckbox';

export function FilterItems() {
    const { handleOnChange: handleOnChangeState } = useFilterCheckbox(types.searchSetState)
    const { handleOnChange: handleOnChangeTypes } = useFilterCheckbox(types.searchSetTypes)

    return (
        <div>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Estado</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox onChange={handleOnChangeState} value="open" />} label="Cursos abiertos" />
                        <FormControlLabel control={<Checkbox onChange={handleOnChangeState} value="close" />} label="Cursos cerrados" />
                        <FormControlLabel control={<Checkbox onChange={handleOnChangeState} value="all" />} label="Todos" />
                    </FormGroup>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>Horas</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <ChipsArray />
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>Tipo</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox onChange={handleOnChangeTypes} value="omi" />} label="OMI" />
                        <FormControlLabel control={<Checkbox onChange={handleOnChangeTypes} value="others" />} label="Otros" />
                    </FormGroup>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}
