import { BrowserRouter } from 'react-router-dom'
import { Router } from '@/Router'
import { defaultTheme } from '@/styles/themes/default'
import { IconContext } from '@phosphor-icons/react'
import { GlobalStyle } from '@/styles/global'
import { defaultIconContext } from '@/styles/constants'
import { ThemeProvider } from 'styled-components'
import { CoffeeContextProvider } from '@/contexts/CoffeeContext'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <IconContext.Provider value={defaultIconContext}>
        <BrowserRouter>
          <CoffeeContextProvider>
            <Router />
          </CoffeeContextProvider>
        </BrowserRouter>
      </IconContext.Provider>
      <ToastContainer />
      <GlobalStyle />
    </ThemeProvider>
  )
}
