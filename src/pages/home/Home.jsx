import "./home.css";
import {Navbar,HomeSection,Footer} from '../../components/index.js';


function Home() {
  

   return (
    <div className='homeDiv'>
      <Navbar/>
      <HomeSection/>
      <Footer/>
      
    </div>
  )
}

export default Home