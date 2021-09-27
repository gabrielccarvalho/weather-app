import React from 'react'
import { ScrollView } from 'react-native'

import styled from 'styled-components'

import { CityCard } from '../components'
import { PagesType } from '../pages'

import FavoriteContext from './FavoriteProvider'

const ScrollContainer = styled(ScrollView).attrs({
  contentInsetAdjustmentBehavior: 'automatic',
  contentContainerStyle: { flexGrow: 1 },
})`
  background-color: ${({ theme }) => theme.colors.lightest};
`

type Props = {
  city: string
  setPage: React.Dispatch<React.SetStateAction<PagesType>>
}

const CardList = ({ city, setPage }: Props) => {
  const { favorites } = React.useContext(FavoriteContext)

  return (
    <ScrollContainer>
      {city === '' ? (
        favorites.length > 0 &&
        favorites.map(city => <CityCard key={city} city={city} setPage={setPage} />)
      ) : (
        <CityCard city={city} setPage={setPage} />
      )}
    </ScrollContainer>
  )
}

export default CardList
