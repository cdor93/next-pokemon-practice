/* eslint-disable react-hooks/exhaustive-deps */
import { PokemonDescriptionInterface } from "@/interfaces"
import { localFavorites } from "../../../../utils"
import { useEffect, useState } from "react"
import confetti from "canvas-confetti"

interface usePokemonDescriptionInterface {
  pokemon:PokemonDescriptionInterface
}

const usePokemonDescription = ({pokemon}:usePokemonDescriptionInterface) => {
   const [isInFavorites, setIsInFavorites] = useState(false)

  useEffect(() => { 
    setIsInFavorites(localFavorites.existInFavorites(pokemon.id))
  }, [])

  const onToggleFavorite = () => {
    localFavorites.toggleFavorite(pokemon.id)
    setIsInFavorites(!isInFavorites)
    
    if (isInFavorites) return
    
    confetti({
      zIndex: 999,
      particleCount: 250,
      spread: 160,
      angle: -100,
      origin: {
        x: 1,
        y: 0
      }
    })
  }  
  return {
    isInFavorites,
    onToggleFavorite
  }
}

export default usePokemonDescription