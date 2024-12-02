import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { AuthProvider } from './context/AuthContext';

import './index.css'
import Routes from '../routes';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <Routes/>
    </AuthProvider>
  </StrictMode>
)
