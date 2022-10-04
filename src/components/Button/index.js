import React from "react";
import styles from "./Button.module.css";

export default function Button({
  text = "",
  children = "",
  onClick = () => {
    console.log("Button pressed");
  },
  style = {},
}) {
  return (
    <button style={style} onClick={onClick} className={styles.button}>
      {!children ? text : children}
    </button>
  );
}
