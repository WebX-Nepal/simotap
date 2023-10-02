import React, { useState } from "react";
import "./cart.css";
import { Link } from "react-router-dom";

const Cart = () => {
  const[number,setNumber]=useState(1)
  return (
    <>
      <div className="container cart-container">
        <div className="product-container">
          <img src="src/assets/Rectangle 83.png" className="product-image" />
          <img src="src/assets/Rectangle 97.png" className="product-image1" />
          <div className="text-container">
            <h4>Goole review Tags</h4>
            <span>Rs 23000</span>
          </div>

          <div className="add-items">
            <img src="src/assets/Group 129.png" alt="image" onClick={()=>setNumber(number-1)}/>
            <span>{number}</span>
            <img src="src/assets/Group 130.png" alt="image" onClick={()=>setNumber(number + 1)} />
          </div>

          <div className="text">
            <ul className="list">
             <li> <p>Powered by NFC and QR code</p></li> 
             <li> <p>iOS & andriod| No App needed</p></li>
              <li><p>All you need to network</p></li>
             <li><p>Powered by NFC and QR code</p></li> 
             <li><p>One off Fee | No subscription</p></li> 
             <li><p>Free Worldwide Shipping</p></li> 
             <li><p>In stock ready to ship</p></li> 
            </ul>
          </div>
          <Link to="/confirm-cart"><button className="btn">Add to cart</button></Link>
          
        </div>
      </div>
    </>
  );
};

export default Cart;
