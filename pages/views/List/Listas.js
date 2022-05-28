
import Header from "../../Header e Footer/Header"
import Footer from "../../Header e Footer/Footer"
import React, {Component} from "react";
import $ from 'jquery'
class Jquery extends Component{
    constructor(props){
      super(props)
    }
    componentDidMount = () => {
      $('button').on('click',function(){
        alert("Test")
      })
    }
    render(){
      return(
        <nav>
            <Header/>
          <h2>Jquery</h2>
          <p>
            <button>Test Button</button>
          </p>
          <Footer/>
        </nav>
      )
    }
  } 
  export default Jquery;