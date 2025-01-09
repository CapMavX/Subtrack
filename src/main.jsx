import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { GoogleOAuthProvider } from '@react-oauth/google';

createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId="280214030825-riuouighsiqt3l8loerbmo9pf0o2ee3e.apps.googleusercontent.com"><StrictMode>
  <App />
</StrictMode>,</GoogleOAuthProvider>
  
)
