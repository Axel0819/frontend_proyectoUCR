import classNames from 'classnames';
import queryString from 'query-string'
import { useLocation } from "react-router-dom";
import useGetNumbersFilters from "../../../hooks/useGetNumbersFilters";
// import { useScrollReveal } from '../../../hooks/useScrollReveal';
import { CardCourse } from "../cards/CardCourse";
import { TitleSection } from "../home/TitleSection";


//NOTA: Al cargar el componente por primera vez se cargaran los cursos abiertos por defecto
export function ContainerCourses({ openFilter, heightToFilter }) {

    // useScrollReveal(['.container__courses__results'])
    const location = useLocation()

    const filters = queryString.parse(location.search)

    const { isEmpty } = useGetNumbersFilters()

    const titleSearch = !filters.q ? 'Cursos abiertos' : `Resultados para "${filters.q}"`

    const proof = classNames('container__courses__results', {
        'filterIsOpenMovil': openFilter && window.innerWidth <= 576
    })

    //TODO: Crear una alerta si no existe un resultado
    return (
        <div className={proof}>
            {
                (isEmpty || !!filters.q) && (
                    <div className="mb-4 containerCourses-title">
                        <TitleSection title={titleSearch} />
                    </div>
                )
            }

            {
                (!isEmpty && !filters.q) && (
                    <div className="mb-4 containerCourses-title">
                        <TitleSection title={'Filtros aplicados'} />
                    </div>
                )
            }

            <div style={{
                height: (openFilter && window.innerWidth <= 576) ? `${heightToFilter}px` : 'auto'
            }}
                className="flex flex-wrap justify-content-around courses__results__cards mx-3 my-4">
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
