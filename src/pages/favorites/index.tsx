import { useEffect, useState } from "react"

import { NextPage } from "next"

import { NoFavorites } from "@/components/ui"
import { Layout } from "@/components/layouts"
import { localFavorites } from "../../../utils"
import { FavoritePokemons } from "@/components/pokemon"


const FavoritesPage: NextPage = () => {

  const [favoritesPokemon, setFavoritesPokemon] = useState<number[]>([])

  useEffect(() => {
    setFavoritesPokemon(localFavorites.getFavorites())
  }, [])
  

  return (
    <Layout title="Pokemon - Favoritos">
      {
        !favoritesPokemon.length
          ? <NoFavorites />
          : <FavoritePokemons pokemonsIds={favoritesPokemon} />  
      }
    </Layout>
  )
}

export default FavoritesPage