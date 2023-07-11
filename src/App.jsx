import { useState } from 'react'
import './scss/_global.scss'
import Nav from './components/Nav'
import Landing from './components/Landing'
import Highlights from './components/Highlights'
import Featured from './components/Featured'
import Discounted from './components/Discounted'
import Explore from './components/Explore'
import Footer from './components/Footer'

function App() {

  return (
    <div>
      <Nav />
      <Landing />
      <Highlights />
      <Featured />
      <Discounted />
      <Explore />
      <Footer />
    </div>
  )
}

export default App
