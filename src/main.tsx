import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/index.css'
import App from './App.tsx'

createRoot(document.getElementById('main_app')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
