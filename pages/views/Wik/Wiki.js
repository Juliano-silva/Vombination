import Header from "../../Header e Footer/Header"
import Footer from "../../Header e Footer/Footer"
import style from './Wiki.module.css'
import Logo from '../../Img/Dmc.png'
import Image from 'next/image'
export default function Wiki(){
    return(
        <nav>
              <title>Wiki</title>
        <Header/>
        <div className={style.Blog}>
        <div className={style.CardD}>
        <Image className={style.img} src={Logo} />
        <h1>Dante</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur provident quae modi inventore corrupti tempora atque reprehenderit! Ea ipsum eum necessitatibus quis, fugiat error? Officiis dolor dicta illum perferendis ipsa.</p>
        </div>
        <div className={style.contéudoD}>
        <h1>Armas</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, facilis doloribus. Quasi aspernatur alias accusantium porro dolore repellendus explicabo dolores, harum sit. Ipsa commodi, quam nobis aliquid voluptatibus incidunt asperiores?</p>
        <h1>Músicas</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente, exercitationem? Quaerat, sit quis cupiditate, minima ea ab explicabo quas sint sunt nulla tempora, harum exercitationem ad impedit nihil iusto repellat.</p>
        <h1>Bosses</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus maiores repellat minus? Recusandae, quibusdam doloremque? Magni est fugit architecto sint, perspiciatis eius mollitia dolorem id quisquam quos necessitatibus perferendis repellendus?</p>
        <h1>História</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam autem vero eligendi ratione dolorem velit nobis aspernatur fuga quo in, quis expedita magnam facere sunt eum necessitatibus veritatis voluptate aperiam optio sapiente? Quibusdam repudiandae facere autem, laborum ipsam veniam nulla eligendi quas atque, hic odit velit, eveniet harum ducimus odio nobis fugiat soluta excepturi veritatis molestias? Inventore mollitia officiis quia in, corporis atque laudantium, ullam est illo hic nam doloremque natus repellendus vero earum delectus. Excepturi nemo impedit saepe, debitis magnam iure voluptatem rem voluptas earum adipisci mollitia maxime deserunt odio harum hic tenetur voluptates sapiente suscipit odit at obcaecati.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci temporibus ea tempora aliquid explicabo velit asperiores autem dolorum, a repellendus libero aliquam nihil iusto quidem modi facilis itaque laboriosam est assumenda voluptas repellat ipsum impedit eaque! Iusto, dicta blanditiis. Odit officia delectus eius? Ipsa alias fugiat qui, dicta, voluptatem dolorum nobis porro obcaecati nesciunt ea repudiandae voluptates facere minus accusantium tenetur delectus maxime corporis animi ad aliquid ducimus, corrupti quia. Veniam odio, nulla aliquid facere maiores explicabo sit perferendis necessitatibus officiis voluptatibus aspernatur vero sequi quisquam tempora asperiores eum, doloribus in qui! Itaque nam, sequi soluta eum, repellat quia sint tenetur fugiat illo qui neque reprehenderit numquam minima sit sed quidem impedit! Mollitia architecto illo ad explicabo debitis rerum eligendi odio pariatur praesentium, blanditiis porro veritatis exercitationem quas soluta voluptatum nihil ea temporibus officiis culpa asperiores cum quisquam error delectus! Excepturi quos dolor velit maxime ad reiciendis ratione similique optio. Itaque et accusamus quia natus ex. Quasi consequatur, maxime explicabo maiores non ullam reprehenderit? Sed magni atque eaque explicabo aliquam cum, fuga necessitatibus numquam deleniti perspiciatis ratione inventore ex a nobis aspernatur ipsa impedit, eveniet nemo ipsam? Iure vitae maxime incidunt eum, magnam debitis nemo, tempora voluptatibus, eos sunt harum aperiam deleniti pariatur. Corporis magnam, possimus quam sequi dignissimos voluptatem hic sapiente est, nisi odio consequatur vitae. Est pariatur quasi illum hic dicta perspiciatis ipsum id et, tempora amet ducimus quas ipsam? Voluptatibus nisi asperiores laudantium eos veniam voluptas praesentium cumque blanditiis! Architecto exercitationem nobis alias, quibusdam, et dignissimos ipsa inventore quas esse quaerat possimus officiis in laboriosam quam, harum odit ullam eaque reiciendis similique consequatur quod! Animi, reprehenderit, a aliquam recusandae molestiae eos officiis perferendis error sint cum quod hic nisi est quos! Sint exercitationem fugiat nesciunt voluptates quidem qui commodi tenetur dolores! Quod quasi, culpa aspernatur, eum odio temporibus, expedita reiciendis nobis commodi laudantium earum quibusdam eius! Voluptates cum adipisci earum temporibus, pariatur accusantium quos harum dolorum, vero quas impedit eum beatae et. At, perspiciatis quibusdam necessitatibus molestiae nesciunt, vero veritatis suscipit asperiores laudantium qui, ex eligendi illo! Eligendi architecto maiores beatae ab ad aperiam alias dolor, ipsa temporibus tenetur soluta dolorum expedita in nesciunt ducimus? Ut, molestiae. Ut tenetur odit dolores voluptatum repellat accusantium non voluptatem reiciendis voluptates quae commodi dignissimos, culpa rerum unde dolore temporibus reprehenderit corrupti minima vero et harum amet ab! Amet nesciunt itaque expedita distinctio magni nam id reiciendis hic aperiam, voluptatum suscipit!</p>
        </div>
        </div>
        <Footer/>
        </nav>
    )
}