import React from 'react'
import { ScrollView, useColorScheme } from 'react-native'

import styled from 'styled-components'

import { CityCard } from '../components'

const ScrollContainer = styled(ScrollView).attrs({
  contentInsetAdjustmentBehavior: 'automatic',
  contentContainerStyle: { flexGrow: 1 },
})<{ isDarkMode: boolean }>`
  background-color: ${({ isDarkMode, theme }) =>
    isDarkMode ? theme.colors.black : theme.colors.lightest};
`

type Props = {
  city: string
  setEmpty: React.Dispatch<React.SetStateAction<boolean>>
}

const CardList = ({ city, setEmpty }: Props) => {
  const isDarkMode = useColorScheme() === 'dark'

  React.useEffect(() => {
    // If there is no search, we don't need to show any card.
    city === '' && setEmpty(true)
  }, [city])

  return (
    <ScrollContainer isDarkMode={isDarkMode}>
      <CityCard city={city} />
    </ScrollContainer>
  )
}

export default CardList
