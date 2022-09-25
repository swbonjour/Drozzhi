import React from 'react'

import './App.scss'

import { Home, Portfolio, About, Feedback } from './pages'

function App() {
  return (
    <div className="App">
      <Home></Home>
      <Portfolio></Portfolio>
      <About></About>
      <Feedback></Feedback>
    </div>
  )
}

export default App
