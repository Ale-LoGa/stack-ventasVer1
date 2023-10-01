import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route }
	from 'react-router-dom';
import Inicio from './components/pages/inicio';
import Pedidos from './components/pages/pedidos';
import Cuenta from './components/pages/cuenta';
import INICIAR from './components/pages/iniciar';
import REGISTRAR from './components/pages/registro';

function App() {
	return (
    <div className='App'>
		<Router>
			<Navbar />
			<Routes>
			<Route exact path='/' exact element={<Inicio/>} />
				<Route path='/inicio' element={<Inicio/>} />
				<Route path='/pedidos' element={<Pedidos />} />
				<Route path='/cuenta' element={<Cuenta />} />
				<Route path='/iniciar' element={<INICIAR />} />
				<Route path='/registro' element={<REGISTRAR />} />
			</Routes>
		</Router>

    </div>
	);
}

export default App;