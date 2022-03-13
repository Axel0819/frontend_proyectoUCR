import React from 'react'
import { ImageInit } from '../../components/client/about/ImageInit'
import { SectionInfoCulture } from '../../components/client/about/SectionInfoCulture'
import { SectionInfoDescrip } from '../../components/client/about/SectionInfoDescrip'
import { Divider } from '../../components/client/ui/Divider'
import { TitleSectionPage } from '../../components/client/ui/TitleSectionPage'

export default function AboutUsPage() {
  // console.log(window.innerWidth < 576);
  return (
    <>
      <TitleSectionPage title={'¿Quiénes Somos?'} isAbout={true} />
      <ImageInit />
      <SectionInfoDescrip />
      <Divider />
      <SectionInfoCulture />
    </>
  )
}