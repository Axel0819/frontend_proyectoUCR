import ScrollReveal from 'scrollreveal'
import { useEffect } from 'react';

export function useScrollReveal(elementsReveal, reset=true) {

    useEffect(() => {
        elementsReveal.forEach(e => {
          ScrollReveal().reveal(e, {delay: 500, reset})
        })

        if(reset) ScrollReveal().reveal('.divider', {delay: 250, reset})

        return () => {
          ScrollReveal().destroy();
        }
      }, [elementsReveal, reset])
}