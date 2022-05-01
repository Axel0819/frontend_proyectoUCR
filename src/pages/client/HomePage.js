import { SectionInfoCecamm } from '../../components/client/home/SectionInfoCecamm';
import { Header } from '../../components/client/home/Header';
import { SectionInfoLloyds } from '../../components/client/home/SectionInfoLloyds';
import { Divider } from '../../components/client/ui/Divider';
import { SectionInfoCourses } from '../../components/client/home/SectionInfoCourses';
import { SectionInfoEquip } from '../../components/client/home/SectionInfoEquip';
import { SectionInfoTestim } from '../../components/client/home/SectionInfoTestim';

import { testimomials } from '../../data/testimonials'
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { Helmet } from 'react-helmet'

export default function HomePage() {
  useScrollReveal(['.sectionInfoCecamm', '.divider', '.sectionInfoLloyds', '.sectionInfoCourses', '.sectionInfoEquip', '.sectionInfoTestim'])

  return (
    <>
      <Helmet>
        <title>CECAMM-UCR</title>
        <meta name="description" content="CECAMM-UCR, Centro de formación que se proyecta para ocupar oportunamente el rol de formación." />
      </Helmet>
      
      <Header />
      <SectionInfoCecamm />
      <Divider />
      <SectionInfoLloyds />
      <Divider />
      <SectionInfoCourses />
      <Divider />
      <SectionInfoEquip />
      <Divider />

      <SectionInfoTestim
        titleSection={"Testimonios"}
        subtitleCard={"Cadete del CECAMM-UCR"}
        comments={testimomials}
      />
    </>
  )
}
