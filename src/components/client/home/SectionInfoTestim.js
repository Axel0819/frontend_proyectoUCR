import React from 'react'
import { CardTestimony } from '../cards/CardTestimony'
import { Container } from '../layouts/Container'
import { Carousel } from '../ui/Carousel'
import { ItemCarousel } from '../ui/ItemCarousel'
import { TitleSection } from './TitleSection'
import { testimomials as testimomialsData } from '../../../data/testimonials'

export function SectionInfoTestim() {
    return (
        <Container>
            <TitleSection title={'Testimonios'} />

            <div className="px-3 my-4">

                {
                    window.innerWidth < 1280 ? (
                        <Carousel options={{
                            loop: true,
                            align: 'center'
                        }}>
                            {
                                testimomialsData.map(data => (
                                    <ItemCarousel key={data.img} fullHeight={false}>
                                        <CardTestimony {...data}/>
                                    </ItemCarousel>
                                ))
                            }
                        </Carousel>
                    ) : (
                        <div className="grid">
                            {
                                testimomialsData.map(data => (
                                    <div key={data.img} className="col-4">
                                        <CardTestimony {...data}/>
                                    </div>
                                ))
                            }
                        </div>
                    )

                }

            </div>

        </Container>
    )
}
