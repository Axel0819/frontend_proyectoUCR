import React from 'react'
import { CardTestimony } from '../cards/CardTestimony'
import { Container } from '../layouts/Container'
import { Carousel } from '../ui/Carousel'
import { ItemCarousel } from '../ui/ItemCarousel'
import { TitleSection } from './TitleSection'

export function SectionInfoTestim({titleSection, subtitleCard, comments}) {
    return (
        <Container>
            <TitleSection title={titleSection} />

            <div className="px-3 my-4">

                {
                    window.innerWidth < 1280 ? (
                        <Carousel options={{
                            loop: true,
                            align: 'center'
                        }}>
                            {
                                comments.map(data => (
                                    <ItemCarousel key={data.img} fullHeight={false}>
                                        <CardTestimony subtitleCard={subtitleCard} {...data}/>
                                    </ItemCarousel>
                                ))
                            }
                        </Carousel>
                    ) : (
                        <div className="grid">
                            {
                                comments.map(data => (
                                    <div key={data.img} className="col-4">
                                        <CardTestimony subtitleCard={subtitleCard} {...data}/>
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
