import classNames from 'classnames'
import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { descriptionEquip } from '../../../data/textLarge'
import { imgEquip } from '../../../helpers/appImages'
import { Container } from '../layouts/Container'
import { ContainerResponsive } from '../layouts/ContainerResponsive'
import { AccordionApp } from '../ui/AccordionApp'
import { Carousel } from '../ui/Carousel'
import { ItemCarousel } from '../ui/ItemCarousel'

export function SectionInfoEquip() {
    const { t } = useTranslation('home/sectionInfoEquip')
    const [controllerDescrip, setControllerDescrip] = useState(false)
    const containerRef = useRef()

    const handleScroll = () => {
        const position = containerRef.current.offsetTop
        const sizeHeight = containerRef.current.offsetHeight
        const setColor = window.scrollY > (position - sizeHeight / 1.5)
        document.body.classList.toggle('set-color', setColor)

        if (window.scrollY > (position + sizeHeight / 2)) document.body.classList.remove('set-color',)
        setControllerDescrip(setColor)
    }

    const classNameDesp = classNames('text-font-abel', 'descriptionTextSectionEquip', 'px-3', 'text-justify', {
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
        <div className="sectionInfoEquip py-4" ref={containerRef}>
            <Container>
                <ContainerResponsive reverse={false} heightAuto={true}>
                    <div className="xl:col-6 lg:col-6 md:col-12 sm:col-12 flex flex-column justify-content-center gap-50">
                        <p className={classNameDesp}>
                            { t('pgh1') }
                        </p>
                        <AccordionApp
                            title={t('subtitle')}
                            description={t('pgh2')}
                            isBlack={false}
                            colorText={"#FFF"}
                        />
                    </div>

                    <div className="xl:col-6 lg:col-6 md:col-12 sm:col-12 flex flex-column justify-content-center align-items-center px-3">
                        <Carousel options={{
                            loop: true,
                            containScroll: "keepSnaps",
                            align: 'start'
                        }} play={true} reload={controllerDescrip} stopOnMouseEnter={true}>
                            {

                                imgEquip.keys().map(path => (
                                    <ItemCarousel key={path} fullHeight={false} fullWidth={true}>
                                        <img style={{
                                            objectFit: 'contain',
                                            borderRadius: '5px'
                                        }} width="100%" height="100%" src={imgEquip(path)} alt="Equipo del CECAMM-UCR" />
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
