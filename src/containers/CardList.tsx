import React from 'react'
import { ScrollView, useColorScheme } from 'react-native'

import styled from 'styled-components'

import { CityCard } from '../components'

import FavoriteContext from './FavoriteProvider'

const ScrollContainer = styled(ScrollView).attrs({
  contentInsetAdjustmentBehavior: 'automatic',
  contentContainerStyle: { flexGrow: 1 },
})<{ isDarkMode: boolean }>`
  background-color: ${({ isDarkMode, theme }) =>
    isDarkMode ? theme.colors.black : theme.colors.lightest};
`

const CardList = ({ city }: { city: string }) => {
  const { favorites } = React.useContext(FavoriteContext)
  const isDarkMode = useColorScheme() === 'dark'

  return (
    <ScrollContainer isDarkMode={isDarkMode}>
      {city === '' ? (
        favorites.length > 0 && favorites.map(city => <CityCard key={city} city={city} />)
      ) : (
        <CityCard city={city} />
      )}
    </ScrollContainer>
  )
}

export default CardList
