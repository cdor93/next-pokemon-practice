import Image from "next/image"
import NextLink from 'next/link'
import { Spacer, Text, useTheme, Link } from "@nextui-org/react"
import { helpers } from "../../../utils"

const Navbar = () => {
  const { theme } = useTheme()
  
  return (
    <div style={{
      display:'flex',
      width:'100',
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'start',
      padding: '0px 20px',
      backgroundColor: theme?.colors.gray100.value
    }}>

      <Image
        alt="Icono de la app"
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${helpers.getRandomNumber(151)}.svg`}
        width={40}
        height={40}
      />

      <NextLink href="/" passHref legacyBehavior>
        <Link>
          <Text color='white' h2>P</Text>
          <Text color='white' h3>okemon</Text>
        </Link>
      </NextLink>
      
      <Spacer css={{ flex: 1}} />
      
      <NextLink href="/favorites" passHref legacyBehavior>
        <Link>
          <Text color='white' h3>Favorito</Text> 
        </Link>
      </NextLink>

    </div>
  )
}

export default Navbar