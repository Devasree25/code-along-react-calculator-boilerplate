import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DisplayCalculator from './Component/DisplayCalculator'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <DisplayCalculator/>
    </>
  )
}

export default App
