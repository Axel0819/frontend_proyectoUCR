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

  const classContainer = classNames('flex', 'container__courses', {
    'filterOpen': !openFilter
  })

  return (
    <CoursesState>
      <TitleSectionPage title={'Cursos'} />
      <Container>
        <Options openFilter={openFilter} setOpenFilter={setOpenFilter} />

        <div className={classContainer}>
          <ContainerFilter openFilter={openFilter} />
          <ContainerCourses />
        </div>

      </Container>
    </CoursesState>
  )
}