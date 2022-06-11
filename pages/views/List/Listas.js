
import Header from "../../Header e Footer/Header"
import Footer from "../../Header e Footer/Footer"
import React, {Component} from "react";
import ApiList from './ApiList'
import $ from 'jquery'
class Jquery extends Component{
    constructor(props){
      super(props)
    }
    componentDidMount = () => {}
    render(){
      return(
        <nav>
          <title>Listas</title>
            <Header/>
          <h2>Jquery</h2>
            <ApiList/>
          <Footer/>
        </nav>
      )
    }
  } 
  export default Jquery;