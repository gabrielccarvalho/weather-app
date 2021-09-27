import React from 'react'
import { ScrollView, View, useColorScheme } from 'react-native'

import styled from 'styled-components'

import { ForecastCard } from '../components'

const ScrollContainer = styled(ScrollView).attrs({
  contentInsetAdjustmentBehavior: 'automatic',
  contentContainerStyle: { flexGrow: 1 },
})<{ isDarkMode: boolean }>`
  background-color: ${({ isDarkMode, theme }) =>
    isDarkMode ? theme.colors.black : theme.colors.lightest};
`

const Container = styled(View)<{ isDarkMode: boolean }>`
  align-items: stretch;
  padding: 0 30px;

  background-color: ${({ isDarkMode, theme }) =>
    isDarkMode ? theme.colors.black : theme.colors.lightest};
`

const Forecast = () => {
  const isDarkMode = useColorScheme() === 'dark'

  return (
    <ScrollContainer isDarkMode={isDarkMode}>
      <Container isDarkMode={isDarkMode}>
        {[...Array(5).keys()].map(date => (
          <ForecastCard key={date} date={date} />
        ))}
      </Container>
    </ScrollContainer>
  )
}

export default Forecast
