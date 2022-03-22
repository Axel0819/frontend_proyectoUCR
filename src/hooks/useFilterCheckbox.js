import { useContext, useEffect, useState } from 'react'
import { SearchContext } from '../context/SearchContext'
import useGetNumbersFilters from './useGetNumbersFilters'

export const useFilterCheckbox = (type, state) => {
    const initState = JSON.stringify(state)
    const { dispatch } = useContext(SearchContext)
    const [checkboxData, setCheckboxData] = useState(state)
    const { isEmpty } = useGetNumbersFilters()

    const handleController = ({ target }) => {
        const value = target.name
        const result = checkboxData.map(item => item.name === value ? {
            ...item,
            checked: !item.checked
        } : item)
        setCheckboxData([...result])
    }

    useEffect(() => { // guarda los filtros en el reducer de searchs
        const searchData = checkboxData.filter(({ checked }) => checked === true).map(item => item.name)

        dispatch({
            type,
            payload: searchData
        })

    }, [checkboxData, dispatch, type])

    useEffect(() => {
        const parseInitState = JSON.parse(initState)
        // if empty, set values initials
        if (isEmpty) {
            setCheckboxData([...parseInitState])
        }
    }, [isEmpty, initState])


    return { checkboxData, handleController }
}