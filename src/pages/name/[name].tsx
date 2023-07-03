import { NextPage, GetStaticProps, GetStaticPaths } from "next";

import { Layout } from "@/components/layouts"
import { PokemonDescriptionInterface, PokemonListInterface } from "@/interfaces"
import pokeApi from "../../../api/pokeApi";
import { pokemonUtils } from "../../../utils";
import { PokemonDescription } from "@/components/pokemon";

interface Props {
  pokemon: PokemonDescriptionInterface
}

const PokemonPage:NextPage<Props> =({pokemon}) => {
  return (
    <Layout title={`#${pokemon.id} - ${pokemon.name}`}>
      <PokemonDescription pokemon={ pokemon } />
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {

  const {data} = await pokeApi.get<PokemonListInterface>(`/pokemon?limit=151`)
  const pokemonsName:string[] = data.results.map((pokemon) => pokemon.name)
  
  return {
    paths: pokemonsName.map(name => ({
      params: {name}
    })),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({params}) => {
  const { name } = params as { name: string }

  return {
    props: {
      pokemon: await pokemonUtils.getPokemonInfo(name)
    }
  }
}

export default PokemonPage