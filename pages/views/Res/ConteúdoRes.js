import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import style from './Restaurante.module.css'
export default function Conteúdo({restbates}){
    const {pratos,descrio,ingredientsRes,fotosPrtatos} = restbates.fields
    return(
        <div className={style.CorpoRest}>
            <div className={style.cardRestaurante}>
            <img className={style.imags} src={'https:'+fotosPrtatos.fields.file.url}
            width={fotosPrtatos.fields.file.details.image.width}
            height={fotosPrtatos.fields.file.details.image.height}
            />
            <h1>{pratos}</h1>
            <h1>{descrio}</h1>
            <ul>
                <li>{ingredientsRes}</li>
            </ul>
            </div>
        </div>
    )
}