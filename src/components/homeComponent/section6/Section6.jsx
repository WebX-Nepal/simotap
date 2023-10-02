import React from "react";
import styles from "./section6.module.css";
import { rect } from "../../../assets/pictures";
function Section6() {
  return (
    <section className={styles.section6}>
      <h1>
        What Other Businessmen Are Saying About <span>SIMOTAP</span>
      </h1>
      <div className={styles.cards}>
        <div className={styles.card}>
          <img src={rect} alt="card" />

          <div className={styles.text}>
            <h2>Alisha Rai</h2>
            <p>
              “Last time I lost Bijay Khanna’s business card then I missed one
              real big deal. After I buy SIMOTAP my business is growing now.”
            </p>
          </div>
        </div>

        <div className={styles.card}>
          <img src={rect} alt="card" />

          <div className={styles.text}>
            <h2>Alisha Rai</h2>
            <p>
              “Last time I lost Bijay Khanna’s business card then I missed one
              real big deal. After I buy SIMOTAP my business is growing now.”
            </p>
          </div>
        </div>

        <div className={styles.card}>
          <img src={rect} alt="card" />

          <div className={styles.text}>
            <h2>Alisha Rai</h2>
            <p>
              “Last time I lost Bijay Khanna’s business card then I missed one
              real big deal. After I buy SIMOTAP my business is growing now.”
            </p>
          </div>
        </div>

        <div className={styles.card}>
        <img src={rect} alt="card" />

        <div className={styles.text}>
          <h2>Alisha Rai</h2>
          <p>
            “Last time I lost Bijay Khanna’s business card then I missed one
            real big deal. After I buy SIMOTAP my business is growing now.”
          </p>
        </div>
      </div>

      <div className={styles.card}>
      <img src={rect} alt="card" />

      <div className={styles.text}>
        <h2>Alisha Rai</h2>
        <p>
          “Last time I lost Bijay Khanna’s business card then I missed one
          real big deal. After I buy SIMOTAP my business is growing now.”
        </p>
      </div>
    </div>
      </div>
    </section>
  );
}

export default Section6;
