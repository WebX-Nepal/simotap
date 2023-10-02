import { useCallback,useState,useEffect,useRef } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

import './App.css'
import particleConfig from './components/particleBg/particleConfig';
import {Home,Item,Shop,AboutUs,Login} from './pages/index.js'
import Profile from './components/profile/Profile';
import Products from './components/products/Products';
import Carts from './pages/cart/Carts';
import Forms from './components/forms/Forms';
import CartConfirm from './components/cartsecond/CartConfirm';
import Section3 from './components/homeComponent/section3/Section3';
function App() {
  
  const particlesInit = useCallback(async engine => {
    await loadFull(engine);
}, []);

const particlesLoaded = useCallback(async container => {
    // await console.log(container);
}, []);

const [maskStyle, setMaskStyle] = useState({});
const [isHovering, setIsHovering] = useState(false);
const [isScrolled,setIsScrolled]=useState(false)
const router = createBrowserRouter([
  {
    path: "/",
    Component:Home
  },
  {
    path: "shop",
   Component:Shop,
  },
  {
    path: "aboutUs",
   Component:AboutUs,
  },
  {
    path: "item",
   Component:Item,
  },
  {
    path: "login",
   Component:Login,
  },
  {
    path:"profile",
    Component:Profile
  },
  {
    path:"product",
    Component:Products
  }
  ,
  {
    path:"cart",
    Component:Carts
  },
  {
    path:"form",
    Component:Forms
  },
  {
    path:"confirm-cart",
    Component:CartConfirm
  },
{
  path:"section",
  Component:Section3
}
]);

  const handleMouseMove = (e) => {
    let x, y;

    if (e.type === 'mousemove'||e.type=== 'touchmove') {
      x = e.clientX;
      y = e.clientY ;
    } else if (e.type === 'touchmove' && e.touches.length > 0) {
      x = e.touches[0].pageX;
      y = e.touches[0].pageY;
    }
    setMaskStyle({
      position: 'fixed',
      background: `radial-gradient(circle 150px at ${x}px ${y}px, transparent 50%, #EDEDED 100%)`,
       });
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Function to handle showing/hiding the scroll-to-top button
  const handleScroll = () => {
    if (window.scrollY > 200) { // You can adjust the threshold here
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };
  
  // Attach the scroll event listener when the component mounts
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  return (
    
    <div
      className={`container ${isHovering ? 'hovering' : ''}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    > 
       <div className="content-container">
      
       <RouterProvider router={router} />
     
      </div>
      <div id="scrollToTop" onClick={scrollToTop} className={isScrolled ? 'show' : ''}>
    <span>&#8593;</span>
  </div>
      <div className={`particle-div ${isHovering ? '' : 'hidden'}`}><Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={particleConfig}
      /></div>
      <div className="hover-div" style={maskStyle}></div>
      </div>

  )
}

export default App
