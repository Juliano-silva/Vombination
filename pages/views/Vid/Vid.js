import Header from "../../Header e Footer/Header"
import Footer from "../../Header e Footer/Footer"
import style from './Vid.module.css'
import Tab from '../../Img/Tab.jpg'
import Image from 'next/image'
import { createClient } from "contentful"
import ConteúdoVido from "./ConteúdoVid"
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
        <br />
        <div className={style.Tabs}>
        <Image width={1000} src={Tab} />
        </div>
        <h1>Nome de um vídeo</h1>
        <button>Like</button>
        <button>DesLike</button>
        {/* icone do canal */}
        <h1>Eve</h1>
        {youbates.map((youbate) => (
            <ConteúdoVido key={youbate.sys.id} youbates={youbate}/>
        ))}
        <br />
        <Footer/>
        </nav>
    )
}