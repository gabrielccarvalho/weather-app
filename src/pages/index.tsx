import React from 'react'
import { SafeAreaView, StatusBar, useColorScheme } from 'react-native'

import { Colors } from 'react-native/Libraries/NewAppScreen'

import { Header } from '../containers'
import { EmptyState, CityCard } from '../components'

const WeatherApp = () => {
  const [isEmpty, setIsEmpty] = React.useState<boolean>(false)
  const isDarkMode = useColorScheme() === 'dark'

  const containerStyle = {
    flexGrow: 1,
    backgroundColor: isDarkMode ? Colors.dark : '#e7e4fc' // DARKMODE
  }

  return (
    <SafeAreaView style={containerStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      />
      <Header />
      {isEmpty ? <EmptyState /> : <CityCard />}
    </SafeAreaView>
  )
}

export default WeatherApp
