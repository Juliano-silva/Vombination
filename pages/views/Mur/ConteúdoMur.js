import { createClient } from "contentful"
import { useState } from "react"
import style from './Mural.module.css'
export default function Novidade({murals}){
    const {imagem,data,nomeFoto} = murals.fields
    return(
        <div className={style.Mural}>
             <img src={'https:'+imagem.fields.file.url}
            width={imagem.fields.file.details.image.width}
            height={imagem.fields.file.details.image.height}/>
            <h1>{data}</h1>
            <h1>{nomeFoto}</h1>
            <h1>{imagem.fields.file.details.image.width}X{imagem.fields.file.details.image.height}</h1>
             <a href={'https:'+imagem.fields.file.url} download="sono.png" type="image/png">Clique Aqui</a>
        </div>
    )
}