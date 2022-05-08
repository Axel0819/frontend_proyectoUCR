import { useEffect, useRef } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

// proof se refiere a si el carousel esta listo para montarse
export const Carousel = ({ children, options = { loop: true }, play = true, reload=true, stopOnMouseEnter=false}) => {

  const autoplay = useRef(
    Autoplay(
      { delay: 3000, stopOnInteraction: false, playOnInit: play, stopOnMouseEnter},
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
    <div className="embla" ref={(reload) ? emblaRef : null}>
      <div className="embla__container">
        {children}
      </div>
    </div>
  )
}

export default Carousel