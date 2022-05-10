import React from 'react'
import { Helmet } from 'react-helmet'
import { ImageInit } from '../../components/client/about/ImageInit'
import { SectionInfoCulture } from '../../components/client/about/SectionInfoCulture'
// import { SectionInfoDescrip } from '../../components/client/about/SectionInfoDescrip'
import { SectionInfoHistory } from '../../components/client/about/SectionInfoHistory'
import { Divider } from '../../components/client/ui/Divider'
import { TitleSectionPage } from '../../components/client/ui/TitleSectionPage'

import { lazy, Suspense } from 'react'
import { Translation } from 'react-i18next'

const SectionInfoDescrip = lazy(() => import('../../components/client/about/SectionInfoDescrip'))

export default function AboutUsPage() {

  return (
    <>
      <Helmet>
        <title>About | CECAMM-UCR</title>
        <meta name="description" content="Conozca más sobre el CECAMM-UCR, nuestra cultura y nuestra historia" />
      </Helmet>

      <TitleSectionPage title={'¿Quiénes somos?'} isAbout={true} />
      <ImageInit />

      <Suspense fallback={ <span>Cargando...</span> }>
        <SectionInfoDescrip />
      </Suspense>

      <Divider />

      <Translation ns="aboutUs/sectionInfoCulture">
           {(t) => {
               const dataCulture = [
                   {
                       title: t('missionT'),
                       icon: 'fa-solid fa-bullseye',
                       description: t('missionD')
                   },
                   {
                       title: t('visionT'),
                       icon: 'fa-solid fa-eye',
                       description: t('visionD')
                   },
                   {
                       title: t('objectivesT'),
                       icon: 'fa-solid fa-list-check',
                       description: [
                           t('obj1'),
                           t('obj2'),
                           t('obj3'),
                           t('obj4'),
                       ]
                   },
               ]

               return <SectionInfoCulture dataCulture={dataCulture} />
              }}
            </Translation>

      {/* <SectionInfoCulture /> */}

      <Divider />
      <SectionInfoHistory />
    </>
  )
}