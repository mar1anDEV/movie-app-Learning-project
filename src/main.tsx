import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/index.css'
import App from './App.tsx'

createRoot(document.getElementById('CinemaPlexApp')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
