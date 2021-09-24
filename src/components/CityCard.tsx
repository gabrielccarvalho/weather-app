import React from 'react'
import { View } from 'react-native'

import styled, { DefaultTheme } from 'styled-components'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Button } from 'react-native-paper'

import { Text } from './Text'

const Container = styled(View)`
  align-items: stretch;
  justify-content: center;

  margin: 10px 20px;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.white};
`

const Row = styled(View)`
  flex-direction: row;
  justify-content: space-between;
`

const Col = styled(View)`
  justify-content: center;
  align-items: flex-start;
`

const CityCard = () => {
  const [favorite, setFavorite] = React.useState<boolean>(false)

  return (
    <Container>
      <Row>
        <Col>
          <Text size='mmd'>Blumenau</Text>
          <Text size='sm'>Brasil</Text>
          <Col
            style={{ marginTop: 10 }}
          >
            <Text size='sm'>Chuva fraca</Text>
            <Text size='sm'>14° a 18°</Text>
          </Col>
        </Col>
        <Col
          style={{
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: 5
          }}
        >
          <Text size='lg'>18°</Text>
          <Button
            onPress={() => setFavorite(!favorite)}
          >
            <Icon
              color={favorite ? '#ff0000' : '#e7e4fc'}
              name='favorite'
              size={25}
            />
          </Button>
        </Col>
      </Row>
    </Container>
  )

}

export default CityCard
