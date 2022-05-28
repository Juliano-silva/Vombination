import style from './Header.module.css'
import Link from 'next/link';
import React,{Component} from 'react';
import $ from 'jquery';
import {IoIosMenu} from 'react-icons/io'
class Header extends Component{
  constructor(props){
    super(props)
  }
  componentDidMount = () => {
     $("#btn").on("click",function(){
      $("#sub").fadeOut('fast')
     })
  //   //  $("#btn").on("click",function(){
  //   //   $("#sub").fadeIn('fast')
  //    })
  }
render(){
  return(
    <div>
      <h1 className={style.Titulo}><IoIosMenu id='btn'/>Título</h1>
      <ul className={style.sub_títulos} id="sub">
        <li><Link href="/"><a>Blog</a></Link></li>
          <li><Link href="/views/Res/Restaurante"><a>Restaurante</a></Link></li>
          <li><Link href="/views/Port/Port"><a>Portfolio</a></Link></li>
          <li><Link href="/views/Vid/Vid"><a>Vídeos</a></Link></li>
          <li><Link href="/views/Wik/Wiki"><a>Wiki</a></Link></li>
          <li><Link href="/views/Mur/Mural"><a>Mural de fotos</a></Link></li>
          <li><Link href="/views/List/Listas"><a>Listas</a></Link></li>
      </ul>
    </div>
  )
}
}
export default Header;