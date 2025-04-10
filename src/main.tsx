import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import emailjs from 'emailjs-com'
import App from './App.tsx'
import './index.css'
import { Toaster } from '@/components/ui/toaster'

// Initialize EmailJS with your user ID
// Replace 'your_user_id' with your actual EmailJS user ID
emailjs.init('user_id')

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Toaster />
    </BrowserRouter>
  </React.StrictMode>
);
