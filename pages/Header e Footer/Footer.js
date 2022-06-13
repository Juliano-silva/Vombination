import style from '../Header e Footer/Footer.module.css'
import Instagram from '../Img/Instagram.png'
import Github from '../Img/Github.png'
import Whatsapp from '../Img/Whatsapp.png'
import Linkedin from '../Img/linkedin.png'
import Image from "next/dist/client/image"
export default function Footer(){
  return(
    <div>
      <div className={style.Footer}>
        <div className={style.ListFooter}>
          <br />
          <div className={style.Icone}>
          <h5>Nossas redes</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus error debitis quibusdam aspernatur neque pariatur, eum voluptas explicabo optio corrupti eius natus. Sit dolores earum quaerat maiores suscipit, voluptatum quod.</p>
          {/* Aqui fica os links que vão mandar para as redes sociais */}
          <div className={style.icone}>
          <button><a href="https://web.whatsapp.com"><Image src={Whatsapp} /></a></button>
          <button><a href="https://www.linkedin.com/in/juliano-silva-de-almeida-8a7b42238/"><Image src={Linkedin} /></a></button>
          <button><a href="https://github.com/Juliano-silva"><Image src={Github} /></a></button>
          <button><a href="https://www.instagram.com/ju.liano1841/"><Image src={Instagram} /></a></button>
          </div>
          </div>
          <div className={style.Produção}>
          <h5>Produtora</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis nulla, labore voluptas illo, dolorum praesentium quidem maiores eum, similique dignissimos aperiam beatae commodi in quam officiis eveniet voluptate. Eos, adipisci.</p>
          </div>
          <div className={style.Links}>
          <h5>Links usados</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis nulla, labore voluptas illo, dolorum praesentium quidem maiores eum, similique dignissimos aperiam beatae commodi in quam officiis eveniet voluptate. Eos, adipisci.</p>
          </div>
          <div className={style.Criador}>
          <h5>Criador</h5>
         <h3>Empresa:JSA</h3>
         <h4>Diretor: Shinji Hashimoto</h4>
         <h4>Programador: Juliano Silva de Almeida</h4>
         <h4>Designer:N.Dito</h4>
         <h4>Cara do café:Khaldi</h4>
         <h4>Inspiração:Adiemla ed Avlis Onailuj</h4>
         <h4>THE MAN:Juliano silva de almeida</h4>
          </div>
        </div>
      </div>
    </div>
  )
}