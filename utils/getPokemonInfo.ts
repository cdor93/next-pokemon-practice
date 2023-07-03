import { PokemonDescription } from "@/interfaces"
import pokeApi from "../api/pokeApi"


const getPokemonInfo = async (nameOrId: string) => {

 const {data} = await pokeApi.get<PokemonDescription>(`/pokemon/${nameOrId}`)

  return {
    id: data.id,
    name: data.name,
    sprites: data.sprites
  }
}

export {
  getPokemonInfo
}