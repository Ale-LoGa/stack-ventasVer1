import React from 'react'
import Card from './Card'
import image1 from './bjs.jpg'
import image2 from './fejs.jpg'
import image3 from './flgjs.jpg'
import image4 from "./ijs.jpg"
import image5 from "./ujs.jpg"
import image6 from "./wlrjs.jpg"

const cards = [
{
    id: 1,
    title: "Bipolar",
    image: image1,
    artista: "Yot Club",
    precio: "$ 175.08"
},
{
    id: 2,
    title: "French Exit",
    image: image2,
    artista: "TV Girl",
    precio: "$ 341.00"  
},
{
    id: 3,
    title: "Feel Like God",
    image: image3,
    artista: "gazzzy/Framed",
    precio: "$ 76.08" 
 }
 ,
{
    id: 4,
    title: "IGOR",
    image: image4,
    artista: "Tyler, The Creator",
    precio: "$ 950.00" 
},
{
    id: 5,
    title: "UTOPIA",
    image: image5,
    artista: "Travis Scott",
    precio: "$ 315.15"  
},
{
    id: 6,
    title: "Whole Lotta Red",
    image: image6,
    artista: "Playboi Carti",
    precio: "$ 898.57" 
}
]
  
export default function Cards(){
      console.log()
      return(
  
      <div className='container d-flex justify-content-center align-items-center h-100'>
          <div className='row'>
              {
                cards.map(c => (
                      <div className="col-md-4" key={cards.id}>
                        <Card
                          key = {c.id}
                          id = {c.id}
                          title = {c.title}
                          image = {c.image}
                          artista= {c.artista}
                          precio= {c.precio}
                        />
                          </div>
                      ))
              }
          </div>
      </div>
      );
  }