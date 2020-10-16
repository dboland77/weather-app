import React from "react";
import ImageContainer from "./ImageContainer";
import styles from "./weathercard.module.css";

const WeatherCard = (props) => {
  return(
    <div className = {styles.weatherwrap}>
        <ul className={styles.flexListInner}>
          <li className={styles.flexItem}>
            {props.day} 
          </li>
          <li className={styles.flexItem}>
             {props.temp} &deg;
          </li>
          <ImageContainer 
          image={props.image}
            text={props.description}
          />
        </ul>
      </div>
  )
}

export default WeatherCard;