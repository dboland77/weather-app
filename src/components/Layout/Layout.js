import React from "react";
import styles from "./Layout.module.css";

const Layout = (props) => {
  return (
    <div className = {styles.innerWrap}>
      {props.children}
      </div>
  )
}

export default Layout;