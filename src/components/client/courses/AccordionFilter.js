import { useState } from 'react'
import uniqid from 'uniqid'
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import { ExpandMore as ExpandMoreIcon } from '@mui/icons-material'

export function AccordionFilter({ children, title }) {
    const [isExpanded, setIsExpanded] = useState(true)
    const id = uniqid('panel-content')

    return (
        <Accordion expanded={isExpanded} onChange={() => setIsExpanded(!isExpanded)}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={id}
                id={id}
            >
                <Typography>{ title }</Typography>
            </AccordionSummary>
            <AccordionDetails>
                {children}
            </AccordionDetails>
        </Accordion>
    )
}
