import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {ClerkProvider} from '@clerk/clerk-react'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={"pk_test_bGFzdGluZy1jb3diaXJkLTMzLmNsZXJrLmFjY291bnRzLmRldiQ"}>
       <App />
    </ClerkProvider>
  </StrictMode>,
)
