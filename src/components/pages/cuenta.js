import React from 'react';
import './Cuenta-Cards.css';
import image7 from './notajs.png';
import { useNavigate } from 'react-router-dom'

export const CuentaCards = (props) => {
    const navigate = useNavigate();

  return (
    <div className="Cuenta-Cards">
      <div className="botones-container">
        <img src={image7} alt="Imagen7" className="imagen7" />
        <button onClick={() => navigate("/iniciar") }
          className="boton boton-iniciar"
        >
          Iniciar Sesión
        </button>
        <p className="titulitos2">Si aún no tienes una cuenta, regístrate aquí c:</p>
        <button onClick={() => navigate("/registro") }
          className="boton boton-registro"
        >
          Registro
        </button>
      </div>

    </div>
  );
};

export default CuentaCards;
