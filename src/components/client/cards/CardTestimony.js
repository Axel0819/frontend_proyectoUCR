import { imgTestimonials } from "../../../helpers/appImages"

export function CardTestimony({name, img, description, subtitleCard}) {
    return (
        <div className="card__testimony">
            <div className="card__testimony__img flex justify-content-center">
                <img src={imgTestimonials(img)} alt="Imagen de prueba" />
            </div>

            <div className="card__testimony__title w-full">
                <p className="text-font-abel">{name}</p>
                <small className="text-font-open-sans">{subtitleCard}</small>
            </div>

            <p className="card__testimony__description text-font-open-sans">
                <i className="fa-solid fa-quote-left mr-2"></i>
                {description}
                <i className="fa-solid fa-quote-right ml-2"></i>
            </p>
        </div>
    )
}
