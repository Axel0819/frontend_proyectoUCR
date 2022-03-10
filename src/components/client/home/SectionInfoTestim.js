import React from 'react'
import { CardTestimony } from '../cards/CardTestimony'
import { Container } from '../layouts/Container'
import { TitleSection } from './TitleSection'

export function SectionInfoTestim() {
    return (
        <Container>
            <TitleSection title={'Testimonios'} />

            <div className="grid px-3 mt-4">
                {
                    [1, 2, 3].map(item => (
                        <div key={item} className="col-4">
                            <CardTestimony item={item} />
                        </div>
                    ))
                }
            </div>

        </Container>
    )
}
