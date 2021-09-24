import React from 'react'

import { ThemeProvider } from 'styled-components'

import { theme } from './baseStyles'
import WeatherApp from './pages'

const App = () => (
  <ThemeProvider theme={theme}>
    <WeatherApp />
  </ThemeProvider>
)

export default App
