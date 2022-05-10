import React from 'react'
import { useTranslation } from 'react-i18next'
import { dataHistory } from '../../../data/dataHistory'
import { appImages } from '../../../helpers/appImages'
import { Container } from '../layouts/Container'
import { ContainerResponsive } from '../layouts/ContainerResponsive'

export function SectionInfoHistory() {

    const { t } = useTranslation('aboutUs/sectionInfoHistory')
    
    return (
        <div className="sectionInfoHistory my-6">
            <Container>
                <h1 className="text-font-abel title__section__about px-3 mb-2">Nuestra Historia</h1>

                <ContainerResponsive reverse={false} heightAuto={true} isHistory={true}>
                    <div className="col px-3 py-3 flex align-items-center"> 
                        <p className="text-font-open-sans description__section__about text-justify">{t('infoHistory')}</p>
                    </div>

                    <div className="col px-3 py-3 flex align-items-center">
                        <img style={{borderRadius: 5}} width="100%" height="100%" src={appImages('./historyCecamm.jpeg')} alt="Edificio de UCR Sede del Caribe" />
                    </div>
                </ContainerResponsive>
            </Container>
        </div>
    )
}
