import React, { useRef } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

export const Carousel = () => {
    const autoplay = useRef(
        Autoplay(
            {delay: 3000, stopOnInteraction: false},
            (emblaRoot) => emblaRoot.parentElement
        )
    )
  const [emblaRef] = useEmblaCarousel({ loop: true },
    [autoplay.current])

  return (
    <div style={{ height: '100%' }} className="embla" ref={emblaRef}>
      <div style={{ height: '100%' }} className="embla__container">
        <div className="embla__slide">
        <img
                style={{
                    objectFit: 'cover',
                    width: '100%',
                    height: '100%'
                }}
                src="https://images.unsplash.com/flagged/photo-1554131297-39877b87bddf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                alt="Imagen de prueba 1" 
            />
        </div>
        <div className="embla__slide">
        <img
                style={{
                    objectFit: 'cover',
                    width: '100%',
                    height: '100%'
                }}
                src="https://images.unsplash.com/flagged/photo-1554131297-39877b87bddf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                alt="Imagen de prueba 1" 
            />
        </div>
      </div>
    </div>
  )
}

{/* <img
                style={{
                    objectFit: 'cover',
                    width: '100%',
                    height: '100%'
                }}
                src="https://images.unsplash.com/flagged/photo-1554131297-39877b87bddf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                alt="Imagen de prueba 1" 
            /> */}