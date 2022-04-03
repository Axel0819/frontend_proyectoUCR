import classNames from 'classnames' 
export const Container = ({children, fullHeight=false}) => {
    const containerClass = classNames('xl:mx-6', 'lg:mx-6', 'md:mx-6', 'sm:mx-6', {
        'h-full': fullHeight
    })
    return(
        <div className={containerClass}>
            {children}
        </div>
    )
}