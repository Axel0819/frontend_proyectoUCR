import queryString from 'query-string'
import { useLocation } from "react-router-dom";
import useGetNumbersFilters from "../../../hooks/useGetNumbersFilters";
import { CardCourse } from "../cards/CardCourse";
import { TitleSection } from "../home/TitleSection";


//NOTA: Al cargar el componente por primera vez se cargaran los cursos abiertos por defecto
export function ContainerCourses() {
    const location = useLocation()

    const { q = ''} = queryString.parse(location.search)

    const { isEmpty } = useGetNumbersFilters()

    const titleSearch = !q ? 'Cursos abiertos' : `Resultados para "${q}"`

    //TODO: Crear una alerta si no existe un resultado
    return (
        <div className="container__courses__results">
            {
                isEmpty && (
                    <div className="mb-4">
                        <TitleSection title={titleSearch} />
                    </div>
                )
            }

            <div className="flex flex-wrap gap-20 px-3 courses__results__cards">
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
