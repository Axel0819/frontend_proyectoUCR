import { SocialMedia } from "../../components/client/home/SocialMedia";
import { Container } from "../../components/client/layouts/Container";
import { ContainerResponsive } from "../../components/client/layouts/ContainerResponsive";
import { Carousel } from "../../components/client/ui/Carousel";
import { ItemCarousel } from "../../components/client/ui/ItemCarousel";
import logoBlack from '../../assets/images/logoBlack.png';

const imgSvg = require.context('../../assets/svg/')

export default function HomePage() {

  console.log(imgSvg);
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
              {/* TODO: crear componente para las imagenes presentadas */}
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

      {/* TODO: Crear componente por cada seccion del home 
        -Crear componente individual para la seccion uno
        -Ordenar los estilos establecidos
      */}

      <Container>
        {/* <div className="grid grid-nogutter"> */}
        <ContainerResponsive>
          <div className="sm:col-5 flex flex-column justify-content-center gap-50">
            <h1 className="text-font-abel">Centro de Capacitación de Marina Mercante</h1>
            <div className="flex gap-50 container__country">
              {
                ['./PaisU.svg', './PaisC.svg', './PaisR.svg'].map((pais, i) => (
                  <img style={{
                    maxWidth: '100px',
                    minWidth: '20px'
                  }} key={pais + i} src={imgSvg(pais)} alt="Imagen de país" />
                ))
              }
            </div>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe sint adipisci asperiores minus ratione dolorum numquam sit quas repellendus, maiores officia, non accusamus et dolor, ipsam cum. Repudiandae, sequi modi!
            </p>
          </div>
          <div className="sm:col-7 flex justify-content-center align-items-center">
            <div style={{
              maxWidth: '722px',
              maxHeight: '502px'
            }}>
              <img style={{
                objectFit: 'contain'
              }} width="100%" height="100%" src={logoBlack} alt="Imagen de prueba" />
            </div>
          </div>
        </ContainerResponsive>
        {/* </div> */}
      </Container>
    </>
  )
}
