import React, { useState } from 'react'
import classNames from 'classnames'
import { Options } from '../../components/client/courses/Options'
import { Container } from '../../components/client/layouts/Container'
import { TitleSectionPage } from '../../components/client/ui/TitleSectionPage'
import { ContainerFilter } from '../../components/client/courses/ContainerFilter'
import { ContainerCourses } from '../../components/client/courses/ContainerCourses'
import { CoursesState } from '../../components/client/courses/CoursesState'

export default function CoursesPage() {
  const [openFilter, setOpenFilter] = useState(false)
  const [heightToFilter, setHeightToFilter] = useState(0)

  const classContainer = classNames('flex', 'container__courses', {
    'filterOpen': !openFilter
  })

  return (
    <CoursesState>
      <TitleSectionPage title={'Cursos'} />

      <div style={{ position: 'static' }} className='coursesPage-body'>
        <Container>
          <Options openFilter={openFilter} setOpenFilter={setOpenFilter} />

          <div className={classContainer}>
            <ContainerFilter openFilter={openFilter} setHeightToFilter={setHeightToFilter} />
            <ContainerCourses openFilter={openFilter} heightToFilter={heightToFilter} />
          </div>

        </Container>
      </div>

    </CoursesState>
  )
}