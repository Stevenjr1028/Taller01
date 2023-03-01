import { useState } from 'react'
import './App.css'
import SegundosAHoras from './components/Punto1'
import CallCostCalculator from './components/Punto2'
import Greeting from './components/Punto3'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <SegundosAHoras/>
      <CallCostCalculator/>
      <Greeting/>
    </div>
    
  )
}

export default App
