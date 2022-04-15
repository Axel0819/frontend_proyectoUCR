import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import classNames from 'classnames';

export function AccordionApp({ title, description, isBlack, colorText = "#494949", children = null }) {

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
                        {children !== null ? (
                            children
                        ) : (
                            <div className="panel__text">
                                <p style={{
                                    color: colorText
                                }} className="text-font-open-sans text-justify px-2">
                                    {description}
                                </p>
                            </div>
                        )}

                        {/* <p style={{
                            color: colorText 
                        }} className="text-font-open-sans">
                            {description}
                        </p> */}
                    </AccordionItemPanel>
                </div>
            </AccordionItem>
        </Accordion>
    )
}
