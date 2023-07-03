import { SmallPokemon } from "@/interfaces"
import { Card, Grid, Row, Text } from "@nextui-org/react"
import { useRouter } from "next/router"
import { FC } from "react"

interface Props {
  pokemon:SmallPokemon
}

const PokemonCard: FC<Props> = ({ pokemon: { id, name, image } }) => {
  const router = useRouter()
  
  const onClick = () => {
    router.push(`/name/${name}`)
  }

  return (
    <Grid key={id} xs={6} sm={3} md={2} xl={1}  >
      <Card isHoverable isPressable onPress={onClick}>
        <Card.Body>
          <Card.Image src={image} alt={`image del pokemon #${(id)}`} width='100%' height={ 140 } />
        </Card.Body>
        <Card.Footer>
          <Row justify='space-between'>
            <Text transform='capitalize'>{name}</Text>
            <Text>{`#${id}`}</Text>
          </Row>
        </Card.Footer>
      </Card>    
    </Grid>
  )
}

export default PokemonCard