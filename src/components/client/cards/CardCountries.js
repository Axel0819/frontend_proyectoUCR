import classNames from 'classnames'
import { imgContrySvg } from '../../../helpers/appImages'

export function CardCountries({isHeader=false}) {

    const classImg = classNames({
        'img-small': isHeader 
    })
    
    return (
        <div className="flex gap-50 container__country px-3">
            {
                imgContrySvg.keys().map((pais, i) => (
                    <img
                        key={pais + i}
                        className={classImg}
                        src={imgContrySvg(pais)}
                        alt="Imagen de país"
                    />
                ))
            }
        </div>
    )
}