import React, { useState } from 'react'
import classNames from 'classnames'
import { CardCourse } from '../../components/client/cards/CardCourse'
import { Options } from '../../components/client/courses/Options'
import { Container } from '../../components/client/layouts/Container'
import { TitleSectionPage } from '../../components/client/ui/TitleSectionPage'

export default function CoursesPage() {

  const [openFilter, setOpenFilter] = useState(false)

  const classFilter = classNames('container__filter container__filter__body', {
    'show': openFilter,
    'hide': !openFilter
  })

  const classContainer = classNames('flex', 'container__courses', {
    'filterOpen': !openFilter
  })

  return (
    <>
      <TitleSectionPage title={'Cursos'} />
      <Container>
        <Options setOpenFilter={setOpenFilter}/>

        <div className={classContainer}>
          <div className={classFilter}>
            <h5>filter</h5>
          </div>

            <div className="flex flex-wrap justify-content-around container__courses__results">
              <CardCourse />
              <CardCourse />
              <CardCourse />
              <CardCourse />
              <CardCourse />
              <CardCourse />

            </div>
        </div>

      </Container>
    </>
  )
}
