import { PokemonDescriptionInterface } from '@/interfaces'
import { Button, Card, Container, Grid, Image, Text } from '@nextui-org/react'
import React, { FC } from 'react'
import usePokemonDescription from './hooks/usePokemonDescription'

interface Props {
  pokemon:PokemonDescriptionInterface
}
const PokemonDescription: FC<Props> = ({ pokemon }) => {

  const {isInFavorites, onToggleFavorite } = usePokemonDescription({pokemon})
  
  return (
   <Grid.Container css={{ marginTop: '5px' }} gap={2} >
        <Grid xs={12} sm={4} >
          <Card isHoverable css={{ padding: '30px' }}>
            <Card.Body>
              <Card.Image
                src={pokemon.sprites.other?.dream_world.front_default || '/no-image.png'}
                alt={pokemon.name}
                width="100%"
                height={200}
              />
            </Card.Body>

          </Card>
        </Grid>

        <Grid xs={12} sm={8} >
          <Card>
            <Card.Header css={{ display:'flex', justifyContent:'space-between'} }>
              <Text h1 transform="capitalize">{pokemon.name}</Text>
              <Button
                color='gradient'
                ghost={!isInFavorites}
                onPress={onToggleFavorite}
              >
                {isInFavorites ? 'En Favorito' : 'Guardar en favorito'}
              </Button>
            </Card.Header>
            <Card.Body>
              <Text size={30}>Sprites:</Text>
              <Container display="flex" direction="row" gap={ 0 }>
                <Image
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.front_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
  )
}

export default PokemonDescription