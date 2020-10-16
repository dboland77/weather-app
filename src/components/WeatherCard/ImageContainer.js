import React from "react";
import styles from "./image.module.css";

const ImageContainer = (props) => {
return (
  <div className={styles.flexImage}>
  <img 
  src={props.image}
    alt="Weather"
  />
  <p>
  clear sky
  </p>
</div>
)
}

export default ImageContainer;