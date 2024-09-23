import React from 'react'
import './App.css'
import Header from './components/header/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <>
      <Header />
      <div className='pt-[10rem]'>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </div>
      <Footer/>
    </>
  )
}

export default App