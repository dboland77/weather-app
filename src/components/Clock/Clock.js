import React, {useState,useEffect} from "react";
import styles from "./clock.module.css";

const Clock = (props) =>
{
  const [date,setDate] = useState(new Date()) 

  useEffect(()=> {
    let timerID = setInterval( () => 
    tick(),1000);
    return function cleanup() {
      clearInterval(timerID);
    };
  });
  function tick() {
    setDate(new Date());
  }
  return (
    <div className={styles.clock}>
      {date.toLocaleTimeString([],{timeStyle: 'short'})}
    </div>
    )
}

export default Clock;