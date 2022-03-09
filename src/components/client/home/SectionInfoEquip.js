import classNames from 'classnames'
import { useEffect, useRef, useState } from 'react'
import { descriptionEquip } from '../../../data/textLarge'
import { Container } from '../layouts/Container'
import { ContainerResponsive } from '../layouts/ContainerResponsive'
import { AccordionApp } from '../ui/AccordionApp'
import { Carousel } from '../ui/Carousel'
import { ItemCarousel } from '../ui/ItemCarousel'

export function SectionInfoEquip() {
    const [controllerDescrip, setControllerDescrip] = useState(false)
    const containerRef = useRef()

    const handleScroll = () => {
        const position = containerRef.current.offsetTop
        const sizeHeight = containerRef.current.offsetHeight
        const setColor = window.scrollY > (position - sizeHeight / 3)
        document.body.classList.toggle('set-color', setColor)

        if(window.scrollY > (position + sizeHeight/2)) document.body.classList.remove('set-color', )
        setControllerDescrip(setColor)
    }

    const classNameDesp = classNames('text-font-abel', 'descriptionTextSectionEquip', 'px-3', {
        'showInfoText': controllerDescrip
    })

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
            document.body.classList.remove('set-color')
        }
    }, [])

    return (
        <div ref={containerRef}>
            <Container>
                <ContainerResponsive reverse={false} heightAuto={true}>
                    <div className="xl:col-6 lg:col-6 md:col-12 sm:col-12 flex flex-column justify-content-center gap-50">
                        <p className={classNameDesp}>
                            Para el desarrollo de nuestras actividades académicas, contamos con un equipo de talento humano calificado, dotado de los recursos materiales necesarios más idóneos y actualizados para hacer llegar el conocimiento de manera exitosa.
                        </p>
                        <AccordionApp
                            title={'Más información'}
                            description={descriptionEquip}
                            isBlack={false}
                            colorText={"#FFF"}
                        />
                    </div>

                    <div className="xl:col-6 lg:col-6 md:col-12 sm:col-12 flex flex-column justify-content-center align-items-center px-3">
                        <Carousel options={{
                            loop: true,
                            containScroll: "keepSnaps",
                            align: 'start'
                        }} play={true} proof={controllerDescrip}>
                            {

                                [1, 2, 3].map(item => (
                                    <ItemCarousel key={item} fullHeight={true}>
                                        <img style={{
                                            objectFit: 'cover'
                                        }} width="100%" height="100%" src={`https://picsum.photos/76${item}/700`} alt="imagen de prueba 9s" />
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
