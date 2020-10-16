import React from "react";
import ImageContainer from "./ImageContainer";
import styles from "./weathercard.module.css";

const WeatherCard = () => {
  return(
    <div className = {styles.weatherwrap}>
        <ul className={styles.flexListInner}>
          <li className={styles.flexItem}>
            MON 
          </li>
          <li className={styles.flexItem}>
             12 &deg; 
          </li>
          <ImageContainer/>
        </ul>
      </div>
  )
}

export default WeatherCard;