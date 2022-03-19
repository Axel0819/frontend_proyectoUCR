import { useState, useContext, useEffect } from 'react'
import Chip from '@mui/material/Chip';
import { SearchContext } from '../../../context/SearchContext';
import { types } from '../../../types/types';

export default function ChipsArray() {
    const { dispatch } = useContext(SearchContext)
    const [chipData, setChipData] = useState([
        { key: 0, label: '16h', active: false },
        { key: 1, label: '12h', active: false },
        { key: 2, label: '8h', active: false },
    ]);

    const handleClick = (value) => {
        const result = chipData.map(chip => chip.label === value ? {
            ...chip,
            active: !chip.active
        } : chip)
        setChipData([...result])
    }

    useEffect(() => { // guarda los filtros en el reducer de searchs
        const searchData = chipData.filter(chip => chip.active === true).map(item => item.label)

        dispatch({
            type: types.searchSetHours,
            payload: searchData
        })

    }, [chipData, dispatch])


    return (
        <div className="flex flex-wrap gap-10">
            {
                chipData.map(data => (
                    <Chip
                        key={data.key}
                        label={data.label}
                        color={data.active ? "primary" : "default"}
                        variant="outlined"
                        onClick={() => handleClick(data.label)}
                    />
                ))
            }
        </div>
    )
}