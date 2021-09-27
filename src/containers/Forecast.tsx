import React from 'react'
import { ScrollView, View } from 'react-native'

import styled from 'styled-components'

import { ForecastCard } from '../components'

const ScrollContainer = styled(ScrollView).attrs({
  contentInsetAdjustmentBehavior: 'automatic',
  contentContainerStyle: { flexGrow: 1 },
})`
  background-color: ${({ theme }) => theme.colors.lightest};
`

const Container = styled(View)`
  align-items: stretch;
  padding: 0 30px;

  background-color: ${({ theme }) => theme.colors.lightest};
`

const Forecast = () => {
  return (
    <ScrollContainer>
      <Container>
        {[...Array(5).keys()].map(date => (
          <ForecastCard key={date} date={date} />
        ))}
      </Container>
    </ScrollContainer>
  )
}

export default Forecast
