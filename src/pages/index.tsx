import { NextPage, GetStaticProps } from 'next'
import { Layout } from '../components/layouts'
import pokeApi from '../../api/pokeApi'
import { PokemonListInterface, SmallPokemon } from '@/interfaces'
import { Grid } from '@nextui-org/react'
import {PokemonCard} from '@/components/pokemon'

interface Props {
  pokemons: SmallPokemon[]
}

const HomePage: NextPage<Props> = ({pokemons}) => {
  return (
    <Layout title='Listado de Pokemon'>
      <Grid.Container gap={2} justify='flex-start'>
        {pokemons.map(pokemon => (
          <PokemonCard key={ pokemon.id }  pokemon={ pokemon }/>
          )
        )}
      </Grid.Container>
    </Layout>
  )
 }
 
 export const getStaticProps: GetStaticProps = async () => {
  
   const {data} = await pokeApi.get<PokemonListInterface>('/pokemon?limit=151')
   const pokemons: SmallPokemon[] = data.results.map((poke, i) => ({
     ...poke,
     id: i + 1,
     image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${(i + 1)}.svg`
   }))

  return {
    props: {
      pokemons
    }
  }
 }

export default HomePage