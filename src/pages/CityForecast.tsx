import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native'

import { theme } from '../baseStyles'
import { Forecast, Header } from '../containers'

import { PagesType } from './index'

type Props = {
  setPage: React.Dispatch<React.SetStateAction<PagesType>>
}

const CityForecast = ({ setPage }: Props) => {
  const containerStyle = {
    flexGrow: 1,
    backgroundColor: theme.colors.lightest,
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
