import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import './style/slider.css'
import App from './App.jsx'
import './style/pages_style.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter } from 'react-router-dom';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </StrictMode>,
)
