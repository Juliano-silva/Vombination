import style from './Blog.module.css'
export default function Blog(){
    return(
        <div>
             <div className={style.Blog}>
            <h1>Blog</h1>
            <textarea className={style.texto} id="texto" cols="30" rows="10" placeholder='Como você esta?'></textarea>
            <br />
            <input type="button" value="Comentar" id='coment'/>
        </div>
        <div className={style.CorpoBlog}>
            <h1>Titulo</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti consectetur consequuntur numquam adipisci distinctio repellat reprehenderit quaerat laborum ratione laboriosam provident, commodi voluptates ut unde eum quae nobis asperiores harum!</p>
        </div>
        </div>
    )
}