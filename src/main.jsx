import { StrictMode } from 'react' // basically renders twice to make sure that there is no error 
import { createRoot } from 'react-dom/client'
import App from './Appclosure.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  
    <App />
 
)
