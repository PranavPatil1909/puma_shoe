import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import App from './App'
import { Spinner } from './Spinner'

let a = true;
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Spinner/>
    <App /> */}
    {a?<App/>:<Spinner/>}
  </StrictMode>
)


