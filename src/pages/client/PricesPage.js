import React, { useState } from 'react'
import { Container } from '@mui/material'
import { TableApp } from '../../components/client/prices/TableApp'
import { TitleSectionPage } from '../../components/client/ui/TitleSectionPage'
import { SearchBarDebounce } from '../../components/client/ui/SearchBarDebounce'
import Helmet from 'react-helmet'
import { columnsPrices, rows } from '../../data/dataTable'

export default function PricesPage() {
  const [keyword, setKeyword] = useState('')
  const [pricesCourses, setPricesCourses] = useState([])

  const sizeQueryPrices = 9

  const title = !keyword ? 'Prices' : `${sizeQueryPrices} resultados para ${keyword}`

  const handleSearch = (value) => {
    setKeyword(value)
    console.log('se procede a buscar los cursos con sus precios: ', value);
  }

  return (
    <>
      <Helmet>
        <title>{title} | CECAMM-UCR</title>
        <meta name="description" content="Conozca sobre los precios de los cursos que ofrece el CECAMM-UCR" />
      </Helmet>

      <TitleSectionPage title={'Nuestros precios'} />
      <div className="container__prices flex justify-content-center my-6">
        <Container maxWidth="xl">
          <div className="flex flex-column gap-20 pricesPage-body">
            <SearchBarDebounce setKeyword={setKeyword} handleSearch={handleSearch} focus={false} />
            <TableApp titleHead={'Información de los cursos'} columns={columnsPrices} rows={ rows } />
          </div>
        </Container>
      </div>
    </>
  )
}