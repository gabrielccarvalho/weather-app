import React from 'react'
import { SafeAreaView, StatusBar, useColorScheme } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'

import { theme } from '../baseStyles'
import { CardList, EmptyState, Header } from '../containers'
import FavoriteContext from '../containers/FavoriteProvider'

import { PagesType } from './index'

type Props = {
  setPage: React.Dispatch<React.SetStateAction<PagesType>>
}

const CitiesList = ({ setPage }: Props) => {
  const { favorites } = React.useContext(FavoriteContext)
  const [query, setQuery] = React.useState<string>('')
  const [city, setCity] = React.useState<string>('')
  const [isEmpty, setEmpty] = React.useState<boolean>(favorites.length === 0)
  const timeoutToUpdateCity = React.useRef<number>(500)
  const isDarkMode = useColorScheme() === 'dark'

  const containerStyle = {
    flexGrow: 1,
    backgroundColor: isDarkMode ? Colors.dark : theme.colors.lightest, // DARKMODE
  }

  // When the query change, we set the city as the query.
  // We use a debounce to only send the request once when the user finish typing.
  React.useEffect(() => {
    timeoutToUpdateCity.current = setTimeout(() => {
      setCity(query)
      query !== '' && setEmpty(false)
    }, 800) as unknown as number
    return () => {
      clearTimeout(timeoutToUpdateCity.current)
    }
    // We update only when the query change
  }, [query])

  React.useEffect(() => {
    favorites.length === 0 && setEmpty(true)
  }, [favorites])

  return (
    <SafeAreaView style={containerStyle}>
      <StatusBar barStyle='light-content' />
      <Header query={query} setQuery={setQuery} />
      {isEmpty ? <EmptyState /> : <CardList city={city} setPage={setPage} />}
    </SafeAreaView>
  )
}

export default CitiesList
