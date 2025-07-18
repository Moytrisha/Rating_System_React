import { useState } from 'react'
import Rating from './Component/Rating/Rating'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Rating />
      </div>
    </>
  )
}

export default App
