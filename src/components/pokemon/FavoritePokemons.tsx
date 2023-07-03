import React, { FC } from 'react'

import { Grid } from '@nextui-org/react'

import FavoritePokemons from './FavoriteCardPokemon'


interface Props {
  pokemonsIds: number[]
}

const FavoritesPokemon:FC<Props> = ({pokemonsIds}) => {
  return (
     <Grid.Container gap={2} direction="row" justify="flex-start">
      {
        pokemonsIds.map(id => (
          <FavoritePokemons key={ id } pokemonsId={ id } />
        ))
      }
    </Grid.Container>
  )
}

export default FavoritesPokemon