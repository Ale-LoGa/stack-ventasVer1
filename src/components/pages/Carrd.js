import React from 'react'
//import PropTypes from 'prop-types'
import './carrd.css'
 
export default function Carrd({id, title, image, artista, precio, cantidad}){
    return(

    <div className='cardd text-center bg-dark' style={{ maxWidth: '250px' }}>

        <div className='cardd-body text-light'>
            <img src={image} alt='' className='rounded mx-auto d-block'></img>
            <h4 className='cardd-title'>{title}</h4>
            <p className='cardd-text tex-secondary'> 
            Intérprete: {artista}
            </p>
            <p className='cardd-text tex-secondary'> 
            Precio: {precio}
            </p>
            <p className='cardd-text tex-secondary'> 
            Cantidad: {cantidad}
            </p>
            </div>
    </div>
    )
}