import ScrollReveal from 'scrollreveal'
import { useEffect } from 'react';

export function useScrollReveal(elementsReveal, reset=true, delay=500) {

    useEffect(() => {
        elementsReveal.forEach(e => {
          ScrollReveal().reveal(e, {delay, reset})
        })

        if(reset) ScrollReveal().reveal('.divider', {delay: 250, reset})

        return () => {
          ScrollReveal().destroy()
        }
      }, [elementsReveal, reset, delay])
}