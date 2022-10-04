import React from "react";
import styles from "./SocialButtons.module.css";

export default function SocialButtons({ style = {} }) {
  return (
    <div style={style} className={styles.socialsWrapper}>
      <button
        style={style}
        onClick={() => {}}
        className={`${styles.button} ${styles.facebook}`}
      >
        Facebook
      </button>
      <button
        style={style}
        onClick={() => {}}
        className={`${styles.button} ${styles.google}`}
      >
        Google
      </button>
    </div>
  );
}
