import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faShoppingCart, faBolt, faGamepad, faTags } from '@fortawesome/free-solid-svg-icons'

library.add(faBars, faShoppingCart, faBolt, faGamepad, faTags)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
