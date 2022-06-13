import style from './Mural.module.css'
export default function Novidade({murals}){
    const {imagem,data,nomeFoto,descrioDasFotos} = murals.fields
    return(
        <div className={style.Mural}>
             <img src={'https:'+imagem.fields.file.url}
            width={imagem.fields.file.details.image.width}
            height={imagem.fields.file.details.image.height}/>
            <a href={'https:'+imagem.fields.file.url} download="" target="_blank"><button>Imagem em Tela cheia</button></a>
            <div className={style.Descript}>
            <h1>{nomeFoto}</h1>
            <h3>{"Data de post: "+data}</h3>
            <p>{"Descrição da foto: "+descrioDasFotos}</p>
            <h4>Tamanho da foto: {imagem.fields.file.details.image.width}X{imagem.fields.file.details.image.height}</h4>
            </div>
        </div>
    )
}