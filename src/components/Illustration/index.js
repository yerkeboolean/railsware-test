import React from "react";
import styles from "./Illustration.module.css";

export default function Illustration({ src = "", style = {} }) {
  return (
    <div className={styles.illustration} style={style}>
      <img className={styles.image} src={src} alt="" />
    </div>
  );
}
