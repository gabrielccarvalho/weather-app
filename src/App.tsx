import React from 'react'

import { ThemeProvider } from 'styled-components'

import { theme } from './baseStyles'
import { Cities } from './pages'

const App = () => (
  <ThemeProvider theme={theme}>
    <Cities />
  </ThemeProvider>
)

export default App
