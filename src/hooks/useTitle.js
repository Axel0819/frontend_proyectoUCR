import { useEffect, useRef } from 'react'

export const useTitle = ({ title }) => {
    //Recupera el title previo
    const prevTitle = useRef(document.title)

    useEffect(() => {
        const previusTitle = prevTitle.current

        document.title = `${title} | CECAMM-UCR`

        return () => document.title = previusTitle
    }, [title])
}
