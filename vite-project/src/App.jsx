import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Contador from './components/Contador'
import ContadorCompartilhado from './components/ContadorCompartilhado'

function App() {
  const [countCompartilhado, setCountCompartilhado] = useState(0)

  return (
    <>
      <h1>Contadores em React</h1>
      <Contador />
      <Contador />
      <br/>
      <ContadorCompartilhado
      count={countCompartilhado}
      setCount={setCountCompartilhado} />
      
      <ContadorCompartilhado 
      count={countCompartilhado}
      setCount={setCountCompartilhado}/>
    </>
  )
}

export default App
