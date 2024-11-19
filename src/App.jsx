import { useState } from 'react'
import './App.css'
import './styles/NavBar.css'
import './styles/PrincipalStyles.css'
import './styles/Ofertas.css'
import './styles/Producto.css'
import NavBar from './components/NavBar'
import Principal from './components/Principal'
import { Ofertas } from './components/Ofertas'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AcercaDeNosotros from './components/AcercaDeNosotros.jsx';
import Producto from './components/Producto'
import PuntosFisicos from './components/PuntosFisicos.jsx'
import MisPedidos from './components/MisPedidos.jsx'
import Ingresa from './Login-sign/Ingresa.jsx'
import CreaTuCuenta from './Login-sign/CreaTuCuenta.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
       
    </>
  )
}

export default App
