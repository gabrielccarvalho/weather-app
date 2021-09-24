import { Text as RNText } from 'react-native'

import styled, { DefaultTheme } from 'styled-components'

type TextSize = keyof DefaultTheme['textSizes']
type Color = keyof DefaultTheme['colors']
type TextWeight = keyof DefaultTheme['textWeights']


type TextProps = {
  size?: TextSize
  color?: Color
  weight?: TextWeight
  aerated?: boolean
  shadow?: boolean
}

const textDefaultProps = {
  size: 'md',
  color: 'black',
  weight: 'normal',
  shadow: false,
  aerated: false
} as const


const Text = styled(RNText)<TextProps>`
  color: ${({ color = textDefaultProps.color, theme }) => theme.colors[color]};
  ${({ shadow, theme }) => shadow && `text-shadow: ${theme.shadow}`};
  font-size: ${({ size = textDefaultProps.size, theme }) =>
    theme.textSizes[size]};
  font-weight: ${({ weight = textDefaultProps.weight, theme }) =>
    theme.textWeights[weight]};
  text-align: ${({ aerated }) => (aerated ? 'justify' : 'left')};

`

Text.defaultProps = textDefaultProps

export { Text }
