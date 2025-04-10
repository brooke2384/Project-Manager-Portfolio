import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import emailjs from 'emailjs-com'
import App from './App.tsx'
import './index.css'
import { Toaster } from '@/components/ui/toaster'

// Initialize EmailJS with your user ID from environment variables
// This will be overridden by the initialization in emailService.ts
// but we keep it here for completeness
const USER_ID = import.meta.env.VITE_EMAILJS_USER_ID || 'user_id';
emailjs.init(USER_ID)

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Toaster />
    </BrowserRouter>
  </React.StrictMode>
);
