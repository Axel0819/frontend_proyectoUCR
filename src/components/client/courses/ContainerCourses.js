import classNames from 'classnames';
import queryString from 'query-string'
import { useLocation } from "react-router-dom";
import useGetNumbersFilters from "../../../hooks/useGetNumbersFilters";
import { CardCourse } from "../cards/CardCourse";
import { TitleSection } from "../home/TitleSection";


//NOTA: Al cargar el componente por primera vez se cargaran los cursos abiertos por defecto
export function ContainerCourses({ openFilter, heightToFilter }) {
    const location = useLocation()

    const { q = '' } = queryString.parse(location.search)

    const { isEmpty } = useGetNumbersFilters()

    const titleSearch = !q ? 'Cursos abiertos' : `Resultados para "${q}"`

    const proof = classNames('container__courses__results', {
        'filterIsOpenMovil': openFilter && window.innerWidth <= 576
    })

    //TODO: Crear una alerta si no existe un resultado
    return (
        <div className={proof}>
            {
                (isEmpty || !!q) && (
                    <div className="mb-4">
                        <TitleSection title={titleSearch} />
                    </div>
                )
            }

            <div style={{
                height: (openFilter && window.innerWidth <= 576) ? `${heightToFilter}px` : 'auto' 
            }}
                className="flex flex-wrap justify-content-around courses__results__cards mx-3">
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
