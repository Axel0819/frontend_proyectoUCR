import { ContainerResponsive } from '../layouts/ContainerResponsive'
import { Carousel } from '../ui/Carousel'
import { ItemCarousel } from '../ui/ItemCarousel'

export function SectionInfoLearn({ listLearn = [] }) {

    return (
        <div className="sectionInfoLearn my-7">

            <ContainerResponsive heightAuto={true}>
                <div  className="xl:col-6 lg:col-6 md:col-12 sm:col-12 learn__container__list">
                    <div className="learn__list__title">
                        <p className="text-font-abel">Al finalizar el curso estarás en la capacidad de:</p>
                    </div>

                    <div className="xl:p-6 lg:p-6 pd:p-6 sm:p-6 learn__list__body">
                        <ul className="text-justify">
                            {
                                listLearn.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))
                            }
                        </ul>
                    </div>
                </div>

                <div className="xl:col-6 lg:col-6 md:col-12 sm:col-12 xl:px-6 lg:px-6 pd:px-6 sm:px-6 ">
                    <div className="learn__container__imgs flex align-items-center justify-content-center">
                        <Carousel options={{
                            loop: true,
                            align: 'start'
                        }}>
                            { // Se mapea el array de imagenes que tiene un curso
                                [1, 2, 3].map((photo) => (
                                    <ItemCarousel key={photo} fullHeight={false} fullWidth={true}>
                                        <img src={`https://picsum.photos/192${photo}/822`} alt="Imagen de prueba" />
                                    </ItemCarousel>
                                ))
                            }
                        </Carousel>
                    </div>
                </div>
            </ContainerResponsive>
        </div>
    )
}
