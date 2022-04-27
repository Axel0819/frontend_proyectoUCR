import { useEffect, useRef } from 'react'

export const useSEO = ({ description, title }) => {
    //el title de las paginas se deben de traducir
    //Recupera el title previo
    const prevTitle = useRef(document.title)
    const prevDescription = useRef(document.querySelector('meta[name="description"]').getAttribute('content'))
    
    useEffect(() => {
        const previusTitle = prevTitle.current

        if(title === 'Home') {
            document.title = `CECAMM-UCR | ${title}`
        } else {
            document.title = `${title} | CECAMM-UCR`
        }


        return () => document.title = previusTitle
    }, [title])
}
