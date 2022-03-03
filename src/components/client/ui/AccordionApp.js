import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
  } from 'react-accessible-accordion';

export function AccordionApp({title, description}) {
  return (
    <Accordion allowZeroExpanded>
        <AccordionItem>
            <AccordionItemHeading>
                <AccordionItemButton>
                    <p className="text-font-abel">
                        { title }
                    </p>
                </AccordionItemButton>
            </AccordionItemHeading>
            <div className="containerItemPanel">
                <AccordionItemPanel>
                    <p className="text-font-open-sans">
                        {description}
                    </p>
                </AccordionItemPanel>
            </div>
        </AccordionItem>
    </Accordion>
  )
}
