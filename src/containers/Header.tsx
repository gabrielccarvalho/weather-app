import React from 'react'
import { Platform, View, useColorScheme } from 'react-native'
import { Button, Searchbar } from 'react-native-paper'
import Icon from 'react-native-vector-icons/FontAwesome'
import FavIcon from 'react-native-vector-icons/MaterialIcons'

import styled, { DefaultTheme } from 'styled-components'

import { theme } from '../baseStyles'
import { Text } from '../components'
import { PagesType } from '../pages'

import CityForecastContext from './CityForecastProvider'
import FavoriteContext from './FavoriteProvider'

type Color = keyof DefaultTheme['colors']

const Container = styled(View)<{ bgColor: Color }>`
  padding: 20px;
  background-color: ${({ bgColor, theme }) => theme.colors[bgColor]};
`

const Wrapper = styled(View)`
  flex-grow: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

const Row = styled(View)`
  flex-direction: row;
  align-items: center;
`

const Search = styled(Searchbar)`
  margin-top: 20px;
`

type HeaderProps = {
  query?: string
  setQuery?: React.Dispatch<React.SetStateAction<string>>
  setPage?: React.Dispatch<React.SetStateAction<PagesType>>
}

const Header = ({ query, setQuery, setPage }: HeaderProps) => {
  const { city } = React.useContext(CityForecastContext)
  const { favorites, updateFavorites } = React.useContext(FavoriteContext)
  const [showSearch, setShowSearch] = React.useState<boolean>(false)

  const isDarkMode = useColorScheme() === 'dark'

  const isFavorite = favorites.includes(city)

  const bgColor = isDarkMode ? 'black' : 'darkest' // DARKMODE

  switch (query === undefined) {
    case false:
      return (
        <Container
          bgColor={bgColor}
          style={Platform.OS === 'ios' && { marginTop: -50, paddingTop: 50 }}
        >
          <Wrapper>
            <Text size='lg' color='white' weight='semiBold'>
              Cidades
            </Text>
            <Button onPress={() => setShowSearch(!showSearch)}>
              <Icon color='white' name='search' size={20} />
            </Button>
          </Wrapper>
          {showSearch && (
            <Search
              autoCorrect={false}
              placeholder='Procure por uma cidade...'
              onChangeText={(query: string) => setQuery?.(query)}
              value={query!}
            />
          )}
        </Container>
      )
    default:
      return (
        <Container
          bgColor={bgColor}
          style={Platform.OS === 'ios' && { marginTop: -50, paddingTop: 50 }}
        >
          <Wrapper>
            <Row>
              <Button onPress={() => setPage && setPage('Cities')}>
                <Icon color='white' name='chevron-left' size={20} />
              </Button>
              <Text size='lg' color='white' weight='semiBold'>
                {city}
              </Text>
            </Row>
            {
              <Button onPress={() => updateFavorites(city)}>
                <FavIcon
                  color={isFavorite ? theme.colors.red : theme.colors.white}
                  name='favorite'
                  size={25}
                />
              </Button>
            }
          </Wrapper>
        </Container>
      )
  }
}

export default Header
