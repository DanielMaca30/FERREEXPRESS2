import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { auth } from './firebaseConfig'; // Importa tu configuración de Firebase
import { signOut } from 'firebase/auth'; // Importa la función de cerrar sesión
import Ofertas from './Ofertas';
import AcercaDeNosotros from './AcercaDeNosotros';
import MisPedidos from './MisPedidos';
import Principal from './Principal.jsx';
import PuntosFisicos from './PuntosFisicos.jsx';
import Producto from './Producto.jsx';
import FormularioInicioSesion from './FormularioInicioSesion.jsx';
import FormularioRegistro from './FormularioRegistro.jsx';

const NavBar = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth ? auth.onAuthStateChanged(user => {
      setCurrentUser(user);
    }) : () => {};

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setCurrentUser(null); // Limpia el estado después de cerrar sesión
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

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
            <li><Link to="/misPedidos">Mis Pedidos</Link></li>
            {currentUser ? (
              <li>
                {currentUser.email}
                <button onClick={handleLogout} className="btn-logout">Salir</button>
              </li>
            ) : (
              <>
                <li><Link to="/creaTuCuenta">Crea tu cuenta</Link></li>
                <li><Link to="/ingresa">Ingresa</Link></li>
              </>
            )}
          </ul>
        </div>
        <Routes>
          <Route path="/" element={<Principal />} />
          <Route path="/ofertas" element={<Ofertas />} />
          <Route path="/acercaDeNosotros" element={<AcercaDeNosotros />} />
          <Route path="/puntosFisicos" element={<PuntosFisicos />} />
          <Route path="/misPedidos" element={<MisPedidos />} />
          <Route path="/creaTuCuenta" element={<FormularioRegistro />} />
          <Route path="/ingresa" element={<FormularioInicioSesion />} />
          <Route path='/producto/:productId' element={<Producto />} />
        </Routes>
      </div>
    </Router>
  );
};

export default NavBar;