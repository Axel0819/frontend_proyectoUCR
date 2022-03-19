import { useContext } from 'react'
import { SearchContext } from '../context/SearchContext'
import { types } from '../types/types'

export const useFilterCheckbox = (type) => {
    const { searchState, dispatch } = useContext(SearchContext)
    const objectSearch = type === types.searchSetState ? searchState.state : searchState.types

    const handleOnChange = (e) => {
        const value = e.target.value
        const checked = e.target.checked
        if(checked) return dispatch({
            type,
            payload: [...objectSearch, value]
        })

        const newStateChecked = objectSearch.filter(item => item !== value)
        dispatch({
            type,
            payload: [...newStateChecked]
        });
    }

    return { handleOnChange }
}