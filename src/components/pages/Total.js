import React from 'react'
//import PropTypes from 'prop-types'
import './total.css'
 
export default function Total({id, image, precio}){
    return(

    <div className='total text-center bg-dark' style={{ maxWidth: '250px' }}>

        <div className='total-body text-light'>
            <img src={image} alt='' className='rounded mx-auto d-block'></img>
            <p className='total-text tex-secondary'> 
            Total: {precio}
            </p>
            <a href='#!' className='btn bg-black btn-outline-primary rounded-1'>
                Pagar Ahora
            </a>
        </div>
    </div>
    )
}