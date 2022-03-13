import React from 'react'
import { descriptionInfoCecamm } from '../../../data/textLarge'
import { Container } from '../layouts/Container'

export function SectionInfoDescrip() {
    return (
        <div className="my-6">
            <Container>
                <div className="flex justify-content-center">
                    <div className="flex flex-column gap-20 text-center container__info container__info px-3">
                        <h1 className="text-font-abel title__section__about">CECAMM-UCR</h1>
                        <p className="container__subtitle text-font-open-sans">Comprometidos con la Capacitación del Talento Humano para la Marina Mercante</p>
                        <p className="description__section__about text-font-open-sans">{descriptionInfoCecamm}</p>
                    </div>
                </div>
            </Container>
        </div>
    )
}
