import React from 'react'
import { ImageInit } from '../../components/client/about/ImageInit'
import { SectionInfoCulture } from '../../components/client/about/SectionInfoCulture'
import { SectionInfoDescrip } from '../../components/client/about/SectionInfoDescrip'
import { SectionInfoHistory } from '../../components/client/about/SectionInfoHistory'
import { Divider } from '../../components/client/ui/Divider'
import { TitleSectionPage } from '../../components/client/ui/TitleSectionPage'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { useSEO } from '../../hooks/useSEO'

export default function AboutUsPage() {
  useSEO({ title: 'About' })
  useScrollReveal(['.sectionInfoDescrip', '.imageInit', '.sectionInfoCulture', '.sectionInfoHistory'])


  return (
    <>
      <TitleSectionPage title={'¿Quiénes Somos?'} isAbout={true} />
      <ImageInit />
      <SectionInfoDescrip />
      <Divider />
      <SectionInfoCulture />
      <Divider />
      <SectionInfoHistory />
    </>
  )
}