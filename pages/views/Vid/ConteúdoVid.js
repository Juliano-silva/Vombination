import { createClient } from "contentful"
import style from './Vid.module.css'
export default function ConteúdoVido({youbates}){
    const {vdeo,uploand,descrio,slug,canal} = youbates.fields
    return(
        <div className={style.Videos}>
            <iframe className={style.iframe} src={'https:'+vdeo.fields.file.url}
            frameBorder="0"
            allowFullScreen="false"
            />
            {/* Descrição */}
            <div className={style.Descri}>
            <h1>{canal}</h1>
            <h2>{slug}</h2>
            <h3>{uploand}</h3>
            <p>{descrio}</p>
            </div>
        </div>
    )
}