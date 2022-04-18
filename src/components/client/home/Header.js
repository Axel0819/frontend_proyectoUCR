import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import { Container } from '../layouts/Container';
import { Carousel } from '../ui/Carousel'
import { ItemCarousel } from '../ui/ItemCarousel';
import { ImageHeader } from './ImageHeader';
import { SocialMedia } from './SocialMedia';

export const Header = () => {

  useEffect(() => {
    ScrollReveal().reveal('.home__header__title', { scale: 0.85 })
  }, [])

  return (
    <header className="home__header mb-3">
      <div className="home__header__title load-hidden">
        <h6 className="text-font-abel"> CECAMM </h6>
        <p className="text-font-open-sans">
          Comprometidos con la Capacitación del Talento Humano para la Marina Mercante
        </p>
      </div>

      {
        // data.length > 0 && // El carousel se despliega solo si existe informacion
        <Carousel>
          {
            [1, 2, 3].map((photo) => (
              <ItemCarousel key={photo} fullHeight={true}>
                <ImageHeader url={`https://picsum.photos/192${photo}/822`} />
              </ItemCarousel>
            ))
          }
        </Carousel>
      }

      <Container>
        <SocialMedia isLeft={true} />
      </Container>

    </header>
  )
}