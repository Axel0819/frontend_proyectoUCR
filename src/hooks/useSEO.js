import { useEffect, useRef } from 'react'

export const useSEO = ({ description, title }) => {
    //el title de las paginas se deben de traducir
    //Recupera el title previo
    const prevTitle = useRef(document.title)
    const prevDescription = useRef(document.querySelector('meta[name="description"]').getAttribute('content'))
    
    useEffect(() => {
        const previousTitle = prevTitle.current

        if(title){ // si existe el title
            document.title = title === 'Home' ? `CECAMM-UCR | ${title}` : `${title} | CECAMM-UCR`   
        }

        return () => document.title = previousTitle
    }, [title])

    useEffect(() => {
        const metaDescription = document.querySelector('meta[name="description"]')
        const previousDescription = prevDescription.current

      if(description){
        metaDescription.setAttribute('content', description)
      }
    
      return () => metaDescription.setAttribute('content', previousDescription)
    }, [description])
    
}
