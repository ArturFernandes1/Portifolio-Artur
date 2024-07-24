import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Sobre from './pages/Sobre'
import Contato from './pages/Contato'





function App() {

  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="sobre" element={<Sobre />} />
          <Route path="contato" element={<Contato />} /> 
      </Routes>
    </BrowserRouter>
 
  )
}

export default App
