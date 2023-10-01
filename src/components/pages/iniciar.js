import React, { useState } from 'react';
import './iniciar.css';
import image8 from './userjs.png';
import { useNavigate } from 'react-router-dom'

function Iniciar(props) {
    const navigate = useNavigate();

  const [user, setUsuario] = useState('');
  const [contra, setContrasena] = useState('');
  const [error, setError] = useState('');

  const handleInicioSesion = async () => {
    try {
      const response = await fetch('http://localhost:3001/iniciar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user, contra }),
      });

      if (response.status === 200) {
        // Inicio de sesión exitoso, redirige al usuario a su cuenta
        navigate('/inicio');
      } else {
        // Inicio de sesión fallido, muestra un mensaje de error en la pantalla
        setError('Credenciales Incorrectas');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
      setError('Error en la solicitud');
    }
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Usuario:', user);
    console.log('Contraseña:', contra);
  };

  return (
    <div>
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <div>
        <img src={image8} alt="Imagen8" className="imagen8" />
          <label htmlFor="usuario">Usuario:</label>
          <input
            type="text"
            id="usuario"
            value={user}
            onChange={(e) => setUsuario(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="contrasena">Contraseña:</label>
          <input
            type="password"
            id="contrasena"
            value={contra}
            onChange={(e) => setContrasena(e.target.value)}
            required
          />
        </div>
        <button onClick={handleInicioSesion}type="submit">Iniciar Sesión</button>
        <button onClick={() => navigate("/cuenta") } type="submit">Cancelar</button>
      </form>
    </div>
  );
}

export default Iniciar;
