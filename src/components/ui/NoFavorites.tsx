import { Container, Image, Text } from '@nextui-org/react'

import { helpers } from '../../../utils'

const NoFavorites = () => {
  return (
    <Container css={{
      display: 'flex',
      flexDirection: 'column',
      height: 'calc(100vh - 100px)',
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center'
    }}>
      <Text h1> No hay Favorito</Text>
        
      <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${helpers.getRandomNumber(151)}.svg`}
        alt="Image"
        width={250}
        height={250}
        css={{opacity: 0.2}}
      />

    </Container>
  )
}

export default NoFavorites