import React from 'react'
import { CardCountries } from '../cards/CardCountries'
import { Container } from '../layouts/Container'

export function TitleSectionPage({title, isAbout=false}) {
    
    return (
        <div className="container__title flex flex-column justify-content-end pb-3">
            <Container>
                <div className="flex justify-content-between align-items-end container-items">
                    <p className="text-font-abel px-3">{title}</p>

                    {
                        isAbout && window.innerWidth > 799 && <CardCountries isHeader={true} />
                    }
                </div>
            </Container>
        </div>
    )
}