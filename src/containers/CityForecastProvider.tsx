import React from 'react'

type CityForecastType = {
  city: string
  setCity: (city: string) => void
}

const CityForecastContext = React.createContext<CityForecastType>({
  city: '',
  setCity: () => {},
})

export default CityForecastContext
