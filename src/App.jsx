import { useState } from 'react'
import './App.css'
import SegundosAHoras from './components/Punto1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <SegundosAHoras/>
      
    </div>
  )
}

export default App
