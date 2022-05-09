import { useState } from 'react'

//Actualmente este elemento no se esta utilizando
export function useActiveElement() {
    const [active, setActive] = useState(false)

    const handleFocus = () => {
        setActive(true)
    }

    const handleBlur = () => {
        setActive(false)
    }

    return {
        active,
        handleFocus,
        handleBlur
    }
}