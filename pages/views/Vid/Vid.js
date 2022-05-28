import Header from "../../Header e Footer/Header"
import Footer from "../../Header e Footer/Footer"
import { createClient } from "contentful"
export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  })

  const res = await client.getEntries({ content_type: "youbate" })

  return {
    props: {
        youbates: res.items,
    }
  }
}

export default function Víd({youbates}){
    console.log(youbates)
    return(
        <nav>
            <title>Vídeos</title>
        <Header/>
        <h1>Restaurante</h1>
        <Footer/>
        </nav>
    )
}