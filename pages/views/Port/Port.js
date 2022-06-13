
import Header from "../../Header e Footer/Header"
import style from './Port.module.css'
import Image from "next/dist/client/image"
import Autor from '../../Img/Autor.png'
import Instagram from '../../Img/Instagram.png'
import Github from '../../Img/Github.png'
import Whatsapp from '../../Img/Whatsapp.png'
import Linkedin from '../../Img/linkedin.png'
export default function Port(){
    return(
        <nav>
            <title>Portfolio</title>
        <Header/>
        <div className={style.Portfolio}>
            <div className={style.Autore}>
                <br />
            <Image width={360} height={300}  className={style.Imagens} src={Autor}/>
            </div>
            <div className={style.Port}>
            <h1>Juliano silva de almeida </h1>
            <p>Sou Juliano Almeida tenho 17 anos, estudo programação a mais ou menos 1 ano e meio e.meu sonho e me tornar um programador fullstack,Agora falando um pouco sobre o Vombate eu tive a ideia para esse nome quando eu estava procurando sobre animais mais famosos e a ideia de ser 6 site web em um veio de várias ideias que tive então resolvi combinar tudo. Ele deve ter demorado uns 10 dias.Espero que gostei do meu site tanto quanto eu gostei de fazer ela. </p>
            <h4>Minhas redes socias então aqui</h4>
            <div className={style.Informações}>
            <button><a href="https://web.whatsapp.com"><Image src={Whatsapp}/></a></button>
          <button><a href="https://www.linkedin.com/in/juliano-silva-de-almeida-8a7b42238">          <Image src={Linkedin}/></a></button>
          <button><a href="https://github.com/Juliano-silva"><Image src={Github}/></a></button>
          <button><a href="https://www.instagram.com/ju.liano1841/"><Image src={Instagram}/></a></button>
            </div>
            </div>
        </div>
        </nav>
    )
}