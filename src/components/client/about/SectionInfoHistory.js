import React from 'react'
import { dataHistory } from '../../../data/dataHistory'
import { Container } from '../layouts/Container'
import { ContainerResponsive } from '../layouts/ContainerResponsive'

export function SectionInfoHistory() {
    return (
        <div className="my-6">
            <Container>
                <h1 className="text-font-abel title__section__about px-3 mb-4">Nuestra Historia</h1>

                <ContainerResponsive reverse={false} heightAuto={true}>
                    <div className="xl:col-6 lg:col-12 md:col-12 sm:col-12 px-3 py-3 flex align-items-center"> 
                        <p className="text-font-open-sans description__section__about">{dataHistory}</p>
                    </div>

                    <div className="xl:col-6 lg:col-12 md:col-12 sm:col-12 px-3 py-3 flex align-items-center">
                        <img style={{borderRadius: 5}} width="100%" src="https://picsum.photos/860/500" alt="Imagen de prueba" />
                    </div>
                </ContainerResponsive>
            </Container>
        </div>
    )
}
