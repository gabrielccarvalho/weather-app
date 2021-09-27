import React from 'react'
import { ScrollView, useColorScheme } from 'react-native'

import styled from 'styled-components'

import { CityCard } from '../components'
import { PagesType } from '../pages'

import FavoriteContext from './FavoriteProvider'

const ScrollContainer = styled(ScrollView).attrs({
  contentInsetAdjustmentBehavior: 'automatic',
  contentContainerStyle: { flexGrow: 1 },
})<{ isDarkMode: boolean }>`
  background-color: ${({ isDarkMode, theme }) =>
    isDarkMode ? theme.colors.black : theme.colors.lightest};
`

type Props = {
  city: string
  setPage: React.Dispatch<React.SetStateAction<PagesType>>
}

const CardList = ({ city, setPage }: Props) => {
  const { favorites } = React.useContext(FavoriteContext)
  const isDarkMode = useColorScheme() === 'dark'

  return (
    <ScrollContainer isDarkMode={isDarkMode}>
      {city === '' ? (
        favorites.length > 0 &&
        favorites.map(city => <CityCard key={city} city={city} setPage={setPage} />)
      ) : (
        <CityCard city={city} setPage={setPage} />
      )}
    </ScrollContainer>
  )
}

export default CardList
