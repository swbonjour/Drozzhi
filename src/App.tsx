import React from 'react'

import './App.scss'

import { Home, Portfolio, About, Feedback, Footer } from './pages'

function App() {
  return (
    <div className="App">
      <Home></Home>
      <Portfolio></Portfolio>
      <About></About>
      <Feedback></Feedback>
      <Footer></Footer>
    </div>
  )
}

export default App
