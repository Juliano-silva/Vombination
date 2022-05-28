import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
export default function Conteúdo({restbates}){
    const {pratos} = restbates.fields
    return(
        <h1>{pratos}</h1>
    )
}