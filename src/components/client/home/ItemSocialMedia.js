import classNames from 'classnames'
export const ItemSocialMedia = ({name, link}) => {

    // el manejo de los iconos puede fallar debido al nombre de la clase de la etiqueta <i>
    // Solo se programo para estos iconos mientras tanto
    const classI = classNames('fa-brands', {
        'fa-facebook-f': name === 'facebook',
        [`fa-${name}`]: name !== 'facebook'
    })
    return (
        <a rel="noreferrer" href={link} target="_blank">
                <div className={`social__media__icon icon-color-${name}`}>
                        <i className={classI}></i>
                </div>
        </a>
    )
}