import { useRef } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

export const Carousel = ({children, options={ loop: true }}) => {
  const autoplay = useRef(
      Autoplay(
          {delay: 3000, stopOnInteraction: false},
          (emblaRoot) => emblaRoot.parentElement
      )
  )

  const [emblaRef] = useEmblaCarousel(options,
    [autoplay.current])

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {children}
      </div>
    </div>
  )
}