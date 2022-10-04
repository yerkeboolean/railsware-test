import React from "react";
import styles from "./Title.module.css";

export default function Title({ text = "", children = "", style = {} }) {
  return (
    <div style={style} className={styles.title}>
      {!children ? text : children}
    </div>
  );
}
