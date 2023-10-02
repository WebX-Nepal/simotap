import React from "react";
import styles from "./shopSection.module.css";
import Products from "../products/Products";

function ShopSection() {
  return (
    <div className={styles.shopSection}>
      <div className={styles.sectionSearch}>
        <div className={styles.scrollContainer}>
          <button autoFocus>PVC CARDS</button>
          <button>PROXIMITY MARKETING TAGS</button>
          <button>WOODEN CARDS</button>
          <button>PHONE TAGS</button>
          <button>WRIST BANDS</button>
          <button>BUNDLES</button>
         </div>
      </div>

    <div className="productss">
    <div className={styles.product} style={{display:"flex"}}>
    <Products/>
    <Products />
    <Products />
    <Products />
    <Products />
  </div>
    </div>
    </div>
  );
}

export default ShopSection;
