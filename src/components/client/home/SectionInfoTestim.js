import { lazy, Suspense } from 'react'
import { useSetLenguage } from '../../../hooks/useSetLenguage'
import { CardTestimony } from '../cards/CardTestimony'
import { Container } from '../layouts/Container'
import { ItemCarousel } from '../ui/ItemCarousel'
import { TitleSection } from './TitleSection'

const Carousel = lazy(() => import('../ui/Carousel'))

export function SectionInfoTestim({ titleSection, subtitleCard, comments }) {

    const { controller } = useSetLenguage()

    return (
        <div className="sectionInfoTestim">
            <Container>
                <TitleSection title={titleSection} />

                <div className="px-3 my-4">

                    {
                        window.innerWidth < 1280 ? (
                            <Suspense fallback={<span>Cargando comentarios...</span>}>
                                <Carousel options={{
                                    loop: true,
                                    align: 'center'
                                }} reload={controller} stopOnMouseEnter={true}>
                                    {
                                        comments.map(data => (
                                            <ItemCarousel key={data.img} fullHeight={false}>
                                                <CardTestimony subtitleCard={subtitleCard} {...data} />
                                            </ItemCarousel>
                                        ))
                                    }
                                </Carousel>
                            </Suspense>

                        ) : (
                            <div className="grid">
                                {
                                    comments.map(data => (
                                        <div key={data.img} className="col-4">
                                            <CardTestimony subtitleCard={subtitleCard} {...data} />
                                        </div>
                                    ))
                                }
                            </div>
                        )

                    }

                </div>

            </Container>
        </div>
    )
}


export default SectionInfoTestim