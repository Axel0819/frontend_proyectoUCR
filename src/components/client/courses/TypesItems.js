import { Checkbox, FormControlLabel, FormGroup } from "@mui/material"
import { useFilterCheckbox } from "../../../hooks/useFilterCheckbox"
import { types } from "../../../types/types"

export function TypesItems() {
    const { checkboxData, handleController: handleOnChangeState } = useFilterCheckbox(types.searchSetTypes, [
        { key: 0, name: 'omi', label: 'OMI', checked: false },
        { key: 1, name: 'others', label: 'Otros', checked: false }
    ])

    return (
        <FormGroup>
            {
                checkboxData.map(({ key, name, label, checked }) => (
                    <FormControlLabel key={key} control={<Checkbox name={name} onChange={handleOnChangeState} checked={checked} />} label={label} />
                ))
            }
        </FormGroup>
    )
}
