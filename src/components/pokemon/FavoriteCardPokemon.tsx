import React, { FC } from 'react'

import { useRouter } from 'next/router'
import { Card, Grid } from '@nextui-org/react'

interface Props {
  pokemonsId: number
}

const FavoritePokemons: FC<Props> = ({ pokemonsId }) => {
  const route = useRouter()
  const onFavoriteCardPokemon = () => {
    route.push(`/pokemon/${pokemonsId}`)
  }
return (
  <Grid xs={6} sm={3} md={2} xl={1}>
    <Card
      isHoverable
      isPressable
      css={{ padding: 10 }}
      onPress={onFavoriteCardPokemon}
    >  
      <Card.Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonsId}.svg`}
        width={'100%'}
        height={ 150 }
      />
    </Card>  
  </Grid>
  )
}

export default FavoritePokemons