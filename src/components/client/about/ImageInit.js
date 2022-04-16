import React from 'react'

export function ImageInit() {
    return (
        <>
            {
                // !(window.innerWidth < 576) &&
                <img className="imageInit load-hidden" width="100%" height="300px" style={{
                    objectFit: 'cover'
                }} src="https://picsum.photos/1920/300" alt="Imagen de prueba" />
            }
        </>
    )
}
