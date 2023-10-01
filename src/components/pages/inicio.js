import React from 'react';
import './Inicio-Cards.css';
import Cards from './Cards';

export const inicio = () => {
	return (
		<div className='Inicio-Cards'>
			<h1 className="titulitos3" >Consulta todos los productos disponibles</h1>	
			<Cards></Cards>
		</div>
	);
};
  
export default inicio;