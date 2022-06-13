import Header from "../../Header e Footer/Header"
import Footer from "../../Header e Footer/Footer"
import Mur from './ConteúdoMur'
import style from './Mural.module.css'
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
        <nav className={style.Murais}>
          <title>Mural de fotos</title>
            <Header/>
            <br />
            <div className={style.Corpo_Mural}>
            {murals.map((mural)=>(
                  <Mur key={mural.sys.id} murals={mural}/>
            ))}
            </div>
            <br />
            <Footer/>
        </nav>
    )
}