import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'


import Layout from './components/PageMarkers/Layout/Layout'
import Trainer from './pages/Trainer/Trainer'
import Libre from './pages/Libre/Libre'
import Profile from './pages/Profile/Profile'
import Home from './pages/Home/Home.jsx'

import './App.css'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route element = {<Layout/>}>
        <Route path="/" element={<Home />} />
        <Route path="/Train" element={<Trainer />} />
        <Route path="/Libre" element={<Libre />} />
        <Route path="/Profile" element={<Profile />} />
      </Route>
    </Routes>
  )
}

