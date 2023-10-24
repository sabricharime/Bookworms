import React from 'react'
import ReactDOM from "react-dom/client"
import App from './App'
import LanguageProvider from './context'
import './index.css'
import { NextUIProvider } from '@nextui-org/react'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <LanguageProvider>
    <NextUIProvider>
      <App />

    </NextUIProvider>
  </LanguageProvider>

)

