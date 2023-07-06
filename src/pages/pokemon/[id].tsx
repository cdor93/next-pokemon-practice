import { NextPage, GetStaticProps, GetStaticPaths } from "next";

import { Layout } from "@/components/layouts"
import { pokemonUtils } from "../../../utils";
import { PokemonDescription } from "@/components/pokemon";
import { PokemonDescriptionInterface } from "@/interfaces";


interface Props {
  pokemon: PokemonDescriptionInterface
}

const PokemonPage:NextPage<Props> =({pokemon}) => {
  return (
    <Layout title={`#${pokemon.id} - ${pokemon.name}`}>
      <PokemonDescription pokemon={pokemon}/>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {

  const pokemon151 = [...Array(151)].map((_, index) => `${index + 1}`)

  return {
    paths: pokemon151.map(id => ({
      params: {id}
    })),
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({params}) => {
  const { id } = params as { id: string }
  const pokemon = await pokemonUtils.getPokemonInfo(id)

  if (!pokemon)
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  
  
  return {
    props: {
      pokemon
    },
    revalidate: 86400 //24 hora
  }
}

export default PokemonPage