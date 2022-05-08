export const ImageHeader = ({url}) => {
    return(
        <>
            <div className="header__capa"></div>
            <img
                className="header__img"
                src={url} 
                alt="Imagen del CECAMM"
            />
        </>
    )
}

export default ImageHeader