import React, { useState } from 'react'
import { Container } from '@mui/material'
import { TablePrices } from '../../components/client/prices/TablePrices'
import { TitleSectionPage } from '../../components/client/ui/TitleSectionPage'
import { SearchBarDebounce } from '../../components/client/ui/SearchBarDebounce'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import Helmet from 'react-helmet'

export default function PricesPage() {
  const [keyword, setKeyword] = useState('')
  const [pricesCourses, setPricesCourses] = useState([])

  const sizeQueryPrices = 9

  const title = !keyword ? 'Prices' : `${sizeQueryPrices} resultados para ${keyword}`

  useScrollReveal(['.pricesPage-body'], false, 250)

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
          <div className="flex flex-column gap-20 pricesPage-body load-hidden">
            <SearchBarDebounce setKeyword={setKeyword} handleSearch={handleSearch} focus={false} />
            <TablePrices />
          </div>
        </Container>
      </div>
    </>
  )
}