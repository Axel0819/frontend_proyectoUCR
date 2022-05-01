import React from 'react'
import { Helmet } from 'react-helmet'
import { ImageInit } from '../../components/client/about/ImageInit'
import { SectionInfoCulture } from '../../components/client/about/SectionInfoCulture'
import { SectionInfoDescrip } from '../../components/client/about/SectionInfoDescrip'
import { SectionInfoHistory } from '../../components/client/about/SectionInfoHistory'
import { Divider } from '../../components/client/ui/Divider'
import { TitleSectionPage } from '../../components/client/ui/TitleSectionPage'
import { useScrollReveal } from '../../hooks/useScrollReveal'

export default function AboutUsPage() {
  useScrollReveal(['.sectionInfoDescrip', '.imageInit', '.sectionInfoCulture', '.sectionInfoHistory'])

  return (
    <>
      <Helmet>
        <title>About | CECAMM-UCR</title>
        <meta name="description" content="Conozca más sobre el CECAMM-UCR, nuestra cultura y nuestra historia" />
      </Helmet>

      <TitleSectionPage title={'¿Quiénes somos?'} isAbout={true} />
      <ImageInit />
      <SectionInfoDescrip />
      <Divider />
      <SectionInfoCulture />
      <Divider />
      <SectionInfoHistory />
    </>
  )
}