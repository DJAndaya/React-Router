import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route, Link } from "react-router-dom"
import Red from './components/Red'
import Blue from './components/Blue'
import Home from './components/Home'
import './index.css'

function App() {
  
  return (
    <>
      <div id="container">
        <h1>Hello React Router!</h1>
        <div id="navbar">
          <Link to="/">
            <h1>Home</h1>
          </Link>
          <Link to="/blue">
            <h1>Blue</h1>
          </Link>
          <Link to="/red">
            <h1>Red</h1>
          </Link>
        </div>
        <div id="main-section">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blue" element={<Blue />} />
            <Route path="/red" element={<Red />} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
