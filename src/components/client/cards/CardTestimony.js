import classNames from 'classnames'
import photo from '../../../assets/testimonials/perfilPhoto.png'
import React from 'react'

export function CardTestimony({item}) {
    return (
        <div className="card__testimony">
            <div className="card__testimony__img flex justify-content-center">
                <img src={photo} alt="Imagen de prueba" />
            </div>

            <div className="card__testimony__title">
                <p className="text-font-abel">Hillary Sofía Arroyo Leitón</p>
                <small className="text-font-open-sans">Cadete del CECAMM-UCR</small>
            </div>

            <p className="card__testimony__description text-font-open-sans">
                <i className="fa-solid fa-quote-left mr-2"></i>
                En mi experiencia como parte de la futura marina mercante costarricense, es gratificante poder obtener los cursos OMI en nuestro país bajo un estándar de alta calidad, debido a que en dichos se aprovecha satisfactoriamente el tiempo y se cumplen los objetivos necesarios para ser desarrollados a bordo de forma eficaz
                <i class="fa-solid fa-quote-right ml-2"></i>
            </p>
        </div>
    )
}
