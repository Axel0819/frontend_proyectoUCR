import { useReducer, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import queryString from 'query-string'
import { SearchContext } from '../../../context/SearchContext'
import { searchReducer } from '../../../reducers/searchReducer'

const initState = () => ({
    q: [], // query search course
    hours: [],
    types: [],
    state: []
})

export function CoursesState({ children }) {
    const [searchState, dispatch] = useReducer(searchReducer, {}, initState)
    const navigate = useNavigate()
    const location = useLocation()

    const search = queryString.stringify(searchState)

    useEffect(() => { // ejecuta la navegacion para las busquedas
        navigate(`?${search}`)
    }, [search, navigate])

    useEffect(() => { // se procede a buscar la informacion en base a las querys establecidas
        if (!location.search) return
        //se envia el state

        const busqueda = queryString.parse(location.search)

        console.log('Se procede a realizar la busqueda');
        console.log(searchState);

        // await fetch('url', {
        //     method: 'POST',
        //     body: JSON.stringify(busqueda)
        // })

    }, [location.search, searchState])

    return (
        <SearchContext.Provider value={{
            searchState,
            dispatch
        }}>
            { children }
        </SearchContext.Provider>
    )
}