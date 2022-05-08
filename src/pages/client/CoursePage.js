import { useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { SectionInfoCourse } from '../../components/client/course/SectionInfoCourse'
import { SectionInfoLearn } from '../../components/client/course/SectionInfoLearn'
import { SectionInfoTestim } from '../../components/client/home/SectionInfoTestim'
import { dataCourseLearn } from '../../data/dataCourse'
import { testimomials } from '../../data/testimonials'

export function CoursePage() {
    const { id } = useParams()

    const titleCourse = "Primeros Auxilios Básicos"

    return (
        <>
            <Helmet>
                <title>{titleCourse} | CECAMM-UCR</title>
                <meta name="description" content={`Detalles sobre el curso ${titleCourse}`} />
            </Helmet>
            <SectionInfoCourse
                name={titleCourse}
                omi={"1.20"}
                price={25000}
                dateInit={"Lunes 10 y martes 11 de enero del 2022"}
                hours={16}
            />

            <SectionInfoLearn listLearn={dataCourseLearn} />

            <SectionInfoTestim
                titleSection={`Comentarios de estudiantes que concluyeron el curso de ${titleCourse}`}
                subtitleCard={"Estudiante del CECAMM"}
                comments={testimomials}
            />
        </>
    )
}