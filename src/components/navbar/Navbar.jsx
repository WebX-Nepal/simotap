import { react, useState } from "react";
import styles from "./Navbar.module.css";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  // adding the states
  const [isActive, setIsActive] = useState(false);

  //add the active class
  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };



  //clean up function to remove the active class
  const removeActive = () => {
    setIsActive(false);
  };

  return (
    <div className={`${styles.nav}`}>
      {
        <NavLink to="/" className={`${styles.logo}`}>
          <img src="src/assets/logo.png" />
        </NavLink>}

      <ul className={`${styles.navMenu} ${isActive ? styles.active : ""}`}>
        <li onClick={removeActive}>
          <NavLink to="/" className={({ isActive }) => (isActive ? styles.active : "")} >
            Home
          </NavLink>
        </li>
        <li onClick={removeActive}>
          <NavLink to="/shop" className={({ isActive }) => (isActive ? styles.active : "")}>
            Shop
          </NavLink>
        </li>
        <li onClick={removeActive}>
          <NavLink to="/aboutus" className={({ isActive }) => (isActive ? styles.active : "")}>
            About Us
          </NavLink>
        </li>
        <div className="bts">
          <Link to='/login'><button className={styles.signUpBtn}>Sign Up</button>
          </Link>
        </div>
      </ul>

      <div
        className={`${styles.hamburger} ${isActive ? styles.active : ""} `}
        onClick={toggleActiveClass}
      >
        <span className={`${styles.bar}`}></span>
        <span className={`${styles.bar}`}></span>
        <span className={`${styles.bar}`}></span>

      </div>

    </div>
  );
}

export default Navbar;