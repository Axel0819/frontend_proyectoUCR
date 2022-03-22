import { HoursItems } from './HoursItems';
import { AccordionFilter } from './AccordionFilter';
import { StateItems } from './StateItems';
import { TypesItems } from './TypesItems';


export function FilterItems() {

    return (
        <div>
            <AccordionFilter title={'Estado'}>
                <StateItems />
            </AccordionFilter>

            <AccordionFilter title={'Horas'}>
                <HoursItems />
            </AccordionFilter>

            <AccordionFilter title={'Tipo'}>
                <TypesItems />
            </AccordionFilter>
        </div>
    )
}
