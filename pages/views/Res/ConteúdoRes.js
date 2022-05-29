import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
export default function Conteúdo({restbates}){
    const {pratos,descrio,ingredientsRes} = restbates.fields
    return(
        <div>
            <h1>{pratos}</h1>
            <h1>{descrio}</h1>
            <ul>
                <li>{ingredientsRes}</li>
            </ul>
        </div>
    )
}