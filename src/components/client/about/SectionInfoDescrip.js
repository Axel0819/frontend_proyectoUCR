import React from 'react'
import { useTranslation } from 'react-i18next'
import { descriptionInfoCecamm } from '../../../data/textLarge'
import { Container } from '../layouts/Container'

export function SectionInfoDescrip() {
    const { t } = useTranslation('aboutUs/sectionInfoDescrip')

    return (
        <div className="sectionInfoDescrip my-6">
            <Container>
                <div className="flex justify-content-center">
                    <div className="flex flex-column gap-20 text-center container__info container__info px-3">
                        <h1 className="text-font-abel title__section__about">CECAMM-UCR</h1>
                        <p className="container__subtitle text-font-open-sans">
                            { t('subtitle') }
                        </p>
                        <p className="description__section__about text-font-open-sans">
                            { t('infoDescrip') }
                        </p>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default SectionInfoDescrip