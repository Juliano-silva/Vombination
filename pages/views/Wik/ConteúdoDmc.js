import style from './Wiki.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel  from 'react-bootstrap/Carousel';
export default function Novidade({May}){
    const {personagem,armas,historia,slug,dmcProtagonistas} = May.fields
    return(
        <div>
            <Carousel>
        <Carousel.Item><img className={style.ImgDmc}src={'https:'+dmcProtagonistas[0].fields.file.url}/></Carousel.Item>
        <Carousel.Item><img className={style.ImgDmc}src={'https:'+dmcProtagonistas[1].fields.file.url}/></Carousel.Item>
        <Carousel.Item><img className={style.ImgDmc}src={'https:'+dmcProtagonistas[2].fields.file.url}/></Carousel.Item>
        <Carousel.Item><img className={style.ImgDmc}src={'https:'+dmcProtagonistas[3].fields.file.url}/></Carousel.Item>
        <Carousel.Item><img className={style.ImgDmc}src={'https:'+dmcProtagonistas[4].fields.file.url}/></Carousel.Item>
        <Carousel.Item><img className={style.ImgDmc}src={'https:'+dmcProtagonistas[5].fields.file.url}/></Carousel.Item>
        </Carousel>
            <h1>{personagem}</h1>
            <h1>{slug}</h1>
            <h2>{armas+";"}</h2>
            <p>{historia}</p>
        </div>
    )
}