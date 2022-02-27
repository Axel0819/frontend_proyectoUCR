// import classNames from 'classnames'

export const ContainerResponsive = ({children}) => {
    // es necesario que se renderice?
    // const classContainer = classNames('grid', 'grid-nogutter',{
    //     'flex-column-reverse': window.innerWidth <= 576
    // })

    return (
        <div style={{
            height: '638px'
        }} className="grid grid-nogutter container__responsive justify-content-center">
            {children}
        </div>
    )
}
