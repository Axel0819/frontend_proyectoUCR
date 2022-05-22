import React, { useLayoutEffect, useRef } from 'react'
// import { dataCulture } from '../../../data/dataCulture'
import { CardCulture } from '../cards/CardCulture'
import { Container } from '../layouts/Container'
import { Carousel } from '../ui/Carousel'
import { ItemCarousel } from '../ui/ItemCarousel'

export function SectionInfoCulture({ dataCulture, t }) {
    const cardRef = useRef([])

    useLayoutEffect(() => {
        const element = cardRef.current.map(e => e.clientHeight)
        const maxHeight = Math.max(...element)

        cardRef.current.forEach(e => {
            e.style.height = `${maxHeight}px`
        })
    }, [dataCulture])

    return (
        <div className="sectionInfoCulture my-6">
            <Container>
                <div className="flex flex-column gap-20">
                    <h1 className="text-font-abel text-center title__section__about">{t('title')}</h1>

                    {
                        window.innerWidth < 1280 ? (
                            <Carousel options={{
                                loop: true,
                                align: 'center'
                            }} stopOnMouseEnter={true}>
                                {
                                    dataCulture.map((data, i) => (
                                        <ItemCarousel key={data.title + i} fullHeight={false}>
                                            <div ref={el => cardRef.current[i] = el}>
                                                <CardCulture {...data} />
                                            </div>
                                        </ItemCarousel>
                                    ))
                                }
                            </Carousel>
                        ) : (
                            <div className="grid px-3">
                                {
                                    dataCulture.map((data, i) => (
                                        <div key={data.title + i} className="col-4">
                                            <div ref={el => cardRef.current[i] = el}>
                                                <CardCulture {...data} />
                                            </div>
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
