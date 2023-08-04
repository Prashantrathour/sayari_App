import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Home'
import SignupForm from '../Signup'
import SigninForm from '../Signin'

function MainRoute() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<SignupForm/>}/>
        <Route path='/signin' element={<SigninForm/>}/>
    </Routes>
  )
}

export default MainRoute