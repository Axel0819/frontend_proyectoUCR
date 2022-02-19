import ContentLoader from 'react-content-loader'

//El tema de los loader queda de ultimo
export const LoaderNavbar = (props) => {
    const width = window.innerWidth
    const height = 115
    return (
        <ContentLoader
            speed={1}
            width={ width }
            height={ height }
            viewBox={`0 0 ${width} ${height}`}
            backgroundColor="#f6f6ef"
            foregroundColor="#e8e8e3"
            {...props}
        >
            <path d="M 80 20 h 131 v 75 H 80 V 20 z" /> 
            <path d="M 523 46 h 473 v 23 H 523 z" />
        </ContentLoader>
    )
}