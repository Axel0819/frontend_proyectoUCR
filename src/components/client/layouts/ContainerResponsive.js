import classNames from 'classnames'

export const ContainerResponsive = ({children, reverse, heightAuto=false}) => {
    // es necesario que se renderice?
    // const classContainer = classNames('grid', 'grid-nogutter',{
    //     'flex-column-reverse': window.innerWidth <= 576
    // })
    const classContainer = classNames('grid', 'grid-nogutter', 'container__responsive', 'justify-content-center',{
        'container__responsive__reverse': reverse,
        'height__auto': heightAuto
    })

    return (
        <div className={classContainer}>
            {children}
        </div>
    )
}
