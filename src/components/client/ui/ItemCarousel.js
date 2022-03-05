import classNames from "classnames"

export const ItemCarousel = ({children, fullHeight}) => {

    const classItem = classNames('embla__slide', {
        'embla__slide__fullHeight': fullHeight,
    })

    return (
        <div className={classNames(classItem)}>
            {children}
        </div>
    )
}