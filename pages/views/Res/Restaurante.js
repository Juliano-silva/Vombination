import Header from "../../Header e Footer/Header"
import Footer from "../../Header e Footer/Footer"
import Conteúdo from "./ConteúdoRes"
import style from './Restaurante.module.css'
import { createClient } from "contentful"
export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  })

  const res = await client.getEntries({ content_type: "restbate" })

  return {
    props: {
      restbates: res.items,
    }
  }
}

export default function Restaurante({restbates}){
  console.log(restbates)
    return(
        <nav>
          <title>Restaurante</title>
    <Header/>
    <div className={style.Restaurante}>
    {restbates.map((restbate)=>(
       <Conteúdo key={restbate.sys.id} restbates={restbate}/>
    ))}
    </div>
    <Footer/>
    </nav>
    )
}