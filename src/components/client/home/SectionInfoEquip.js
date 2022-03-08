import React from 'react'
import { descriptionEquip } from '../../../data/textLarge'
import { Container } from '../layouts/Container'
import { ContainerResponsive } from '../layouts/ContainerResponsive'
import { AccordionApp } from '../ui/AccordionApp'
import { Carousel } from '../ui/Carousel'
import { ItemCarousel } from '../ui/ItemCarousel'
import { CardCourse } from '../cards/CardCourse'

export function SectionInfoEquip() {
    return (
        <div style={{
            backgroundColor: '#494949'
        }} className="py-3">
        <Container>
            <ContainerResponsive reverse={false} heightAuto={true}>
            <div className="xl:col-6 lg:col-6 md:col-12 sm:col-12 flex flex-column justify-content-center gap-50">
                    <p className="text-font-abel descriptionTextSectionEquip px-3">
                        Para el desarrollo de nuestras actividades académicas, contamos con un equipo de talento humano calificado, dotado de los recursos materiales necesarios más idóneos y actualizados para hacer llegar el conocimiento de manera exitosa. 
                    </p>
                    <AccordionApp 
                        title={'Más información'} 
                        description={descriptionEquip}
                        isBlack={false}
                        colorText={"#FFF"}
                    />
            </div>

            <div className="xl:col-6 lg:col-6 md:col-12 sm:col-12 flex flex-column justify-content-center align-items-center">
                <Carousel options={{
                            loop: true,
                            containScroll: "keepSnaps",
                            align: 'start'
                        }} play={true}>
                    {
                        
                        [1, 2, 3, 4, 5, 6, 7].map(item => (
                            <ItemCarousel key={item} fullHeight={true}>
                                {/* <CardCourse />
                                <div style={{
                                    backgroundColor: 'gray',
                                    width: "100%",
                                    height: "100%"
                                }}>
                                    {item}
                                </div> */}
                                <img style={{
                                    objectFit: 'cover'
                                }} width="100%" height="100%" src={`https://picsum.photos/192${item}/822`} alt="imagen de prueba" />
                            </ItemCarousel> 
                        ))
                    }
                </Carousel>
            </div>
            </ContainerResponsive>
        </Container>
        </div>
    )
}
