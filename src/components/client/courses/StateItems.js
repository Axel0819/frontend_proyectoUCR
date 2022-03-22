import { Checkbox, FormControlLabel, FormGroup } from "@mui/material"
import { useFilterCheckbox } from "../../../hooks/useFilterCheckbox"
import { types } from "../../../types/types"

export function StateItems() {
    const { checkboxData, handleController: handleOnChangeState } = useFilterCheckbox(types.searchSetState, [
        { key: 0, name: 'open', label: 'Cursos abiertos', checked: false },
        { key: 1, name: 'close', label: 'Cursos cerrados', checked: false },
        { key: 2, name: 'all', label: 'Todos', checked: false },
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
