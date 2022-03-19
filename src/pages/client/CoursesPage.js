import React, { useEffect, useReducer, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string'
import classNames from 'classnames'
import { Options } from '../../components/client/courses/Options'
import { Container } from '../../components/client/layouts/Container'
import { TitleSectionPage } from '../../components/client/ui/TitleSectionPage'
import { ContainerFilter } from '../../components/client/courses/ContainerFilter'
import { ContainerCourses } from '../../components/client/courses/ContainerCourses'
import { SearchContext } from '../../context/SearchContext'
import { searchReducer } from '../../reducers/searchReducer'

const initState = () => ({
  q: [], // query search course
  hours: [],
  types: [],
  state: []
})

export default function CoursesPage() {
  const [searchState, dispatch] = useReducer(searchReducer, {}, initState)
  const navigate = useNavigate()
  const location = useLocation()

  const [openFilter, setOpenFilter] = useState(false)

  const classContainer = classNames('flex', 'container__courses', {
    'filterOpen': !openFilter
  })

  const search = queryString.stringify(searchState)

  useEffect(() => { // ejecuta la navegacion para las busquedas
    navigate(`?${search}`)
  }, [search, navigate])

  useEffect(() => { // se procede a buscar la informacion en base a las querys establecidas
    if (!location.search) return

    const busqueda = queryString.parse(location.search)

    console.log('Se procede a realizar la busqueda');
    console.log(busqueda);
  }, [location.search, searchState])

  return (
    <SearchContext.Provider value={{
      searchState,
      dispatch
    }}>
      <TitleSectionPage title={'Cursos'} />
      <Container>
        <Options setOpenFilter={setOpenFilter} />

        <div className={classContainer}>
          <ContainerFilter openFilter={openFilter} />
          <ContainerCourses />
        </div>

      </Container>
    </SearchContext.Provider>
  )
}
