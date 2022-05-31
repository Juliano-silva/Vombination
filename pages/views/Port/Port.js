import Header from "../../Header e Footer/Header"
import Footer from "../../Header e Footer/Footer"
import style from './Port.module.css'
import Image from "next/dist/client/image"
import Autor from '../../Img/Autor.png'
export default function Port(){
    return(
        <nav>
            <title>Portfolio</title>
        <Header/>
        <div className={style.Portfolio}>
            <Image src={Autor}/>
            <h1>Portfolio</h1>
            <h2>Nome</h2>
            <h3>Nome de Perfil</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor repudiandae, aliquam mollitia incidunt autem expedita ipsa aliquid dolore assumenda molestiae minus veniam repellat tenetur laudantium, distinctio sed ad fuga labore neque explicabo? Ipsa veniam architecto, debitis cupiditate magnam aut molestiae consequatur impedit laboriosam natus placeat dolorum molestias. Error hic autem excepturi, aliquid reiciendis quidem eius ea ex aliquam architecto iusto omnis pariatur a! Dolorem, dolores? Cupiditate esse ullam blanditiis velit repellat aliquam? Reiciendis molestias, ut commodi officiis odit rem cum corporis fugiat ipsam quo pariatur iure, adipisci voluptatibus itaque eum maiores impedit ullam quos doloribus provident magnam! Earum optio itaque accusantium accusamus nisi quas suscipit porro ipsam animi totam. Autem laboriosam numquam, nesciunt quo optio ducimus explicabo harum veniam unde impedit molestiae officia! Cupiditate nam quasi numquam suscipit at voluptatibus provident corrupti voluptas, fugiat, veniam optio, minima soluta iusto. Fugit, exercitationem enim alias beatae magni voluptate dolorum officiis quasi porro asperiores perferendis facilis nesciunt ducimus deserunt non illo officia fuga! Aperiam quidem et optio expedita quo alias nisi architecto fuga distinctio quas, perferendis iste ducimus nobis sunt totam consectetur voluptas. Possimus eius dolores quis! Expedita quasi placeat earum vel omnis repellendus ullam id fugit unde a facere molestias, ipsam recusandae?</p>
        </div>
        <Footer/>
        </nav>
    )
}