import classNames from 'classnames'
import { imgContrySvgW, imgContrySvg } from '../../../helpers/appImages'

export function CardCountries({isHeader=false}) {

    const classImg = classNames({
        'img-small': isHeader 
    })

    const countrys = isHeader ? imgContrySvgW : imgContrySvg
    
    return (
        <div className="flex gap-50 container__country px-3">
            {
                countrys.keys().map((pais, i) => (
                    <img
                        key={pais + i}
                        className={classImg}
                        src={countrys(pais)}
                        alt="Imagen de país"
                    />
                ))
            }
        </div>
    )
}