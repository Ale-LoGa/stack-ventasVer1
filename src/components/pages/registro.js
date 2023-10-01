import React, { useState } from 'react';
import './registro.css';
import { useNavigate } from 'react-router-dom'

function Registro(props) {
    const navigate = useNavigate();

  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [direccion, setDireccion] = useState('');
  const [correo, setCorreo] = useState('');
  const [telefono, setTelefono] = useState('');
  const [user, setUser] = useState('');
  const [contra, setContra] = useState('');
  const [error, setError] = useState('');


  const handleRegistro = async () => {
    try {
      const response = await fetch('http://localhost:3001/registro', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nombre, apellido, direccion, correo, telefono, user, contra }),
      });

      if (response.status === 200) {
        // Registro exitoso, redirige al usuario a la página de cuenta
        navigate('/inicio');
      } else if (response.status === 400) {
        // Error de duplicación, muestra un mensaje de error en la pantalla
        const data = await response.json();
        setError(data.error);
      } else {
        // Otro error, muestra un mensaje de error genérico
        setError('Error en el registro');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
      setError('Error en la solicitud');
    }
  }; 


  return (
    <div>
      <h2>Registro</h2>
      <form onSubmit={handleRegistro}>
        <div>
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>
  
        <div>
          <label htmlFor="apellido">Apellidos:</label>
          <input
            type="text"
            id="apellido"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
            required
          />
        </div>
  
        <div>
          <label htmlFor="direccion">Dirección:</label>
          <input
            type="text"
            id="direccion"
            value={direccion}
            onChange={(e) => setDireccion(e.target.value)}
            required
          />
        </div>
  
        <div>
          <label htmlFor="correo">Correo:</label>
          <input
            type="text"
            id="correo"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            required
          />
        </div>
  
        <div>
          <label htmlFor="telefono">Teléfono:</label>
          <input
            type="text"
            id="telefono"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            required
          />
        </div>
  
        <div>
          <label htmlFor="user">Usuario:</label>
          <input
            type="text"
            id="user"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            required
          />
        </div>
  
        <div>
          <label htmlFor="contraseña">Contraseña:</label>
          <input
            type="password"
            id="contraseña"
            value={contra}
            onChange={(e) => setContra(e.target.value)}
            required
          />
        </div>
  
        <button onClick={handleRegistro} type="submit">Registro</button>
        <button onClick={() => navigate("/cuenta") } type="submit">Cancelar</button>
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
  
}

export default Registro;