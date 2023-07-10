import { useState } from 'react'
import './scss/_global.scss'
import Nav from './components/Nav'
import Landing from './components/Landing'
import Highlights from './components/Highlights'

function App() {

  return (
    <div>
      <Nav />
      <Landing />
      <Highlights />
    </div>
  )
}

export default App
