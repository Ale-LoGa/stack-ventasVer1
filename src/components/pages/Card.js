import React from 'react'
//import PropTypes from 'prop-types'
import './card.css'
 
export default function Card({id, title, image, artista, precio, }){
    return(

    <div className='card text-center bg-dark' style={{ maxWidth: '250px' }}>

        <div className='card-body text-light'>
            <img src={image} alt='' className='rounded mx-auto d-block'></img>
            <h4 className='card-title'>{title}</h4>
            <p className='card-text tex-secondary'> 
            Intérprete: {artista}
            </p>
            <p className='card-text tex-secondary'> 
            Precio: {precio}
            </p>
            <a href='#!' className='btn bg-black btn-outline-primary rounded-1'>
                Mover al carrito
            </a>
            </div>
    </div>
    )
}