import Chip from '@mui/material/Chip';
import { types } from '../../../types/types';
import { useFilterCheckbox } from '../../../hooks/useFilterCheckbox';

export function HoursItems() {

    const { checkboxData, handleController: handleClick } = useFilterCheckbox(types.searchSetHours, [
        { key: 0, name: '16', checked: false },
        { key: 1, name: '12', checked: false },
        { key: 2, name: '8', checked: false },
    ])


    return (
        <div className="flex flex-wrap gap-10">
            {
                checkboxData.map(data => (
                    <Chip
                        key={data.key}
                        label={data.name + 'h'}
                        color={data.checked ? "primary" : "default"}
                        variant="outlined"
                        onClick={() => handleClick({ target: { name: data.name } })}
                    />
                ))
            }
        </div>
    )
}