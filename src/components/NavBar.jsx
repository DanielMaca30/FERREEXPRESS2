import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Ofertas from './Ofertas'; // O el componente que quieres mostrar
import AcercaDeNosotros from './AcercaDeNosotros'; // O el componente correspondiente
import MisPedidos from './MisPedidos'; // Lo mismo aquí
import CreaTuCuenta from '../Login-sign/CreaTuCuenta.jsx';
import Ingresa from '../Login-sign/Ingresa.jsx'; // Y así sucesivamente
import Principal from './Principal.jsx';
import PuntosFisicos from './PuntosFisicos.jsx';
import Producto from './Producto.jsx';
import Carrito from './Carrito.jsx';

const NavBar = () => {
  return (
    <Router>
      <div className='NavBar'>
        <div className='Buscador'>
          <img src="src/assets/Images/Logo2.png" alt="" />
          <input type="text" placeholder="Buscar productos, marcas y más..." className="input-buscador" />
          <button className="btn-buscar">Buscar</button>
        </div>
        <div className='Links'>
          <ul>
            <li><Link to="/">Principal</Link></li>
            <li><Link to="/ofertas">Ofertas</Link></li>
            <li><Link to="/acercaDeNosotros">Acerca de Nosotros</Link></li>
            <li><Link to="/puntosFisicos">Puntos Físicos</Link></li>
            <li><Link to="/Carrito">Carrito</Link></li>
            <li><Link to="/creaTuCuenta">Crea tu cuenta</Link></li>
            <li><Link to="/ingresa">Ingresa</Link></li>
          </ul>
        </div>
        <Routes>
          <Route path="/" element={<Principal />} />
          <Route path="/ofertas" element={<Ofertas />} />
          <Route path="/acercaDeNosotros" element={<AcercaDeNosotros />} />
          <Route path="/puntosFisicos" element={<PuntosFisicos />} />
          <Route path="/Carrito" element={<Carrito />} />
          <Route path="/creaTuCuenta" element={<CreaTuCuenta />} />
          <Route path="/ingresa" element={<Ingresa />} />
          <Route path='/producto/:productId' element={<Producto/>}/>
        </Routes>
      </div>
    </Router>
  );
};

export default NavBar;