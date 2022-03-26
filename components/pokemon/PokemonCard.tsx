import { Card, Grid, Row, Text } from "@nextui-org/react"
import { useRouter } from "next/router"
import { FC } from "react"
import { SmallPokemon } from "../../interfaces"

interface Props {
  pokemons: SmallPokemon

}

export const PokemonCard:FC<Props>= ({pokemons:{id,img,name}}) => {

  const router = useRouter()

  const onClick = ()=>{
    router.push(`/name/${name}`)
  }

  return <Grid xs={6} sm={3} md={2} xl={1} >
        <Card onClick={onClick}  hoverable clickable>
          <Card.Body css={{
            p:1
          }}>
            <Card.Image width="100%" height={140} src={img} alt={name} />
          </Card.Body>
          <Card.Footer >
            <Row justify="space-between">
              <Text transform="capitalize">{name}</Text>
              <Text># {id}</Text>
            </Row>
          </Card.Footer>
             
        </Card>
      </Grid>
      

}
