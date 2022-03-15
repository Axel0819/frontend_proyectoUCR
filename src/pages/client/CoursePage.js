import { useParams } from 'react-router-dom'
import { SectionInfoCourse } from '../../components/client/course/SectionInfoCourse'

export function CoursePage() {
    const { id } = useParams()

    console.log(id);

    return (
        <>
            <SectionInfoCourse 
                name={"Primeros Auxilios Básicos"} 
                omi={"1.20"} 
                price={25000}
                dateInit={"Lunes 10 de marzo del 2022"}
                dateFinally={"Lunes 01 de julio del 2022"}
                hours={16}
            />

            <h1>{id}</h1>
        </>
    )
}