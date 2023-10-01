import React from 'react';
import './Pedidos-Cards.css';
import Cardss from './Cardss';
import Totals from './Totals';

const pedidos = () => {
	return (
		<div className='Pedidos-Cards'>
			<h1 className='titulitos1'>Historial de pedidos realizados</h1>
			<Cardss></Cardss>
			<Totals></Totals>
		</div>
	);
};

export default pedidos; 