import style from './Restaurante.module.css'
export async function getStaticProps() {
    const client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_KEY,
    })
  
    const res = await client.getEntries({ content_type: "restbate" })
  
    return {
      props: {
        restbates: res.items,
      }
    }
  }
export default function Conteúdo({restbates}){
    const {pratos,descrio,slug,ingredientsRes,fotosPrtatos,autor,tempo} = restbates.fields
    return(
        <div className={style.CorpoRest}>
            <div className={style.cardRestaurante}>
            <img className={style.imags} src={'https:'+fotosPrtatos.fields.file.url}
            width={fotosPrtatos.fields.file.details.image.width}
            height={fotosPrtatos.fields.file.details.image.height}
            />
            <h1>{pratos}</h1>
            <p>{descrio}</p>
            <ul>
              <h1>Ingredientes:</h1>
                <li>{ingredientsRes+";"}</li>
                <li>{"Tempo de preparo "+tempo+" minutos"}</li>
            </ul>
            <h2>{"Criadora:"+autor}</h2>
            </div>
        </div>
    )
}