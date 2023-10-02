import React from 'react'
import styles from "./itemSection.module.css";
function ItemSection() {
  return (
    <div className={styles.itemSection}>
      <section className={styles.section1}>
        <div className={styles.left}>
          <img src="https://images.unsplash.com/photo-1615433366992-1586f3b8fca5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG5mY3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="item_pic" />
        </div>
        <div className={styles.right}>
          <div className={styles.itemInfo}>
            <h1>Phone Case NFC Sticker</h1>
            <h2>Rs. 23000</h2>
          </div>
          <div className={styles['quantity-controls']}>
            <button className={styles.dec_btn}>-</button>
            <p className={styles.qty_text}>4</p>
            <button className={styles.inc_btn}>+</button>
          </div>
          <div className={styles.itemDetail}>
            <p>This is a good tapping sticker for your mobile device.</p>
            <button>Add To Cart</button>
          </div>
        </div>
      </section>
      <div><h1>↑ Payment Gateway PopUp</h1></div>
    </div>
  )
}

export default ItemSection