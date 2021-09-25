import React from 'react'
import { SafeAreaView, StatusBar, useColorScheme } from 'react-native'

import { Colors } from 'react-native/Libraries/NewAppScreen'

import { Header, EmptyState, CardList } from '../containers'

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
        barStyle='light-content'
      />
      <Header />
      {isEmpty ? <EmptyState /> : <CardList />}
    </SafeAreaView>
  )
}

export default WeatherApp
