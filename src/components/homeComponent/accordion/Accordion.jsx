import React from 'react';

import styles from"./accordion.module.css"
function Accordion({ title, content,isOpen,onClick }) {
  const accordionClasses = `${styles.accordion} ${isOpen ? styles.expanded : ''}`;

  return (
    <div className={accordionClasses}>
    <div className={styles['accordion-header']} onClick={onClick}>
      {title}
      <span className={`${styles.arrow} ${isOpen ? styles.expanded : ''}`}>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </span>
    </div>
    {isOpen && <div className={`${styles['accordion-content']} ${isOpen ? styles.expanded : ''}`}>{content}</div>}
  </div>
  );
}

export default Accordion;
