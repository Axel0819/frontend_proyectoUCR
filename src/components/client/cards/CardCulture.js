import React from 'react'

//TODO: ARREGLAR TAMAÑO DE CARTA (HEIGTH)
export function CardCulture({ title, icon, description }) {
    return (
        <div className="card__culture flex flex-column gap-20">
            <h1 className="text-font-abel text-center">{title}</h1>

            <div className="container__icon flex justify-content-center">
                <i className={icon}></i>
            </div>

            <div className="flex align-items-center h-full text-justify">
                {
                    (typeof description === 'string') ? 
                        <p className="text-font-open-sans card__description">{description}</p>
                     : 
                     (
                        <ul>
                            {
                                description.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))
                            }
                        </ul>
                     )
                }

            </div>
        </div>
    )
}