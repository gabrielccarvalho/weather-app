import React from 'react'
import { View } from 'react-native'

import { format, isToday, parse } from 'date-fns'
import { ptBR as locale } from 'date-fns/locale'
import styled from 'styled-components'

import CityForecastContext from '../containers/CityForecastProvider'
import { forecastRequest } from '../services/api'
import { capitalize } from '../utils/functions'

import { Text } from './Text'

const Container = styled(View)`
  align-items: stretch;

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
  city: {
    name: string
    country: string
  }
  list: [
    {
      main: {
        temp: number
        feels_like: number
        temp_min: number
        temp_max: number
        pressure: number
        humidity: number
      }
      weather: {
        main: string
        description: string
      }
      dt_txt: string
    }
  ]
}

type Props = {
  date: number
}

const ForecastCard = ({ date }: Props) => {
  const { city } = React.useContext(CityForecastContext)
  const [data, setData] = React.useState<WeatherData>()

  React.useEffect(() => {
    city && forecastRequest(city).then(res => setData(res))
  }, [city])

  // We only want to get one weather forecast per day
  const filteredList = data?.list
    .filter(res => res.dt_txt.split(' ')[1] === '12:00:00')
    .map(e => e)

  const filtereData = filteredList?.[date]
  const dateStr = filteredList?.[date].dt_txt
  const parsedDate = dateStr && parse(dateStr, 'yyyy-MM-dd HH:mm:ss', new Date())
  const dateIsToday = isToday(parsedDate as Date)

  const day = dateIsToday
    ? 'Hoje'
    : parsedDate && capitalize(format(parsedDate, 'EEE', { locale }))

  return (
    <Container>
      <Row>
        <Col>
          <Text size='mmd'>{day}</Text>
          <Text size='sm'>{data?.city.country}</Text>
          <Col style={{ marginTop: 10 }}>
            <Text size='sm'>{filtereData?.weather.description}</Text>
            <Text size='sm'>
              {filtereData?.main.temp_min.toFixed(0)} °C a{' '}
              {filtereData?.main.temp_max.toFixed(0)} °C
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
          <Text size='lg'>{filtereData?.main.temp.toFixed(0)} °C</Text>
        </Col>
      </Row>
    </Container>
  )
}

export default ForecastCard
