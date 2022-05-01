import { useReducer, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet' 
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

    //el 12 se refiere a la cantidad de resultados encontrados
    const title = !searchState.q[0] ? 'Courses' : `${12} resultados para ${searchState.q[0]}`

    useEffect(() => { // ejecuta la navegacion para las busquedas
        if(!search) return
        //mientras exista algun filtro, navega
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
        <>
            <Helmet>
                <title>{title} | CECAMM-UCR</title>
                <meta name="description" content="Conozca sobre los cursos que imparte el CECAMM-UCR" />
            </Helmet>
            <SearchContext.Provider value={{
                searchState,
                dispatch
            }}>
                {children}
            </SearchContext.Provider>
        </>
    )
}