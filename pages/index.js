import Header from './Header e Footer/Header'
import Footer from './Header e Footer/Footer'
import Blog from './views/Blog/Blog'
import Link from 'next/link';
export default function Home() {
  return(
    <div>
        <title>Blog</title>
      <Header/>
      <Blog/>
      <Footer/>
    </div>
  )
}