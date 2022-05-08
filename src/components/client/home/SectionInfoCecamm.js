import { Container } from '../layouts/Container'
import { ContainerResponsive } from '../layouts/ContainerResponsive'

import logoBlack from '../../../assets/images/logoBlack.png'
import { TitleSection } from './TitleSection'

import { CardCountries } from '../cards/CardCountries'
import { useTranslation } from 'react-i18next'

export const SectionInfoCecamm = () => {
    const { t } = useTranslation('home/sectionInfoCecamm')

    return (
        <div className="sectionInfoCecamm">
            <Container>
                <ContainerResponsive reverse={true}>
                    <div className="xl:col-6 lg:col-6 md:col-12 sm:col-12 col__item flex flex-column justify-content-center gap-50">
                        <TitleSection title={t('title')} />
                        <CardCountries />

                        <p className="text-font-open-sans spacing text-color-description px-3 text-justify">
                            { t('comeUp') }
                        </p>

                    </div>
                    <div className="xl:col-6 lg:col-6 md:col-12 sm:col-12 col__item flex justify-content-center align-items-center container__logo">
                        <div className="px-3">
                            <img src={logoBlack} alt="Logo CECAMM"/>
                        </div>
                    </div>
                </ContainerResponsive>
            </Container>
        </div>
    )
}