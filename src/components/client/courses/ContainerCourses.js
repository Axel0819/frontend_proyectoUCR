import { CardCourse } from "../cards/CardCourse";
import { TitleSection } from "../home/TitleSection";

export function ContainerCourses() {
    return (
        <div className="container__courses__results">
            <div className="mb-4">
                <TitleSection title={"Cursos abiertos"} />
            </div>
            <div className="flex flex-wrap justify-content-around px-3 courses__results__cards">
                <CardCourse />
                <CardCourse />
                <CardCourse />
                <CardCourse />
                <CardCourse />
                <CardCourse />
            </div>

          </div>
    )
}
