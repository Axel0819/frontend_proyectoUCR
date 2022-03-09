import { useEffect, useRef } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

export const Carousel = ({ children, options = { loop: true }, play = true, proof=true}) => {

  const autoplay = useRef(
    Autoplay(
      { delay: 3000, stopOnInteraction: false, playOnInit: play },
      (emblaRoot) => emblaRoot.parentElement
    )
  )

  const [emblaRef, embla] = useEmblaCarousel(options, [autoplay.current])

  useEffect(() => {
    embla && embla.reInit(options, [autoplay.current])
    
    return () => embla && embla.destroy()
  }, [embla, options])

  // useEffect(() => {
  //   embla && embla.reInit(options, [autoplay.current])
  // }, [embla, proof, options])
  

  return (
    <div className="embla" ref={proof ? emblaRef : null}>
      <div className="embla__container">
        {children}
      </div>
    </div>
  )
}