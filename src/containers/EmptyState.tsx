import React from 'react'
import { ScrollView, View } from 'react-native'

import styled from 'styled-components'

import { Text } from '../components'

const ScrollContainer = styled(ScrollView).attrs({
  contentInsetAdjustmentBehavior: 'automatic',
  contentContainerStyle: { flexGrow: 1, justifyContent: 'center' },
})`
  background-color: ${({ theme }) => theme.colors.lightest};
`

const Container = styled(View)`
  align-items: center;
  justify-content: center;
  padding: 0 30px;

  background-color: ${({ theme }) => theme.colors.lightest};
`

const EmptyState = () => {
  return (
    <ScrollContainer>
      <Container>
        <Text size='lg' weight='semiBold' style={{ textAlign: 'center', marginBottom: 20 }}>
          Parece que você ainda nāo adicionou nenuma cidade
        </Text>
        <Text size='md' style={{ textAlign: 'center' }}>
          Tente adicionar uma cidade usando o botāo de busca acima!
        </Text>
      </Container>
    </ScrollContainer>
  )
}

export default EmptyState
