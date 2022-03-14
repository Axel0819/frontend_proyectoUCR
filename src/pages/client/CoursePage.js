import { useParams } from 'react-router-dom'
import { SectionInfoCourse } from '../../components/client/course/SectionInfoCourse'

export function CoursePage() {
    const { id } = useParams()

    console.log(id);

    return (
        <>
            <SectionInfoCourse />

            <h1>{id}</h1>
        </>
    )
}