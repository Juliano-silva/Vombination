import style from './Blog.module.css'
import Api from './Api'
export default function Blog(){
    return(
        <div>
             <div className={style.Blog}>
            <Api/>
        </div>
        </div>
    )
}