import React from "react";
import styles from "./progress.module.css";

const ProgressBar = (props) => {
  return (
    <div className={styles.progressSection}>
      <span className={styles.labelStyles}>Reloading in {props.time}s</span>
      <div className={styles.progressContainer}>
        <div className={styles.progressFill} style={{"width":`${100*((props.time)/60)}%`}}>
        </div>
      </div>
    </div>
  )
}

export default ProgressBar;