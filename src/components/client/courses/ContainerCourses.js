import { CardCourse } from "../cards/CardCourse";

export function ContainerCourses() {
    return (
        <div className="flex flex-wrap justify-content-start ml-4 gap-20 container__courses__results">
            <CardCourse />
            <CardCourse />
            <CardCourse />
            <CardCourse />
            <CardCourse />
            <CardCourse />
          </div>
    )
}
