import style from '../Header e Footer/Footer.module.css'
export default function Footer(){
  return(
    <div>
      <div className={style.Footer}>
        <div className={style.ListFooter}>
          <br />
          <div className={style.Icone}>
          <h5>Icone</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus error debitis quibusdam aspernatur neque pariatur, eum voluptas explicabo optio corrupti eius natus. Sit dolores earum quaerat maiores suscipit, voluptatum quod.</p>
          {/* Aqui fica os links que vão mandar para as redes sociais */}
          <button><a href="https://web.whatsapp.com">Whatsapp</a></button>
          <button><a href="https://www.linkedin.com/in/juliano-silva-de-almeida-8a7b42238/">Linkdin</a></button>
          <button><a href="https://github.com/Juliano-silva">Github</a></button>
          <button><a href="https://www.instagram.com/ju.liano1841/">Instagram</a></button>
          </div>
          <div className={style.Produção}>
          <h5>Produção</h5>
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