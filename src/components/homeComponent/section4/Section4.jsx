import React from 'react'
import { card } from '../../../assets/pictures'
import styles from "./section4.module.css"
function Section4() {
  return (
    <section className={styles.section4}>
        <h1>Create <span>Custom</span> Card</h1>
        <div className={styles.cards}>


          <div className={styles.card}>
            <div className={styles.cardImg}>
              <img src={card} alt="card" />
            </div>
            <div className={styles.cardInfo}>
              <h2>SIMOTAP Premium (Pre-order)</h2>
              <div className={styles.price}> <p>Rs 15,555</p><span>Rs 23,499</span></div>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardImg}>
              <img src={card} alt={styles.card} />
            </div>
            <div className={styles.cardInfo}>
              <h2>SIMOTAP Premium (Pre-order)</h2>
              <div className={styles.price}> <p>Rs 15,555</p><span>Rs 23,499</span></div>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardImg}>
              <img src={card} alt="card" />
            </div>
            <div className={styles.cardInfo}>
              <h2>SIMOTAP Premium (Pre-order)</h2>
              <div className={styles.price}> <p>Rs 15,555</p><span>Rs 23,499</span></div>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardImg}>
              <img src={card} alt="card" />
            </div>
            <div className={styles.cardInfo}>
              <h2>SIMOTAP Premium (Pre-order)</h2>
              <div className={styles.price}> <p>Rs 15,555</p><span>Rs 23,499</span></div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Section4