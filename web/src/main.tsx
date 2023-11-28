import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { UserRoutes } from './routes'
import { Header } from './components/header'
import { Contexts } from './contexts'
import { Footer } from './components/footer'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Contexts>
      <Header />
      <UserRoutes />
      <Footer />
    </Contexts>
  </React.StrictMode>,
)
