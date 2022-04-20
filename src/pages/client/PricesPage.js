import React, { useState } from 'react'
import { Container } from '@mui/material'
import { TablePrices } from '../../components/client/prices/TablePrices'
import { TitleSectionPage } from '../../components/client/ui/TitleSectionPage'
import { SearchBarDebounce } from '../../components/client/ui/SearchBarDebounce'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { useTitle } from '../../hooks/useTitle'

export default function PricesPage() {
  useTitle({ title: 'Prices' })
  useScrollReveal(['.pricesPage-body'], false, 250)

  const [pricesCourses, setPricesCourses] = useState([])

  const handleSearch = (value) => {
    console.log('se procede a buscar los corsos con sus precios: ', value);
  }

  return (
    <>
    <TitleSectionPage title={'Nuestros Precios'} />
    <div className="container__prices flex justify-content-center my-6">
      <Container maxWidth="xl">
        <div className="flex flex-column gap-20 pricesPage-body load-hidden">
          <SearchBarDebounce handleSearch={handleSearch} focus={false}/>
          <TablePrices />
        </div>
      </Container>
    </div>
    </>
  )
}