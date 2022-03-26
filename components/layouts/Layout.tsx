import { FC} from "react"

import Head from "next/head"
import { Navbar } from "../ui";

interface PropsRecibidas{ 
  title?: string;
}
const origin = (typeof window === "undefined")? '' : window.location.origin

export const Layout:FC<PropsRecibidas> = ({children, title}) => {
  return (
    <>
      <Head>
        <title>{title || 'PokemonApp'}</title>
        <meta name="author" content="Germán Hornus" />
        <meta name="description" content={`Información sobre el pokemon ${title}`} />
        <meta name="keywords" content={`${title}, pokemon,pokedex`}/>

        <meta property="og:title" content={`Informacion sobre ${title}`} />
        <meta property="og:description" content={`Esta es la página sobre ${title}`} />
        <meta property="og:image" content={`${origin}/img/banner.png`} />
      </Head>
      <Navbar />
      <main style={{
        padding: '0px 20px',
      }}>
        {children}
      </main>
    </>
  )
}
