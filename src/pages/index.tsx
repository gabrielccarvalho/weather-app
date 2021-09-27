import React from 'react'

import CitiesList from './CitiesList'
import CityForecast from './CityForecast'

export type PagesType = 'Cities' | 'CityForecast'

const WeatherApp = () => {
  const [page, setPage] = React.useState<PagesType>('Cities')

  switch (page) {
    case 'CityForecast':
      return <CityForecast setPage={setPage} />
    default:
      return <CitiesList setPage={setPage} />
  }
}

export default WeatherApp
