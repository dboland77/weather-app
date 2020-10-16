import React from "react";
import styles from "./progress.module.css";

const ProgressBar = () => {
  return (
    <div className={styles.progressSection}>
      <span className={styles.labelStyles}>Reloading in 20s</span>
      <div className={styles.progressContainer}>
        <div className={styles.progressFill}>
        </div>
      </div>
    </div>
  )
}

export default ProgressBar;