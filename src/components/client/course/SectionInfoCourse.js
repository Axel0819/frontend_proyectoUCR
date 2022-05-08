import { Container } from "../layouts/Container";
import { ContainerResponsive } from "../layouts/ContainerResponsive";
import { TableApp } from "../prices/TableApp";

export function SectionInfoCourse({
    name,
    omi,
    description,
    price,
    dateInit,
    dateFinally,
    hours,
    fileUrl
}) {
    return (
        <div className="container__section__info">
            <Container>
                <ContainerResponsive heightAuto={true} reverse={true} gap={true}>
                    <div className="xl:col-6 lg:col-6 md:col-12 sm:col-12 py-7 section__info__description">
                        <div className="flex flex-column gap-50">
                            <h1 className="text-font-abel section__info__title">{name} - Curso Modelo OMI {omi}</h1>
                            <p className="text-font-open-sans text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas voluptates laboriosam perferendis eius dolorum eveniet, veniam, odit debitis ex impedit aliquam minus possimus, obcaecati voluptatum porro corporis at dolore exercitationem.</p>
                            <div>
                                <a rel="noreferrer" href="https://facebook.com" target="_blank">
                                    <div className="flex align-items-center">
                                        <i className="fa-solid fa-file-pdf"></i>
                                        <p>Descargar programa del curso</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="xl:col-6 lg:col-6 md:col-12 sm:col-12 pt-7 section__info__buy flex flex-column justify-content-between">
                        <div className="flex flex-column gap-20">
                            {/* <div className="flex justify-content-between buy__header">
                                <h1 className="text-font-abel section__info__title">Precio de matrícula: {price} CRC</h1>
                                <span className="text-font-abel state__course state__course__open">Abierto</span>
                            </div> */}
                            <div>
                                <div className="flex justify-content-end mb-3">
                                    <span className="text-font-abel state__course state__course__open">Abierto</span>
                                </div>
                                <TableApp titleHead="Precios" columns={['Nacionales', 'Extranjeros']} rows={['$250.00', '$300.00']} isPriceCourse={true} />
                            </div>

                            <div className="flex flex-column gap-20 buy__details">
                                <div className="details__item flex align-items-center gap-10">
                                    <i className="fa-solid fa-calendar-day"></i>
                                    <p>Fecha: {dateInit}</p>
                                </div>
                                <div className="details__item align-items-center flex gap-10">
                                    <i className="fa-solid fa-stopwatch"></i>
                                    <p>Horas totales: {hours}   h</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-content-between align-items-end buy__action">
                            <small className="text-font-abel">*Los cupos del curso son limitados*</small>
                            <button 
                                className="btn btn-primary btn-font-size-24 text-font-abel"
                                onClick={() => alert('Se procede a comprar el curso')}
                            >Matricular</button>
                        </div>
                    </div>
                </ContainerResponsive>
            </Container>
        </div>
    )
}
