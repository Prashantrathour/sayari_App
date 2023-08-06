import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ShayariGenerator from './pages/Sayarigenerator'


function MainRoutes() {
  return (
    <Routes>
        <Route path='/' element={<ShayariGenerator/>}/>
    </Routes>
  )
}

export default MainRoutes