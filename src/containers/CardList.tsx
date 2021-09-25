import React from 'react'
import { useColorScheme, ScrollView } from 'react-native'

import styled from 'styled-components'

import { CityCard } from '../components'

const ScrollContainer = styled(ScrollView).attrs({
  contentInsetAdjustmentBehavior: "automatic",
  contentContainerStyle: { flexGrow: 1 }
})<{isDarkMode: boolean}>`
  background-color:
    ${({ isDarkMode, theme }) =>
      isDarkMode ? theme.colors.black : theme.colors.lightest
    };
`

const CardList = ({ city }: { city: string }) => {
  const isDarkMode = useColorScheme() === 'dark'

  return (
    <ScrollContainer isDarkMode={isDarkMode}>
      <CityCard city={city} />
    </ScrollContainer>
  )
}

export default CardList

