import { Helmet } from 'react-helmet'
import { SectionInfoCecamm } from '../../components/client/home/SectionInfoCecamm'
import { SectionInfoLloyds } from '../../components/client/home/SectionInfoLloyds'
import { Divider } from '../../components/client/ui/Divider'
import { SectionInfoEquip } from '../../components/client/home/SectionInfoEquip'
import { SectionInfoTestim } from '../../components/client/home/SectionInfoTestim'
import { lazy, Suspense } from 'react'
import { Translation } from 'react-i18next'

const Header = lazy(() => import('../../components/client/home/Header'))
const SectionInfoCourses = lazy(() => import('../../components/client/home/SectionInfoCourses'))

export default function HomePage() {

  return (
    <>
      <Helmet>
        <title>CECAMM-UCR</title>
        <meta name="description" content="CECAMM-UCR, Centro de formación que se proyecta para ocupar oportunamente el rol de formación." />
      </Helmet>

      <Suspense fallback={<span>Cargando imagenes de cabecera...</span>}>
        <Header />
      </Suspense>
      <SectionInfoCecamm />
      <Divider />
      <SectionInfoLloyds />
      <Divider />

      <Suspense fallback={<span>Cargando los cursos...</span>}>
        <SectionInfoCourses />
      </Suspense>

      <Divider />
      <SectionInfoEquip />
      <Divider />

      <Translation ns="home/sectionInfoTestimonials">
        {
          (t) => {

            const testimonials = [
              {
                name: 'Elizabeth Ivannia Arronis Jiménez',
                img: './photo1.png',
                description: t('comment1')
              },
              {
                name: 'Hillary Sofía Arroyo Leitón',
                img: './photo2.png',
                description: t('comment2')
              },
              {
                name: 'Rubén Daniel Marín López',
                img: './photo3.png',
                description: t('comment3')
              }
            ]

            return (
              <SectionInfoTestim
                comments={testimonials}
                titleSection={t('title')}
                subtitleCard={t('cadet')}
              />
            )
          }
        }
      </Translation>

    </>
  )
}
