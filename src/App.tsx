import React from 'react'

import { ThemeProvider } from 'styled-components'

import { theme } from './baseStyles'
import FavoriteContext from './containers/FavoriteProvider'
import { Cities } from './pages'

const App = () => {
  const [favorites, setFavorites] = React.useState<string[]>([])
  return (
    <ThemeProvider theme={theme}>
      <FavoriteContext.Provider
        value={{
          favorites: favorites,
          updateFavorites: (fav: string) => {
            if (!favorites.includes(fav)) {
              setFavorites([...favorites, fav])
            } else {
              const newFavorites = favorites.filter(city => city !== fav)
              setFavorites(newFavorites)
            }
          },
        }}
      >
        <Cities />
      </FavoriteContext.Provider>
    </ThemeProvider>
  )
}

export default App
