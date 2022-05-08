import { Helmet } from 'react-helmet'
import { SectionInfoCecamm } from '../../components/client/home/SectionInfoCecamm'
import { Header } from '../../components/client/home/Header'
import { SectionInfoLloyds } from '../../components/client/home/SectionInfoLloyds'
import { Divider } from '../../components/client/ui/Divider'
import { SectionInfoCourses } from '../../components/client/home/SectionInfoCourses'
import { SectionInfoEquip } from '../../components/client/home/SectionInfoEquip'
import { SectionInfoTestim } from '../../components/client/home/SectionInfoTestim'


export default function HomePage() {

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

      <SectionInfoTestim />

    </>
  )
}
