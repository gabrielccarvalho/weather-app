import React from 'react'
import { SafeAreaView, StatusBar, useColorScheme } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'

import { CardList, EmptyState, Header } from '../containers'

const WeatherApp = () => {
  const [query, setQuery] = React.useState<string>('')
  const [city, setCity] = React.useState<string>('')
  const [isEmpty, setEmpty] = React.useState<boolean>(false)
  const timeoutToUpdateCity = React.useRef<number>(500)
  const isDarkMode = useColorScheme() === 'dark'

  const containerStyle = {
    flexGrow: 1,
    backgroundColor: isDarkMode ? Colors.dark : '#e7e4fc', // DARKMODE
  }

  // When the query change, we set the city as the query.
  // We use a debounce to only send the request once when the user finish typing.
  React.useEffect(() => {
    timeoutToUpdateCity.current = setTimeout(() => {
      setCity(query)
    }, 500) as unknown as number
    return () => {
      clearTimeout(timeoutToUpdateCity.current)
    }
    // We update only when the query change
  }, [query])

  React.useEffect(() => {
    // If there is a search, we don't need to show the empty state anymore.
    city !== '' && setEmpty(false)
  }, [city])

  return (
    <SafeAreaView style={containerStyle}>
      <StatusBar barStyle='light-content' />
      <Header query={query} setQuery={setQuery} />
      {isEmpty ? <EmptyState /> : <CardList city={city} setEmpty={setEmpty} />}
    </SafeAreaView>
  )
}

export default WeatherApp
