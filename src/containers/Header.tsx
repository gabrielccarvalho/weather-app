import React from 'react'
import { View, useColorScheme, Platform } from 'react-native'

import styled, { DefaultTheme } from 'styled-components'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Searchbar, Button } from 'react-native-paper'

import { Text } from '../components'

type Color = keyof DefaultTheme['colors']

const Container = styled(View)<{bgColor: Color}>`
  padding: 20px;
  background-color: ${({ bgColor, theme }) => theme.colors[bgColor]};
`

const Wrapper = styled(View)`
  flex-grow: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

const Search = styled(Searchbar)`
  margin-top: 20px;
`

const Header = () => {
  const [searchQuery, setSearchQuery] = React.useState<string>('')
  const [showSearch, setShowSearch] = React.useState<boolean>(false)

  const isDarkMode = useColorScheme() === 'dark'

  const bgColor = isDarkMode ? 'black' : 'darkest' // DARKMODE

  const onChangeSearch = (query: string) => setSearchQuery(query)

  return (
    <Container
      bgColor={bgColor}
      style={Platform.OS === 'ios' && { marginTop: -50, paddingTop: 50 }}
    >
      <Wrapper>
        <Text
          size='lg'
          color='white'
          weight='semiBold'
        >
          Cidades
        </Text>
        <Button
          onPress={() => setShowSearch(!showSearch)}
        >
          <Icon color='white' name='search' size={20} />
        </Button>
      </Wrapper>
      {showSearch &&
        <Search
          placeholder="Procure por uma cidade..."
          onChangeText={onChangeSearch}
          value={searchQuery}
      />}
    </Container>
  )
}

export default Header
