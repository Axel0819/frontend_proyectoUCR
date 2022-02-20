import classNames from "classnames"


// Esta lista debe de estar en otro archivo
const socialMedia = [
    {
        name: 'facebook',
        link: 'https://www.youtube.com/c/midudev'
    },
    {
        name: 'instagram',
        link: 'https://www.youtube.com/c/midudev'
    },
    {
        name: 'youtube',
        link: 'https://www.youtube.com/c/midudev'
    },
    {
        name: 'whatsapp',
        link: 'https://www.youtube.com/c/midudev'
    }
]

// Este item debe de estar en otro archivo
const ItemSocial = ({name, link}) => {

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

export const SocialMedia = ({isLeft}) => {

    const classSocialMedia = classNames(
        'social__media',
        {
        'social__media__left': isLeft,
        'social__media__right': !isLeft
    })

    return(
        <div className={ classSocialMedia }>

            {
                socialMedia.map( ({name, link}) => (
                    <ItemSocial key={Math.random().toString(36).slice(2)} name={name} link={link}/>
                ))
            }

        </div>
    )
}