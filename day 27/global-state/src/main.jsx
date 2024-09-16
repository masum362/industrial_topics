import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { router } from './router/router.jsx'
import { RouterProvider } from 'react-router-dom'
import AuthPorvider from './context/AuthPorvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthPorvider>
      <RouterProvider router={router} />
    </AuthPorvider>
  </StrictMode>,
)
