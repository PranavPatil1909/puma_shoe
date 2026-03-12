import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import App from './App'

// let a = true
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* {a?<App/>:<Spinner/>} */}
  </StrictMode>
)
