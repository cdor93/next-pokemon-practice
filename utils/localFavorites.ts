const getFavorites = (): number[] => JSON.parse(localStorage.getItem('favorites') || '[]')

const toggleFavorite = (id: number) => {
  let favorites: number[] = getFavorites()

  if (favorites.includes(id)) {
    favorites = favorites.filter(pokeId => pokeId !== id)
  } else {
    favorites.push(id)
  }

  localStorage.setItem('favorites', JSON.stringify(favorites))
}

const existInFavorites = (id: number): boolean => {
  if (typeof window === 'undefined') return false
  
  const favorites: number[] = getFavorites()
  return favorites.includes(id)
}

export {
  toggleFavorite,
  existInFavorites,
  getFavorites
}