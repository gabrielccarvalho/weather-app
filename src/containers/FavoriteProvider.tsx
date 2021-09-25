import React from 'react'

type FavoriteContextType = {
  favorites: string[]
  updateFavorites: (favorites: string) => void
}

const FavoriteContext = React.createContext<FavoriteContextType>({
  favorites: [],
  updateFavorites: () => {},
})

export default FavoriteContext
