import React from 'react'

import { ThemeProvider } from 'styled-components'

import { theme } from './baseStyles'
import CityForecastContext from './containers/CityForecastProvider'
import FavoriteContext from './containers/FavoriteProvider'
import WeatherApp from './pages'

const App = () => {
  const [favorites, setFavorites] = React.useState<string[]>([])
  const [city, setCity] = React.useState<string>('')
  return (
    <ThemeProvider theme={theme}>
      <FavoriteContext.Provider
        value={{
          favorites,
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
        <CityForecastContext.Provider
          value={{ city, setCity: (city: string) => setCity(city) }}
        >
          <WeatherApp />
        </CityForecastContext.Provider>
      </FavoriteContext.Provider>
    </ThemeProvider>
  )
}

export default App
