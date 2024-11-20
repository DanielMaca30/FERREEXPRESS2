import { useState } from 'react'
import './App.css'
import './styles/NavBar.css'
import './styles/PrincipalStyles.css'
import './styles/Ofertas.css'
import './styles/Producto.css'
import NavBar from './components/NavBar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
    </>
  )
}

export default App
