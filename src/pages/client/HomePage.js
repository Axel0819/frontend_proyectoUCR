import { SectionInfoCecamm } from '../../components/client/home/SectionInfoCecamm';
import { Header } from '../../components/client/home/Header';
import { SectionInfoLloyds } from '../../components/client/home/SectionInfoLloyds';
import { Divider } from '../../components/client/ui/Divider';
import { SectionInfoCourses } from '../../components/client/home/SectionInfoCourses';
import { CardCourse } from '../../components/client/cards/CardCourse';

export default function HomePage() {
  //estudiar la propiedad transform y translate de css

  return (
    <>
      <Header />
      <SectionInfoCecamm />
      <Divider />
      <SectionInfoLloyds />
      <Divider />
      <SectionInfoCourses />
      <Divider />
      {/* <CardCourse /> */}
    </>
  )
}
