import React from 'react'
import Login from './Login'
import Signup from './Signup'
import Graphql from './Graphql'
import {BrowserRouter as Router,Route, Routes } from 'react-router-dom'


export default function App() {
  return (
    <>
    <Graphql/>
      <Router>
        <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        </Routes>
    </Router>   
    </>
  )
}
