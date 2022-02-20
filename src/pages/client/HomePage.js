import { useState, useEffect } from "react";
import { Carousel } from "../../components/client/ui/Carousel";
import { ItemCarousel } from "../../components/client/ui/ItemCarousel";

export default function HomePage() {

  return (
    <>
      <header className="home_header">
        
        <div style={{
          position: 'absolute',
          zIndex:"1",
          backgroundColor: 'rgba(0, 0, 0, 0.40)',
          width: '100%',
          height: 'calc(100vh - 115px)', 
          color: '#FFF',
          display: 'grid',
          placeContent: 'center'
        }}>
          <h1> CECAMM </h1>
          <p>
            El CECAMM es una intitucion fachera
          </p>
        </div>

        <Carousel>
          {
            [1, 2, 3, 4].map((photo) => (
            <ItemCarousel key={photo}>
              <img
                style={{
                    objectFit: 'cover',
                    width: '100%',
                    // height: '100%'
                }}
                src={`https://picsum.photos/108${photo}/1080`} 
                alt={`Esto es una foto de prueba`} 
            />
            </ItemCarousel>
            ))
          }
        </Carousel>
      </header>
    </>
  )
}
