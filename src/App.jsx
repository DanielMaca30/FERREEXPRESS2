import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './styles/NavBar.css'
import './styles/PrincipalStyles.css'
import NavBar from './components/NavBar'
import Principal from './components/Principal'
import BarrasPrincipal from './components/BarrasPrincipal'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <Principal />
    </>
  )
}

export default App
