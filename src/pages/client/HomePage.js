import { SocialMedia } from "../../components/client/home/SocialMedia";
import { Container } from "../../components/client/layouts/Container";
import { Carousel } from "../../components/client/ui/Carousel";
import { ItemCarousel } from "../../components/client/ui/ItemCarousel";

export default function HomePage() {

  //estudiar la propiedad transform y translate de css

  return (
    <>
      <header className="home__header">
        
        <div className="home__header__title">
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

              <div style={{
                backgroundColor: 'rgba(0, 0, 0, 0.40)',
                width: '100%',
                height: '100%',
                position: 'absolute' 
              }}></div>
              <img
                style={{
                    objectFit: 'cover',
                    width: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.40)',
                    height: '100%'
                }}
                src={`https://picsum.photos/192${photo}/822`} 
                alt={`Esto es una foto de prueba`} 
            />
            </ItemCarousel>
            ))
          }
        </Carousel>
        }

        

        <Container>
          <SocialMedia isLeft={true}/>
        </Container>

      </header>
    </>
  )
}
