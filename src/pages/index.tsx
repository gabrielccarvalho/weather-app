import React from 'react'
import { SafeAreaView, StatusBar, useColorScheme } from 'react-native'

import { Colors } from 'react-native/Libraries/NewAppScreen'

import { Header, EmptyState, CardList } from '../containers'

const WeatherApp = () => {
  const [query, setQuery] = React.useState<string>('')
  const [city, setCity] = React.useState<string>('')
  const [isEmpty, setIsEmpty] = React.useState<boolean>(false)
  const timeoutToUpdateCity = React.useRef<number>(500)
  const isDarkMode = useColorScheme() === 'dark'

  const containerStyle = {
    flexGrow: 1,
    backgroundColor: isDarkMode ? Colors.dark : '#e7e4fc' // DARKMODE
  }

  // When the query change, we set the city as the query.
  // We use a debounce to only send the request once when the user finish typing.
  React.useEffect(() => {
    timeoutToUpdateCity.current = (setTimeout(() => {
      setCity(query)
    }, 500) as unknown) as number
    return () => {
      clearTimeout(timeoutToUpdateCity.current)
    }
    // We update only when the query change
  }, [query])

  return (
    <SafeAreaView style={containerStyle}>
      <StatusBar
        barStyle='light-content'
      />
      <Header query={query} setQuery={setQuery} />
      {isEmpty ? <EmptyState /> : <CardList city={city} />}
    </SafeAreaView>
  )
}

export default WeatherApp
