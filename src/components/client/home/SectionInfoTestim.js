import { useSetLenguage } from '../../../hooks/useSetLenguage'
import { useTestimonials } from '../../../hooks/useTestimonials'
import { CardTestimony } from '../cards/CardTestimony'
import { Container } from '../layouts/Container'
import { Carousel } from '../ui/Carousel'
import { ItemCarousel } from '../ui/ItemCarousel'
import { TitleSection } from './TitleSection'
// import { testimomials } from '../../../data/testimonials'

//{ titleSection, subtitleCard, comments }
export function SectionInfoTestim() {
    const { testimonials, cadet, title } = useTestimonials()

    const { controller } = useSetLenguage()

    console.log(controller);

    // const CarouselMemo = useMemo(() => <Carousel options={{
    //     loop: true,
    //     align: 'center'
    // }} stopOnMouseEnter={true}>
    //     {
    //         testimonials.map(data => (
    //             <ItemCarousel key={data.img} fullHeight={false}>
    //                 <CardTestimony subtitleCard={cadet} {...data} />
    //             </ItemCarousel>
    //         ))
    //     }
    // </Carousel>, [cadet, testimonials])

    

    return (
        <div className="sectionInfoTestim">
            <Container>
                <TitleSection title={title} />

                <div className="px-3 my-4">

                    {
                        window.innerWidth < 1280 ? (
                            <Carousel options={{
                                loop: true,
                                align: 'center'
                            }} reload={controller} stopOnMouseEnter={true}>
                                {
                                    testimonials.map(data => (
                                        <ItemCarousel key={data.img} fullHeight={false}>
                                            <CardTestimony subtitleCard={cadet} {...data} />
                                        </ItemCarousel>
                                    ))
                                }
                            </Carousel>
                        ) : (
                            <div className="grid">
                                {
                                    testimonials.map(data => (
                                        <div key={data.img} className="col-4">
                                            <CardTestimony subtitleCard={cadet} {...data} />
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