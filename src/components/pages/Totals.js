import React from 'react'
import Total from './Total'

import image15 from './carrojs.png'

const totals = [
    {
        id: 30,
        image: image15,
        precio: "$ 2,138.14"
    }
]

export default function Totals(){
    console.log()
    return(

    <div className='container d-flex justify-content-center align-items-center h-200'>
        <div className='row'>
            {
              totals.map(c => (
                    <div className="col-md-4" key={totals.id}>
                      <Total
                        key = {c.id}
                        id = {c.id}
                        image = {c.image}
                        precio= {c.precio}
                      />
                        </div>
                    ))
            }
        </div>
    </div>
    );
}