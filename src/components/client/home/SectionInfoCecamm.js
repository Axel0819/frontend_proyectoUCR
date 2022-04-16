import { Container } from '../layouts/Container'
import { ContainerResponsive } from '../layouts/ContainerResponsive'

import logoBlack from '../../../assets/images/logoBlack.png'
import { TitleSection } from './TitleSection'

import { CardCountries } from '../cards/CardCountries'

export const SectionInfoCecamm = () => {
    return (
        <div className='sectionInfoCecamm load-hidden'>
            <Container>
                <ContainerResponsive reverse={true}>
                    <div className="xl:col-6 lg:col-6 md:col-12 sm:col-12 col__item flex flex-column justify-content-center gap-50">
                        <TitleSection title={'Centro de Capacitación de Marina Mercante de la Universidad de Costa Rica'} />
                        <CardCountries />

                        <p className="text-font-open-sans spacing text-color-description px-3 text-justify">
                            Como parte de una iniciativa para cubrir las necesidades de capacitación en el ambito de la marina mercante se crea el CECAMM, como un centro de formación que se proyecta para ocupar oportunamente el rol de formación.
                        </p>

                    </div>
                    <div className="xl:col-6 lg:col-6 md:col-12 sm:col-12 col__item flex justify-content-center align-items-center container__logo">
                        <div className="px-3">
                            <img src={logoBlack} alt="Logo CECAMM" />
                        </div>
                    </div>
                </ContainerResponsive>
            </Container>
        </div>
    )
}