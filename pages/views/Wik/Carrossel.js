import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel  from 'react-bootstrap/Carousel';
import Image from 'next/image'
export default function Carrossel({May}){
    return(
        <Carousel>
        <Carousel.Item><img className="d-block w-100"src="holder.js/800x400?text=Second slide&bg=282c34" alt="Second slide"/></Carousel.Item>
        <Carousel.Item><img className="d-block w-100"src="holder.js/800x400?text=Second slide&bg=282c34" alt="Second slide"/></Carousel.Item>
        <Carousel.Item><img className="d-block w-100"src="holder.js/800x400?text=Second slide&bg=282c34" alt="Second slide"/></Carousel.Item>
        <Carousel.Item><img className="d-block w-100"src="holder.js/800x400?text=Second slide&bg=282c34" alt="Second slide"/></Carousel.Item>
        <Carousel.Item><img className="d-block w-100"src="holder.js/800x400?text=Second slide&bg=282c34" alt="Second slide"/></Carousel.Item>
      </Carousel>
    )
}