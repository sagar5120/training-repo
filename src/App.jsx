//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import Newjs from './components/Navigation/Newjs'
import About from './pages/about'
import { Route, Routes } from 'react-router-dom'
import Toolbar from './components/Navigation/Toolbar'
import PageNotFound from './HOC/PAgeNotFound'
import CardDetails from './pages/CardDetails'

function App() {
 

  return (
    <>
    <Toolbar/>
    <Routes>

    <Route path ='/'  element={<Home/>} />
    <Route path ='/about'  element={<About/>} />
    {/* <Route path ='/click'  element={<Click/>} /> */}
    <Route path ='*'  element={<PageNotFound/>} />
    <Route path ='/card/:id'  element={<CardDetails/>} />

    </Routes>
    </>
  )
}
export default  App


