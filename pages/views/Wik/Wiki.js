import Header from "../../Header e Footer/Header"
import Footer from "../../Header e Footer/Footer"
import Mur from './ConteúdoDmc'
import style from './Wiki.module.css'
import { createClient } from "contentful"
export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  })

  const res = await client.getEntries({ content_type: "dmc" })

  return {
    props: {
        May: res.items,
    }
  }
}

export default function Wiki({May}){
  console.log(May)
    return(
        <nav>
          <title>Wiki</title>
          <div className={style.Blog}>
            <Header/>
            {May.map((dmc)=>(
            <Mur key={dmc.sys.id} May={dmc}/>
            ))}
            <Footer/>
            </div>
        </nav>
    )
}