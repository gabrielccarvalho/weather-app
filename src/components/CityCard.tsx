import React from 'react'
import { View } from 'react-native'

import styled from 'styled-components'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Button } from 'react-native-paper'

import { Text } from './Text'
import { weatherRequest } from '../services/api'

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

type WeatherData = {
  name: string
  weather: [
    {
      id: number
      main: string
      description: string
    }
  ]
  main: {
    temp: number
    feels_like: number
    temp_min: number
    temp_max: number
    pressure: number
    humidity: number
  }
  sys: {
    country: string
  }
}

const CityCard = ({ city }: { city: string }) => {
  const [favorite, setFavorite] = React.useState<boolean>(false)
  const [data, setData] = React.useState<WeatherData>()

  React.useEffect(() => { city && weatherRequest(city).then(res => setData(res)) }, [city])

  return (
    <Container>
      <Row>
        <Col>
          <Text size='mmd'>{data?.name}</Text>
          <Text size='sm'>{data?.sys.country}</Text>
          <Col
            style={{ marginTop: 10 }}
          >
            <Text size='sm'>{data?.weather[0]?.description}</Text>
            <Text size='sm'>
              {data?.main.temp_min.toFixed(0)} °C a {data?.main.temp_max.toFixed(0)} °C
            </Text>
          </Col>
        </Col>
        <Col
          style={{
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: 5
          }}
        >
          <Text size='lg'>{data?.main.temp.toFixed(0)} °C</Text>
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
