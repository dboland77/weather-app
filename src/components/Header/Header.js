import React from "react";
import Clock from "../Clock/Clock";
import styles from "./header.module.css";

const Header = (props) =>{
  return (
    <header className = {styles.header1}>
    <ul className={styles.flexList}>
      <li className={styles.flexItem1}>
        {props.city} 
      </li>
     <li>
       <Clock/>
     </li>
      <li className={styles.flexItem1}>
        {props.temp}&deg;
      </li>
    </ul>
    {props.children}
  </header>
  );
}

export default Header;