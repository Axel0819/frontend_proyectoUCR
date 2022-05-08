import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

export const useSetLenguage = () => {
    const [controller, setController] = useState(false)
    const { i18n } =  useTranslation()

    useEffect(() => {
            setController(false)
    }, [i18n.language])

    useEffect(() => {
        controller === false && setController(true)
    }, [controller])

    return { controller }
    
}