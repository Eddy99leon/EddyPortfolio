import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import SidebarProvider from './context/SidebarContext.jsx';
import ThemeProvider from './context/ThemeContext.jsx'
import PopupProvider from './context/PopupContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/">
      <ThemeProvider>
        <PopupProvider>
          <SidebarProvider>
              <App />
          </SidebarProvider>
        </PopupProvider>
      </ThemeProvider>
  </BrowserRouter>,
)
