import Header from "../../Header e Footer/Header"
import Footer from "../../Header e Footer/Footer"
import { createClient } from "contentful"
export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  })

  const res = await client.getEntries({ content_type: "mural" })

  return {
    props: {
        murals: res.items,
    }
  }
}

export default function Novidade({murals}){
    console.log(murals)
    return(
        <nav>
          <title>Mural de fotos</title>
            <Header/>
            <h1>Mural de fotos</h1>
            <Footer/>
        </nav>
    )
}