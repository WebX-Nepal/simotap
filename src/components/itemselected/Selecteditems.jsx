import React, { useState } from "react";
import './selecteditems.css'

const Selecteditems = () => {
  const [number,setNumber] = useState(1)
  return (
    <>
    <div className="items">
    <div className="single-item">
      <div className="card-image">
        <img src="src/assets/card.png" />
      </div>
      <div className="name">
        <p>Card Name</p>
      </div>
      <div className="price">
        <p>Price:2500</p>
      </div>
      <div className="add-item">
        <div className="imgs">
          <img
            src="src/assets/Group 129.png"
            alt="image"
            onClick={() => setNumber(number - 1)}
            style={{ margin: "0px 15px 0px 10px" }}
          />
        </div>
        <div>
          <span>{number}</span>
        </div>
        <div>
          <img
            src="src/assets/Group 130.png"
            alt="image"
            onClick={() => setNumber(number + 1)}
            style={{ margin: "0px 15px 0px 7px" }}
          />
        </div>
      </div>
      <div className="icon">
    <img src="src/assets/Group 191.png"/>
  </div>
    </div>
    
  </div>
 
    </>
  );
}

  ;
;

export default Selecteditems;
