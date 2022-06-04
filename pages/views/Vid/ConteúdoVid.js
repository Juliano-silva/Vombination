import { createClient } from "contentful"
export default function ConteúdoVido({youbates}){
    const {vdeo,uploand} = youbates.fields
    return(
        <div>
            <h1>Conteúdo</h1>
            <iframe src={'https:'+vdeo.fields.file.url}
            width="500"
            height="250"
            frameBorder="0"
            allowFullScreen="false"
            />
            <h1>{uploand}</h1>
        </div>
    )
}