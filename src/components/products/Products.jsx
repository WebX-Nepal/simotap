import React from "react";
import "./products.css";
import { Tilt } from 'react-tilt'
import { Link } from "react-router-dom";



const Products = () => {
  return (
    <div className="cards">
      <div className="card">
      <Tilt glareEnable={true} tiltMaxAngleX={20} 
      tiltMaxAngleY={20} perspective={1}  style={{ height: 250, width: 250 }}>
      <img
      src="src/assets/Rectangle 77.png"
      className="card-img-top image"
      alt="card image"
    />
    </Tilt>
        <div className="text-area">
        <div classNameName="card-body">
          <h5 className="card-title">Artic White Matt PVC</h5>
          <p className="card-text">
            Rs:2000
          </p>
          <Link to="/cart" style={{textDecoration:"none"}}><button className="button" >Add to cart</button>
          </Link>
          </div>
      </div>
      </div>
    </div>
  );
};

export default Products;
