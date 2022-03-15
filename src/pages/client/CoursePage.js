import { useParams } from 'react-router-dom'
import { SectionInfoCourse } from '../../components/client/course/SectionInfoCourse'
import { SectionInfoLearn } from '../../components/client/course/SectionInfoLearn';
import { SectionInfoTestim } from '../../components/client/home/SectionInfoTestim';
import { dataCourseLearn } from '../../data/dataCourse';
import { testimomials } from '../../data/testimonials';

export function CoursePage() {
    const { id } = useParams()

    console.log(id);

    const titleCourse = "Primeros Auxilios Básicos" 

    return (
        <>
            <SectionInfoCourse 
                name={titleCourse} 
                omi={"1.20"} 
                price={25000}
                dateInit={"Lunes 10 de marzo del 2022"}
                dateFinally={"Lunes 01 de julio del 2022"}
                hours={16}
            />

            <SectionInfoLearn listLearn={dataCourseLearn}/>

            <SectionInfoTestim 
                titleSection={`Comentarios de estudiantes que concluyeron el curso de ${titleCourse}`}
                subtitleCard={"Estudiante del CECAMM"}
                comments={testimomials}
            />
        </>
    )
}