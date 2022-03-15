import classNames from "classnames"

export const ItemCarousel = ({children, fullHeight, fullWidth}) => {

    const classItem = classNames('embla__slide', {
        'embla__slide__fullHeight': fullHeight,
        'embla__slide__fullWidth': fullWidth,
    })

    return (
        <div className={classNames(classItem)}>
            {children}
        </div>
    )
}