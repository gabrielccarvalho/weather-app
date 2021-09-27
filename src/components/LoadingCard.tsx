import React from 'react'
import { View } from 'react-native'

import styled from 'styled-components'

import { Text } from './Text'

const Container = styled(View)`
  align-items: center;
  justify-content: center;

  margin: 10px 20px;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.white};
`

const LoadingCard = () => {
  return (
    <Container>
      <Text size='lg' color='darkest' weight='bold'>
        Loading...
      </Text>
    </Container>
  )
}

export default LoadingCard
