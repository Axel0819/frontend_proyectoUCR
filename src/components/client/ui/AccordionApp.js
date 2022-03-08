import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import classNames from 'classnames';

export function AccordionApp({ title, description, isBlack, colorText="#494949" }) {

    const accordionButtonClass = classNames('accordion__button', {
        'accordion__color__black': isBlack,
        'accordion__color__white': !isBlack
    })

    return (
        <Accordion allowZeroExpanded>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton className={accordionButtonClass}>
                        <p className="text-font-abel">
                            {title}
                        </p>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <div className="containerItemPanel">
                    <AccordionItemPanel>
                        <p style={{
                            color: colorText 
                        }} className="text-font-open-sans">
                            {description}
                        </p>
                    </AccordionItemPanel>
                </div>
            </AccordionItem>
        </Accordion>
    )
}
