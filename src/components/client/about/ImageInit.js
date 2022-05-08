import React from 'react'
import { appImages } from '../../../helpers/appImages'

export function ImageInit() {
    return (
        <>
            {
                <img className="imageInit" width="100%" height="300px" style={{
                    objectFit: 'cover',
                    objectPosition: '50% 73%'
                }} src={appImages('./aboutHeader.jpeg')} alt="UCR - Sede del Caribe" />
            }
        </>
    )
}
