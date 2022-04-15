import { SectionInfoCecamm } from '../../components/client/home/SectionInfoCecamm';
import { Header } from '../../components/client/home/Header';
import { SectionInfoLloyds } from '../../components/client/home/SectionInfoLloyds';
import { Divider } from '../../components/client/ui/Divider';
import { SectionInfoCourses } from '../../components/client/home/SectionInfoCourses';
import { SectionInfoEquip } from '../../components/client/home/SectionInfoEquip';
import { SectionInfoTestim } from '../../components/client/home/SectionInfoTestim';

import { testimomials  } from '../../data/testimonials'
import ScrollReveal from 'scrollreveal'
import { useEffect } from 'react';

export default function HomePage() {
  useEffect(() => {
    const elementsReveal = ['.sectionInfoCecamm', '.divider', '.sectionInfoLloyds', '.sectionInfoCourses', '.sectionInfoEquip', '.sectionInfoTestim']

    elementsReveal.forEach(e => {
      ScrollReveal().reveal(e, {delay: 500, reset: true})
    })
    ScrollReveal().reveal('.divider', {delay: 250, reset: true})
  }, [])
  return (
    <>
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
