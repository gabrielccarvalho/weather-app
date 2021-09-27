import React from 'react'
import { TouchableWithoutFeedback, View } from 'react-native'
import { Button } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialIcons'

import styled from 'styled-components'

import { theme } from '../baseStyles'
import CityForecastContext from '../containers/CityForecastProvider'
import FavoriteContext from '../containers/FavoriteProvider'
import { PagesType } from '../pages'
import { weatherRequest } from '../services/api'
import { capitalize } from '../utils/functions'

import LoadingCard from './LoadingCard'
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
// We disable camel-case linting for the weather data type
/* eslint-disable camelcase */
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

type Props = {
  city: string
  setPage: React.Dispatch<React.SetStateAction<PagesType>>
}

const CityCard = ({ city, setPage }: Props) => {
  const { favorites, updateFavorites } = React.useContext(FavoriteContext)
  const { setCity } = React.useContext(CityForecastContext)
  const [favorite, setFavorite] = React.useState<boolean>(favorites.includes(city))
  const [data, setData] = React.useState<WeatherData>()

  React.useEffect(() => {
    city && weatherRequest(city).then(res => setData(res))
  }, [city])

  const handlePress = () => {
    setCity(city)
    setPage('CityForecast')
  }

  return (
    <Container>
      {data ? (
        <TouchableWithoutFeedback onPress={handlePress}>
          <Row>
            <Col>
              <Text size='mmd'>{data.name}</Text>
              <Text size='sm'>{data.sys.country}</Text>
              <Col style={{ marginTop: 10 }}>
                <Text size='sm' color='darkest' weight='semiBold'>
                  {capitalize(data.weather[0].description)}
                </Text>
                <Text size='sm'>
                  {data.main.temp_min.toFixed(0)} °C a {data.main.temp_max.toFixed(0)} °C
                </Text>
              </Col>
            </Col>
            <Col
              style={{
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingTop: 5,
              }}
            >
              <Text size='lg'>{data.main.temp.toFixed(0)} °C</Text>
              <Button
                onPress={() => {
                  setFavorite(!favorite)
                  updateFavorites(city)
                }}
                style={{ zIndex: 999 }} // Favourite button should be over everything
              >
                <Icon
                  color={favorite ? theme.colors.red : theme.colors.lightest}
                  name='favorite'
                  size={25}
                />
              </Button>
            </Col>
          </Row>
        </TouchableWithoutFeedback>
      ) : (
        <LoadingCard />
      )}
    </Container>
  )
}

export default CityCard
