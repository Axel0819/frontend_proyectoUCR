import { Container } from "../layouts/Container";
import { ContainerResponsive } from "../layouts/ContainerResponsive";

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
                    <div className="flex flex-column gap-60">
                        <h1>Title</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas voluptates laboriosam perferendis eius dolorum eveniet, veniam, odit debitis ex impedit aliquam minus possimus, obcaecati voluptatum porro corporis at dolore exercitationem.</p>
                        <div>
                            <a rel="noreferrer" href="https://facebook.com" target="_blank">Dowload</a>
                        </div>
                    </div>
                </div>
                <div className="xl:col-6 lg:col-6 md:col-12 sm:col-12 pt-7 section__info__buy">
                    div 2
                </div>
            </ContainerResponsive>
            </Container>
        </div>
    )
}
