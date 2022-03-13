import React from 'react'
import { dataCulture } from '../../../data/dataCulture'
import { CardCulture } from '../cards/CardCulture'
import { Container } from '../layouts/Container'
import { Carousel } from '../ui/Carousel'
import { ItemCarousel } from '../ui/ItemCarousel'

export function SectionInfoCulture() {
    return (
        <div className="my-6">
            <Container>
                <div className="flex flex-column gap-20">
                    <h1 className="text-font-abel text-center title__section__about">Nuestra Cultura</h1>

                    {
                        window.innerWidth < 1280 ? (
                            <Carousel options={{
                                loop: true,
                                align: 'center'
                            }}>
                                {
                                    dataCulture.map((data, i) => (
                                        <ItemCarousel key={data.title + i} fullHeight={false}>
                                            <CardCulture {...data} />
                                        </ItemCarousel>
                                    ))
                                }
                            </Carousel>
                        ) : (
                            <div className="grid px-3">
                                {
                                    dataCulture.map((data, i) => (
                                        <div key={data.title + i} className="col-4">
                                            <CardCulture {...data} />
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
