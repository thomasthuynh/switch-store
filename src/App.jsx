import { useState } from 'react'
import './scss/_global.scss'
import Nav from './components/Nav'
import Landing from './components/Landing'
import Highlights from './components/Highlights'
import Featured from './components/Featured'

function App() {

  return (
    <div>
      <Nav />
      <Landing />
      <Highlights />
      <Featured />
    </div>
  )
}

export default App
