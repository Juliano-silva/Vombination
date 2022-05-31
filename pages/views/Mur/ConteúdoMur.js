import { createClient } from "contentful"
import { useState } from "react"
export default function Novidade({murals}){
    const {imagem} = murals.fields
    return(
        <div>
             <img src={'https:'+imagem.fields.file.url}
            width={imagem.fields.file.details.image.width}
            height={imagem.fields.file.details.image.height}
            />
             <a href={'https:'+imagem.fields.file.url} download="sono.png" type="image/png">Clique Aqui</a>
        </div>
    )
}