import React from "react";
import styles from "./image.module.css";

const ImageContainer = () => {
return (
  <div className={styles.flexImage}>
  <img 
  src="http://openweathermap.org/img/wn/02d.png"
    alt="Weather"
  />
  <p>
  clear sky
  </p>
</div>
)
}

export default ImageContainer;