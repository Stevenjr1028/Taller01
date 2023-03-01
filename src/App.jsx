import { useState } from 'react'
import './App.css'
import SegundosAHoras from './components/Punto1'
import CallCostCalculator from './components/Punto2'
import Greeting from './components/Punto3'
import SameNumberCounter from './components/Punto4'
import NumberList from './components/Punto5'
import ImparesMenores from './components/Punto6'
import AumentoSalario from './components/Punto7'
import DivisionArreglo from './components/Punto8'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <SegundosAHoras/>
      <CallCostCalculator/>
      <Greeting/>
      <SameNumberCounter/>
      <NumberList/>
      <ImparesMenores/>
      <AumentoSalario/>
      <DivisionArreglo/>
    </div>
    
  )
}

export default App
