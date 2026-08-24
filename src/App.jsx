import { useState } from 'react'

import Home from './pages/Home'

import './App.css'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home />
    </>
  )
}

