import { useState } from 'react'
import './App.css'
import SegundosAHoras from './components/Punto1'
import CallCostCalculator from './components/Punto2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <SegundosAHoras/>
      <CallCostCalculator/>

      
    </div>
    
  )
}

export default App
