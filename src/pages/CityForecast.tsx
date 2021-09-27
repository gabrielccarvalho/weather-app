import React from 'react'
import { SafeAreaView, StatusBar, useColorScheme } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'

import { theme } from '../baseStyles'
import { Forecast, Header } from '../containers'

import { PagesType } from './index'

type Props = {
  setPage: React.Dispatch<React.SetStateAction<PagesType>>
}

const CityForecast = ({ setPage }: Props) => {
  const isDarkMode = useColorScheme() === 'dark'

  const containerStyle = {
    flexGrow: 1,
    backgroundColor: isDarkMode ? Colors.dark : theme.colors.lightest, // DARKMODE
  }

  return (
    <SafeAreaView style={containerStyle}>
      <StatusBar barStyle='light-content' />
      <Header setPage={setPage} />
      <Forecast />
    </SafeAreaView>
  )
}

export default CityForecast
