import { FC } from "react"

import Head from "next/head"
import { Navbar } from "../ui"

interface Props {
  title?:string
  children: JSX.Element
}

const origin = (typeof window === 'undefined') ? '' : window.location.origin

const Layout: FC<Props> = ({ children, title }) => {
  

  return (
    <>
      <Head>
        <title>{ title || 'Pokemon App' }</title>
        <meta name="author" content="Carlos Ortiz" />
        <meta name="description" content={`Informaciono sobre el pokemon ${title}`} />
        <meta name="keywords" content={`${title}, pokemon, pokedex`} />

        <meta property="og:title" content={`Informacion del pokemon ${title}`} />
        <meta property="og:description" content={`Esta es la pagina sobre ${title}`} />
        <meta property="og:image" content={`${origin}/img/banner.png`} />
      </Head>
      <Navbar/> 
      <main style={{
        padding: '0px 20px'
      }}>
        { children }
      </main>
    </>
  )
}

export default Layout