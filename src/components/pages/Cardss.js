import React from 'react'
import Carrd from './Carrd'

import image11 from './wlrjs.jpg'
import image12 from './fejs.jpg'

const cardss = [
    {
        id: 22,
        title: "Whole Lotta Red",
        image: image11,
        artista: "Playboi Carti",
        precio: "$ 898.57",
        cantidad: "2"
    },
    {
        id: 23,
        title: "French Exit",
        image: image12,
        artista: "TV Girl",
        precio: "$ 341.00" ,
        cantidad: "1" 
    }
]

export default function Cardss(){
    console.log()
    return(

    <div className='container d-flex justify-content-center align-items-center h-100'>
        <div className='row'>
            {
              cardss.map(c => (
                    <div className="col-md-4" key={cardss.id}>
                      <Carrd
                        key = {c.id}
                        id = {c.id}
                        title = {c.title}
                        image = {c.image}
                        artista= {c.artista}
                        precio= {c.precio}
                        cantidad= {c.cantidad}
                      />
                        </div>
                    ))
            }
        </div>
    </div>
    );
}