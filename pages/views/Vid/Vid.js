import Header from "../../Header e Footer/Header"
import Footer from "../../Header e Footer/Footer"
import style from './Vid.module.css'
import Autor from '../../Img/Autor.png'
import Comentario from './Comentario'
import Image from 'next/image'
import { createClient } from "contentful"
import {AiFillLike,AiFillDislike} from 'react-icons/ai'
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
        <nav className={style.Vid}>
            <title>Vídeos</title>
        <Header/>
        <br />
        <div className={style.Tudo}>
        <div className={style.Tabs}>
        <img className={style.TabImg} />
        </div>
        <div className={style.ParteBaixo}>
        <h1>Colocamos um careca e um ex lutador de karater para conversar. Deu Treta? :()</h1>
        <div className={style.Like}>
        <button><AiFillLike/></button>
        <button><AiFillDislike/></button>
        </div>
        <img className={style.Doutor}/>
        <h2>Eve 128 mil inscritos</h2>
        <Comentario/>
        </div>
        <div className={style.Conteudo}>
        {youbates.map((youbate) => (
            <ConteúdoVido key={youbate.sys.id} youbates={youbate}/>
        ))}
        </div>
        <br />
        </div>
        <Footer/>
        </nav>
    )
}