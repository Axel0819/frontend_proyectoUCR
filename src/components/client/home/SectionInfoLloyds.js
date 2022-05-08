import { Container } from '../layouts/Container'
import { ContainerResponsive } from '../layouts/ContainerResponsive'
import { TitleSection } from './TitleSection'

import { appImages } from '../../../helpers/appImages'
import { AccordionApp } from '../ui/AccordionApp'
import { descriptionLloydR } from '../../../data/textLarge'
// import { useTranslation } from 'react-i18next'

export function SectionInfoLloyds() {
    // const { t } = useTranslation('home/sectionInfoLloyds')
    
    return (
        <div className="sectionInfoLloyds my-8">
            <Container>
                <ContainerResponsive reverse={false} heightAuto={true}>
                    <div className="xl:col-7 lg:col-7 md:col-12 sm:col-12 flex justify-content-center align-items-center container__logo">
                        <div className="px-3">
                            <img src={appImages('./lr_logo.svg')} alt="Logo Register" />
                        </div>
                    </div>
                    <div className="xl:col-5 lg:col-5 md:col-12 sm:col-12 flex flex-column justify-content-center gap-50">
                        <TitleSection title={'Acreditación emitida por Lloyd’s Register'} />

                        <p className="text-font-open-sans spacing text-color-description px-3 text-justify">
                            Como parte medular más significativa de una acreditación para el Sistema de Gestión de la Calidad en la carrera de Marina Mercante para la UCR, es el poseer una certificación internacional de calidad emitida por Lloyd´s Register of Shipping, que en efecto es la primera sociedad de clasificación del mundo, establecida en 1760.
                        </p>

                        <AccordionApp
                            title={'Más información sobre Lloyd’s Register'}
                            description={descriptionLloydR}
                            isBlack={true}
                        />
                    </div>
                </ContainerResponsive>
            </Container>
        </div>
    )
}
