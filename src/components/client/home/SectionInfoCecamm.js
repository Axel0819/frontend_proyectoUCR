import { Container } from '../layouts/Container'
import { ContainerResponsive } from '../layouts/ContainerResponsive'

import logoBlack from '../../../assets/images/logoBlack.png'
import { TitleSection } from './TitleSection'

import { imgContrySvg } from '../../../helpers/appImages'
import { CardCountries } from '../cards/CardCountries'

export const SectionInfoCecamm = () => {
    return (
        <Container>
            <ContainerResponsive reverse={true}>
                <div className="xl:col-5 lg:col-5 md:col-12 sm:col-12 col__item flex flex-column justify-content-center gap-50">
                    <TitleSection title={'Centro de Capacitación de Marina Mercante de la Universidad de Costa Rica'} />
                    <CardCountries />

                    <p className="text-font-open-sans spacing text-color-description px-3">
                        Como parte de una iniciativa para cubrir las necesidades de capacitación en el ambito de la marina mercante se crea el CECAMM, como un centro de formación que se proyecta para ocupar oportunamente el rol de formación.
                    </p>

                </div>
                <div className="xl:col-7 lg:col-7 md:col-12 sm:col-12 col__item flex justify-content-center align-items-center container__logo">
                    <div className="px-3">
                        <img src={logoBlack} alt="Logo CECAMM" />
                    </div>
                </div>
            </ContainerResponsive>
      </Container>
    )
}