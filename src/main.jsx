import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faXmark, faVrCardboard, faShoppingCart, faBolt, faGamepad, faTags, faStar, faStarHalfAlt, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

library.add(faBars, faXmark, faVrCardboard, faShoppingCart, faBolt, faGamepad, faTags, faStar, faStarHalfAlt, faArrowLeft)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
