import style from './Header.module.css'
import Link from 'next/link';
import Image from 'next/image'
import React,{Component} from 'react';
import $, { css } from 'jquery';
import {IoIosMenu} from 'react-icons/io'
import icone from '../Img/download.png'
class Header extends Component{
  constructor(props){
    super(props)
  }
  componentDidMount = () => {
     $("#btnClick").on("change",function(){
       if ($(this).prop('checked')){
        $("#sub").fadeIn(this.scrollLeft)
       }else{
        $("#sub").fadeOut(this.scrollLeft)
       }
  })
  }
render(){
  return(
    <div>
      <div className={style.Titulo}>
      <Image className={style.ico} src={icone} />
      <h1>Vombate</h1>
      <label for="btnClick"><IoIosMenu className={style.Menu}/></label>
      <input className={style.submi} type="checkbox" id='btnClick'/>
      </div>
      <ul className={style.sub_títulos} id="sub">
      <label for="btnClick"><IoIosMenu className={style.Menu}/></label>
        <li><Link href="/"><a>Blog</a></Link></li>
          <li><Link href="/views/Res/Restaurante"><a>Restaurante</a></Link></li>
          <li><Link href="/views/Port/Port"><a>Portfolio</a></Link></li>
          <li><Link href="/views/Vid/Vid"><a>Vídeos</a></Link></li>
          <li><Link href="/views/Wik/Wiki"><a>Wiki</a></Link></li>
          <li><Link href="/views/Mur/Mural"><a>Mural de fotos</a></Link></li>
          <li><Link href="/views/List/Listas"><a>Listas</a></Link></li>
          <div className={style.HPerfil}>
        <h1>Juliano</h1>
        <p>Juliano</p>
      </div>
      </ul>
    </div>
  )
}
}
export default Header;